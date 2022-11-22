const tableFieldDescription = {
    id: {
        id: "id",
        label: "ID",
        type: "text"
    },
    nombre: {
        id: "nombre",
        label: "Nombre",
        type: "text"
    },

    primer_apellido: {
        id: "primer_apellido",
        label: "Primer Apellido",
        type: "text"
    },
    segundo_apellido: {
        id: "segundo_apellido",
        label: "Segundo Apellido",
        type: "text"
    },
    fecha_nacimiento: {
        id: "fecha_nacimiento",
        label: "Fecha de nacimiento",
        type: "text"
    },
    ci: {
        id: "ci",
        label: "CI",
        type: "text"
    },
    direccion: {
        id: "direccion",
        label: "Dirección",
        type: "text"
    },
    reparto: {
        id: "reparto",
        label: "Reparto",
        type: "text"
    },
    municipio: {
        id: "municipio",
        label: "Municipio",
        type: "text"
    },
    provincia: {
        id: "provincia",
        label: "Provincia",
        type: "text"
    },
    numero_telefono: {
        id: "numero_telefono",
        label: "Teléfono",
        type: "text"
    },
    genero: {
        id: "genero",
        label: "Género ",
        type: "text"
    },
    edad: {
        id: "edad",
        label: "Edad",
        type: "text"
    },
    nombre_apellido_padre: {
        id: "nombre_apellido_padre",
        label: "Padre",
        type: "text"
    },
    nombre_apellido_madre: {
        id: "nombre_apellido_madre",
        label: "Madre",
        type: "text"
    },
    grado: {
        id: "grado",
        label: "Grado",
        type: "model"
    },
    grupo: {
        id: "grupo",
        label: "Grupo",
        type: "model"
    },
    categoria_docente: {
        id: "categoria_docente",
        label: "Categoria Docente",
        type: "text"
    },
    asignatura: {
        id: "asignatura",
        label: "Asignatura",
        type: "model"
    },
    grupos: {
        id: "grupos",
        label: "Grupos",
        type: "modelList"
    },
    estudiante: {
        id: "estudiante",
        label: "Estudiante",
        type: "model"
    },
    valor: {
        id: "valor",
        label: "Valor",
        type: "text"
    },
    tipo: {
        id: "tipo",
        label: "Tipo",
        type: "select",
        values: {
            es: "Evaluación Sistemática",
            ep: "Evaluación Parcial",
            ef: "Evaluación Final"
        }
    },
    curso: {
        id: "curso",
        label: "Curso",
        type: "model"
    },
    archivo: {
        id: "archivo",
        label: "Archivo",
        type: "text"
    },
    nivel_de_estudio: {
        id: "nivel_de_estudio",
        label: "Nivel de Estudio",
        type: "text"
    },
    grado_academico: {
        id: "grado_academico",
        label: "Grado Académico",
        type: "text"
    },
    profesor: {
        id: "profesor",
        label: "Profesor",
        type: "model"
    },
    numero_grupo: {
        id: "numero_grupo",
        label: "Numero",
        type: "text"
    },
    asignaturas: {
        id: "asignaturas",
        label: "Asignaturas",
        type: "modelList"
    },
}
export default tableFieldDescription;