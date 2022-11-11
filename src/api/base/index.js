import getAxiosInstance from "./get-instance";

const axios = getAxiosInstance()
export const get = async (url, params) => (
    axios.get(url, {params})
)

export const post = async (url, data) => (
    axios.post(url, data)
)

export const put = async (url, data) => (
    axios.put(url, data)
)

export const del = async (url) => (
    axios.delete(url)
)