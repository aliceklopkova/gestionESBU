import Estadistica from "../components/Estadistica";
import BasicExample from "../components/Customtable";
import estudianteDato from "../estudianteDato";
import estudianteAtributo from "../estudianteAtributos";
import BasicTable from "../components/Customtable";
import Estudiante from "../models/estudiante";
import EstudianteModel from "../models/estudiante";

export const authRoutes = [
    {path: "/", page: <Estadistica/>},
    {path: "/estudiante", page: <BasicTable atributos={Object.keys(EstudianteModel)} data={estudianteDato}/>}
];
export const publicRoutes = [];