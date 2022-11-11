import getApi from "./base/get-api";

const {REACT_APP_BACKEND_API} = process.env;
const endpoint = `${REACT_APP_BACKEND_API}/programa-de-estudio/`;

const programaDeEstudioApi = (id) => (
    {...getApi(endpoint, id)}
)


export default programaDeEstudioApi