import Estadistica from "../components/Estadistica";
import BasicTable from "../components/Customtable";
import EstudianteModel from "../models/estudiante";
import CustomForm from "../components/Customformulario";
import estudianteApi from "../api/estudiante";
import Dashboard from "../components/Dashboard";
import AlertaEliminar from "../components/AlertaEliminar";
import LoginComponente from "../components/Logincomponent";
import Logout from "../components/Logout";
import ProfesorModel from "../models/profesor";
import profesorApi from "../api/profesor";
import profesorGuiaApi from "../api/profesorGuia";
import ProfesorGuiaModel from "../models/profesorGuia";
import grupoApi from "../api/grupo";
import GrupoModel from "../models/grupo";
import asignaturaApi from "../api/asignatura";
import AsignaturaModel from "../models/asignatura";
import NotaModel from "../models/nota";
import notaApi from "../api/nota";
import programaDeEstudioApi from "../api/programaDeEstudio";
import ProgramaEstudioModel from "../models/programaEstudio";


export const authRoutes = [{
    path: "/", element: <Dashboard/>,
    children: [
        {
            path: "/home", element: <Estadistica/>
        },
        {
            path: "/estudiante",
            element: <BasicTable fields={Object.keys(EstudianteModel)} model={EstudianteModel} api={estudianteApi}/>,
            children: [
                {
                    path: "/estudiante/:id/delete", element: <AlertaEliminar api={estudianteApi}/>
                },
            ]
        },
        {
            path: "/estudiante/add",
            element: <CustomForm fields={Object.keys(EstudianteModel)} model={EstudianteModel} api={estudianteApi}/>
        },
        {
            path: "/estudiante/:id",
            element: <CustomForm fields={Object.keys(EstudianteModel)} model={EstudianteModel} api={estudianteApi}
                                 modificar={true}/>
        },
        {
            path: "/logout", element: <Logout/>
        },
        {
            path: "/profesor",
            element: <BasicTable fields={Object.keys(ProfesorModel)} model={ProfesorModel} api={profesorApi}/>,
            children: [
                {
                    path: "/profesor/:id/delete", element: <AlertaEliminar api={profesorApi}/>
                },
            ]
        },
        {
            path: "/profesor/add",
            element: <CustomForm fields={Object.keys(ProfesorModel)} model={ProfesorModel} api={profesorApi}/>
        },
        {
            path: "/profesor/:id",
            element: <CustomForm fields={Object.keys(ProfesorModel)} model={ProfesorModel} api={profesorApi}
                                 modificar={true}/>
        },
        {
            path: "/profesor-guia",
            element: <BasicTable fields={Object.keys(ProfesorGuiaModel)} model={ProfesorGuiaModel} api={profesorGuiaApi}/>,
            children: [
                {
                    path: "/profesor-guia/:id/delete", element: <AlertaEliminar api={profesorGuiaApi}/>
                },
            ]
        },
        {
            path: "/profesor-guia/add",
            element: <CustomForm fields={Object.keys(ProfesorGuiaModel)} model={ProfesorGuiaModel} api={profesorGuiaApi}/>
        },
        {
            path: "/profesor-guia/:id",
            element: <CustomForm fields={Object.keys(ProfesorGuiaModel)} model={ProfesorGuiaModel} api={profesorGuiaApi}
                                 modificar={true}/>
        },
        {
            path: "/grupo",
            element: <BasicTable fields={Object.keys(GrupoModel)} model={GrupoModel} api={grupoApi}/>,
            children: [
                {
                    path: "/grupo/:id/delete", element: <AlertaEliminar api={grupoApi}/>
                },
            ]
        },
        {
            path: "/grupo/add",
            element: <CustomForm fields={Object.keys(GrupoModel)} model={GrupoModel} api={grupoApi}/>
        },
        {
            path: "/grupo/:id",
            element: <CustomForm fields={Object.keys(GrupoModel)} model={GrupoModel} api={grupoApi}
                                 modificar={true}/>
        },
        {
            path: "/asignatura",
            element: <BasicTable fields={Object.keys(AsignaturaModel)} model={AsignaturaModel} api={asignaturaApi}/>,
            children: [
                {
                    path: "/asignatura/:id/delete", element: <AlertaEliminar api={asignaturaApi}/>
                },
            ]
        },
        {
            path: "/asignatura/add",
            element: <CustomForm fields={Object.keys(AsignaturaModel)} model={AsignaturaModel} api={asignaturaApi}/>
        },
        {
            path: "/asignatura/:id",
            element: <CustomForm fields={Object.keys(AsignaturaModel)} model={AsignaturaModel} api={asignaturaApi}
                                 modificar={true}/>
        },
        {
            path: "/nota",
            element: <BasicTable fields={Object.keys(NotaModel)} model={NotaModel} api={notaApi}/>,
            children: [
                {
                    path: "/nota/:id/delete", element: <AlertaEliminar api={notaApi}/>
                },
            ]
        },
        {
            path: "/nota/add",
            element: <CustomForm fields={Object.keys(NotaModel)} model={NotaModel} api={notaApi}/>
        },
        {
            path: "/nota/:id",
            element: <CustomForm fields={Object.keys(NotaModel)} model={NotaModel} api={notaApi}
                                 modificar={true}/>
        },
        {
            path: "/programa-de-estudio",
            element: <BasicTable fields={Object.keys(ProgramaEstudioModel)} model={ProgramaEstudioModel} api={programaDeEstudioApi}/>,
            children: [
                {
                    path: "/programa-de-estudio/:id/delete", element: <AlertaEliminar api={programaDeEstudioApi}/>
                },
            ]
        },
        {
            path: "/programa-de-estudio/add",
            element: <CustomForm fields={Object.keys(ProgramaEstudioModel)} model={ProgramaEstudioModel} api={programaDeEstudioApi}/>
        },
        {
            path: "/programa-de-estudio/:id",
            element: <CustomForm fields={Object.keys(ProgramaEstudioModel)} model={ProgramaEstudioModel} api={programaDeEstudioApi}
                                 modificar={true}/>
        },

    ]
},];
export const publicRoutes = [
    {path: "/login", element: <LoginComponente/>}
];