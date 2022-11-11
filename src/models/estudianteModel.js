import {userFields} from "./base/userModel";
export const estudianteFields = userFields.concat(["nombre_apellido_padre", "nombre_apellido_madre", "grado", "grupo",])

class EstudianteModel {
    constructor(nombre, apellidos, fecha_nacimiento, ci, direccion, reparto, municipio, provincia, numero_telefono, genero, edad, nombre_apellido_padre, nombre_apellido_madre, grado, grupo,) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.fecha_nacimiento = fecha_nacimiento
        this.ci = ci
        this.direccion = direccion
        this.reparto = reparto
        this.municipio = municipio
        this.provincia = provincia
        this.numero_telefono = numero_telefono
        this.genero = genero
        this.edad = edad
        this.nombre_apellido_padre = nombre_apellido_padre
        this.nombre_apellido_madre = nombre_apellido_madre
        this.grado = grado
        this.grupo = grupo
    }
    values = () => (
        [this.nombre, this.apellidos, this.fecha_nacimiento, this.ci, this.direccion, this.reparto, this.municipio, this.provincia, this.numero_telefono, this.genero, this.edad, this.nombre_apellido_padre, this.nombre_apellido_madre, this.grado, this.grupo]
    )
    keys = () => (estudianteFields)
}

export default EstudianteModel;