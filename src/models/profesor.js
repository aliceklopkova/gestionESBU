import User from "./base/user";

const ProfesorModel = {
    ...User,
    categoria_docente: "",
    grado_academico: "",
    grupos: [],
    asignaturas: []
}

export default ProfesorModel;