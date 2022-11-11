import getApi from "./base/get-api";

const {REACT_APP_BACKEND_API} = process.env;
const endpoint = `${REACT_APP_BACKEND_API}/asignatura/`;

const asignaturaApi = (id) => (
    {...getApi(endpoint, id)}
)


export default asignaturaApi