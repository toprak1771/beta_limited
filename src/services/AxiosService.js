import axios from "axios"

export default class AxiosService {
    apiUrl = "http://localhost:5000/api/"

    uploadCsv(data) {
        return axios.post(this.apiUrl + "upload", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    getByUser() {
        return axios.get(this.apiUrl + "user/getBy")
    }

    getDetectedPatterns(){
        return axios.get(this.apiUrl + "analyze/patterns")
    }

    getNormalization(){
        return axios.get(this.apiUrl + "analyze/merchant")
    }
}