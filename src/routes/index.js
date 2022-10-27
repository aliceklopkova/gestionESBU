import Estadistica from "../components/Estadistica";
import BasicExample from "../components/Customtable";
export const authRoutes=[
    {path:"/",page: <Estadistica/>},
    {path:"/estudiante",page: <BasicExample model={"estudiante"}/>}
];
export const publicRoutes=[];