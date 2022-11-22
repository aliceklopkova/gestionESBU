import estudianteApi from "./estudiante";
import asignaturaApi from "./asignatura";
import cursoApi from "./curso";
import gradoApi from "./grado";
import grupoApi from "./grupo";
import notaApi from "./nota";
import profesorApi from "./profesor";
import profesorGuiaApi from "./profesorGuia";
import programaDeEstudioApi from "./programaDeEstudio";

const api = {
    estudiante: estudianteApi,
    asignatura: asignaturaApi,
    curso: cursoApi,
    grado: gradoApi,
    grupo: grupoApi,
    nota: notaApi,
    profesor: profesorApi,
    profesorGuia: profesorGuiaApi,
    programaDeEstudio: programaDeEstudioApi
}

export default api