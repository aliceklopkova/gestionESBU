const today = new Date()
const formFieldDescription = {
    nombre: {
        id: "nombre",
        label: "Nombre",
        type: "text",
        helperText: "Escriba el nombre ",
        required: true,
    },
    primer_apellido: {
        id: "primer_apellido",
        label: "Primer Apellido",
        type: "text",
        helperText: "Escriba el primer apellido ",
        required: true,
    },
    segundo_apellido: {
        id: "segundo_apellido",
        label: "Segundo Apellido",
        type: "text",
        helperText: "Escriba el segundo apellido ",
        required: true,
    },
    fecha_nacimiento: {
        id: "fecha_nacimiento",
        label: "Fecha de nacimiento",
        type: "date",
        helperText: "Escriba la fecha de nacimiento ",
        required: true,
        defaultValue: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    },
    ci: {
        id: "ci",
        label: "CI",
        type: "text",
        helperText: "Escriba el CI ",
        required: true,
    },
    direccion: {
        id: "direccion",
        label: "Dirección",
        type: "text",
        helperText: "Escriba la dirección",
        required: true,
    },
    reparto: {
        id: "reparto",
        label: "Reparto",
        type: "text",
        helperText: "Escriba el reparto",
        required: true,
    },
    municipio: {
        id: "municipio",
        label: "Municipio",
        type: "text",
        helperText: "Escriba el municipio",
        required: true,
    },
    provincia: {
        id: "provincia",
        label: "Provincia",
        type: "text",
        helperText: "Escriba la provincia",
        required: true,
    },
    numero_telefono: {
        id: "numero_telefono",
        label: "Teléfono",
        type: "text",
        helperText: "Escriba el teléfono",
        required: true,
    },
    genero: {
        id: "genero",
        label: "Género ",
        type: "select",
        helperText: "Escriba 'F' para femenino o 'M' para masculino",
        required: true,
        values: [
            {
                id: "M",
                name: "Masculino"
            },
            {
                id: "F",
                name: "Femenino"
            }
        ],

    },
    edad: {
        id: "edad",
        label: "Edad",
        type: "text",
        helperText: "Escriba 'F' para femenino o 'M' para masculino",
        required: true,
    },
    nombre_apellido_padre: {
        id: "nombre_apellido_padre",
        label: "Nombre y apellidos del padre",
        type: "text",
        helperText: "Escriba el nombre y apellidos ",
        required: true,
    },
    nombre_apellido_madre: {
        id: "nombre_apellido_madre",
        label: "Nombre y apellidos de la madre",
        type: "text",
        helperText: "Escriba el nombre y apellidos ",
        required: true,
    },
    grado: {
        id: "grado",
        label: "Grado",
        helperText: "Escriba el grado",
        required: true,
        type: "model",
    },
    grupo: {
        id: "grupo",
        label: "Grupo",
        helperText: "Escriba el grupo",
        required: true,
        type: "model",
    },
    grado_academico: {
        id: "grado_academico",
        label: "Grado Académico",
        helperText: "Seleccione el grado académico",
        required: true,
        type: "select",
        values: [
            {
                id: "universitario",
                name: "Universitario"
            },
            {
                id: "master",
                name: "Master en Ciencias"
            },
            {
                id: "doctor",
                name: "Doctor en Ciencias"
            },
        ]
    },
    categoria_docente: {
        id: "categoria_docente",
        label: "Categoría Docente",
        helperText: "Seleccione la categoría docente",
        required: true,
        type: "select",
        values: [
            {
                id: "profesor_titular",
                name: "Profesor Titular"
            },
            {
                id: "profesor_auxiliar",
                name: "Profesor Auxiliar"
            },
            {
                id: "asistente",
                name: "Asistente"
            },
            {
                id: "instructor",
                name: "Instructor"
            },
            {
                id: "instructor_auxiliar",
                name: "Instructor Auxiliar"
            },
            {
                id: "auxiliar_tecnico",
                name: "Auxiliar Técnico de la Docencia"
            },
            {
                id: "profesor_de_merito",
                name: "Profesor de Mérito"
            },
            {
                id: "profesor_invitado",
                name: "Profesor Invitado"
            },
        ]
    },
    grupos: {
        id: "grupos",
        label: "Grupos",
        required: false,
        type: "modelList",
        model: "grupo",
        helperText: "Seleccione los grupos",
    },
    asignaturas: {
        id: "asignaturas",
        label:"Asignaturas",
        required: false,
        type: "modelList",
        model: "asignatura",
        helperText: "Seleccione las asignaturas",
    },
    numero_grupo: {
        id: "numero_grupo",
        label: "Número del grupo",
        type: "text",
        helperText: "Escriba el número del Grupo",
        required: true,
    },
    profesor: {
        id: "profesor",
        label: "Profesor",
        helperText: "Seleccione el profesor",
        required: true,
        type: "model",
    },
    estudiante: {
        id: "estudiante",
        label: "Estudiante",
        helperText: "Seleccione el estudiante",
        required: true,
        type: "model",
    },
    asignatura: {
        id: "asignatura",
        label: "Asignatura",
        helperText: "Seleccione la asignatura",
        required: true,
        type: "model",
    },
    valor: {
        id: "valor",
        label: "Valor",
        helperText: "Inserte el valor de la nota",
        required: true,
        type: "number",
    },
    tipo: {
        id: "tipo",
        label: "Tipo",
        helperText: "Seleccione el tipo de nota",
        required: true,
        type: "select",
        values: [
            {
                id: "es",
                name: "Evaluación Sistemática"
            },
            {
                id: "ep",
                name: "Evaluación Parcial"
            },
            {
                id: "ef",
                name: "Evaluación Final"
            }
        ],
    },
    curso: {
        id: "curso",
        label: "Curso",
        helperText: "Seleccione el curso",
        required: true,
        type: "model",
    },
    archivo: {
        id: "archivo",
        label: "Archivo",
        helperText: "Inserte el archivo",
        required: false,
        type: "file",
    },


}


export default formFieldDescription;