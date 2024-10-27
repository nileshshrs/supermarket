import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://uat.ordering-farmshop.ekbana.net/api/v4",
    headers: {
        "Content-Type": "application/json",
        "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        "Warehouse-Id": "1",
    },
})

export default axiosInstance