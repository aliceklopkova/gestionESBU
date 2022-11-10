import {del, get, post, put} from "./index";

const getApi = (endpoint = "",id="") => (
    {
        get(params) {
            return get(id ? `${endpoint}${id}/` : null, params)
        },
        list(params) {
            return get(endpoint, params)
        },
        create(data) {
            return post(endpoint, data)
        },
        update(data) {
            return put(id ? `${endpoint}${id}/` : null, data)
        },
        delete(param) {
            return del(id ? `${endpoint}${id}/` : null, param)
        }
    }
)

export default getApi

