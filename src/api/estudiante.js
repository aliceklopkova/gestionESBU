import getApi from "./base/get-api";
import {post} from "./base";
const {REACT_APP_BACKEND_API} = process.env;
const endpoint = `${REACT_APP_BACKEND_API}/estudiante/`;
const promedio_url = "promedio_grado"

const estudianteApi = (id) => (
    {...getApi(endpoint, id),
        get_promedio: (grado) => {
        return post(`${endpoint}${promedio_url}/`, {grado:grado})
        }
    }
)


export default estudianteApi