import Estadistica from "../components/Estadistica";
import BasicTable from "../components/Customtable";
import EstudianteModel, {estudianteFields} from "../models/estudianteModel";
import CustomForm from "../components/Customformulario";
import estudianteApi from "../api/estudiante";
import Dashboard from "../components/Dashboard";
import AlertaEliminar from "../components/AlertaEliminar";
import LoginComponente from "../components/Logincomponent";
import Logout from "../components/Logout";


export const authRoutes = [
    {
        path: "/", element: <Dashboard/>, children: [
            {
                path: "/home",
                element: <Estadistica/>
            },
            {
                path: "/estudiante",
                element: <BasicTable fields={estudianteFields} model={EstudianteModel} api={estudianteApi}/>,
                children: [
                    {
                        path: "/estudiante/:id/delete",
                        element: <AlertaEliminar api={estudianteApi}/>
                    },]
            },
            {
                path: "/estudiante/add",
                element: <CustomForm fields={estudianteFields} model={EstudianteModel} api={estudianteApi}/>
            },
            {
                path: "/estudiante/:id",
                element: <CustomForm fields={estudianteFields} model={EstudianteModel} api={estudianteApi}
                                     modificar={true}/>
            },
            {
                path: "/logout",
                element: <Logout/>
            },

        ]
    },
];
export const publicRoutes = [
    {path: "/login", element:<LoginComponente/>}
];