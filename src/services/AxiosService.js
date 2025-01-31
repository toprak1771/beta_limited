import axios from "axios"
const apiUrl = process.env.REACT_APP_API_URL;

export default class AxiosService {
    
    uploadCsv(data) {
        return axios.post(apiUrl + "upload", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    getByUser() {
        return axios.get(apiUrl + "user/getBy")
    }

    getDetectedPatterns(){
        return axios.get(apiUrl + "analyze/patterns")
    }

    getNormalization(){
        return axios.get(apiUrl + "analyze/merchant")
    }
}