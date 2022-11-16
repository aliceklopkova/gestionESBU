import User from "./base/user"

const EstudianteModel = {
    ...User,
    nombre_apellido_padre: "",
    nombre_apellido_madre: "",
    grado: "",
    grupo: "",
}

export default EstudianteModel;