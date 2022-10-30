import Estadistica from "../components/Estadistica";
import BasicExample from "../components/Customtable";
import estudianteDato from "../estudianteDato";
import estudianteAtributo from "../estudianteAtributos";
import BasicTable from "../components/Customtable";
import Estudiante, {estudianteFields} from "../models/estudianteModel";
import EstudianteModel from "../models/estudianteModel";
import CustomForm from "../components/Customformulario";
import formFieldDescription from "../data/formFieldDescription";
import estudianteApi from "../api/estudiante";



export const authRoutes = [
    {path: "/", page: <Estadistica/>},
    {path: "/estudiante", page: <BasicTable fields={estudianteFields} model={EstudianteModel} api={estudianteApi}/>},
    {path: "/estudiante/Formulario", page: <CustomForm  fields={estudianteFields}  />},
];
export const publicRoutes = [];