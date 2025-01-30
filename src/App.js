import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Upload } from "react-feather";
import MetricCard from "./components/MetricCard";
import MerchantComponent from "./components/MerchantComponent";
import PatternDetectionComponent from "./components/PatternDetectionComponent";
import AxiosService from "./services/AxiosService";
import Spinner from "./components/Spinner";

function App() {
  const inputRef = useRef();
  const axiosService = new AxiosService();
  const [activeTab, setActiveTab] = useState("merchant-analysis");
  const [csvFile, setCsvFile] = useState();
  const [user, setUser] = useState();
  const [detectedPatterns, setDetectedPatterns] = useState([]);
  const [normalization, setNormalization] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getByUser()
    getDetectedPatterns()
    getNormalization()
  }, [])
  

  const handleFileSelected = (e) => {
    const file = Array.from(e.target.files)[0];
    uploadCsv(file)
    setCsvFile(file);
  };

  const uploadCsv = async (file) => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("files", file)

    axiosService.uploadCsv(formData).then(async (response) => {
      if(response.status === 200) {
        await getByUser()
        await getDetectedPatterns()
        await getNormalization()
        setIsLoading(false)
      }
    })
  }

  const getByUser = async () => {
    axiosService.getByUser().then((response) => {
      if (response.status === 200) setUser(response.data.data);
    });
  };

  const getDetectedPatterns = async () => {
    axiosService.getDetectedPatterns().then((response) => {
      if (response.status === 200) setDetectedPatterns(response.data.data);
    });
  };

  const getNormalization = async () => {
    axiosService.getNormalization().then((response) => {
      if (response.status === 200) setNormalization(response.data.data);
    });
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="border-b pb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Transaction Analyzer</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            onClick={() => inputRef.current.click()}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload CSV
          </button>
          <input
            ref={inputRef}
            className="hidden"
            type="file"
            accept=".csv"
            onChange={handleFileSelected}
          />
        </div>
        <h1 className="text-xs text-end">{csvFile?.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Total Spend" value={`${user?.total_spend ? "$" + user?.total_spend : ""}`} />
        <MetricCard title="Transactions" value={user?.transactions} />
        <MetricCard title="Avg. Transaction" value={`${user?.average_transactions ? "$" + user?.average_transactions : ""}`} />
        <MetricCard title="Merchants" value={user?.merchants} />
      </div>

      <div>
        <div className="border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === "merchant-analysis"
                ? "border-b-2 border-blue-500"
                : ""
            }`}
            onClick={() => setActiveTab("merchant-analysis")}
          >
            Merchant Analysis
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "pattern-detection"
                ? "border-b-2 border-blue-500"
                : ""
            }`}
            onClick={() => setActiveTab("pattern-detection")}
          >
            Pattern Detection
          </button>
        </div>
        {isLoading && (
          <div className="py-6 flex justify-center">
            <Spinner />
          </div>
        )}
        {activeTab === "merchant-analysis" ? (
          normalization.length > 0 &&
          <MerchantComponent data={normalization} />
        ) : (
          detectedPatterns.length > 0 &&
          <PatternDetectionComponent data={detectedPatterns} />
        )}
      </div>
    </div>
  );
}

export default App;
