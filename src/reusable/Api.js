import axios from "axios"

export const apiService = async (method, url, data) => {
    const result = await axios({
        method: method,
        url: "http://localhost:8081" + url,
        data: data
    }).then(res => {
        return res
    })

    return result
}