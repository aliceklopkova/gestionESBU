import getApi from "./base/get-api";

const {REACT_APP_BACKEND_API} = process.env;
const endpoint = `${REACT_APP_BACKEND_API}/estudiante/`;

const estudianteApi = {
    ...getApi(endpoint)
}

export default estudianteApi