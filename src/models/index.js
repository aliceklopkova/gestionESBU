import EstudianteModel from "./estudiante";
import AsignaturaModel from "./asignatura";
import GrupoModel from "./grupo";
import NotaModel from "./nota";
import ProfesorModel from "./profesor";
import ProfesorGuiaModel from "./profesorGuia";
import ProgramaEstudioModel from "./programaEstudio";
import CursoModel from "./curso";

const models = {
    estudiante: EstudianteModel,
    asignatura: AsignaturaModel,
    curso: CursoModel,
    grupo: GrupoModel,
    nota: NotaModel,
    profesor: ProfesorModel,
    profesorGuia: ProfesorGuiaModel,
    programaDeEstudio: ProgramaEstudioModel
}

export default models