"use strict";
exports.__esModule = true;
exports.Autor = void 0;
var Autor = /** @class */ (function () {
    function Autor() {
    }
    //Setters ---------------------------------------------
    Autor.prototype.setNombre = function (n) {
        this.nombre = n;
    };
    Autor.prototype.setApellido = function (ape) {
        this.apellido = ape;
    };
    Autor.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Autor.prototype.setNacionalidad = function (nacionalidad) {
        this.nacionalidad = nacionalidad;
    };
    //Fin setters -----------------------------------------
    //Getters ---------------------------------------------
    Autor.prototype.getNombre = function () {
        return this.nombre;
    };
    Autor.prototype.getApellido = function () {
        return this.apellido;
    };
    Autor.prototype.getEdad = function () {
        return this.edad;
    };
    Autor.prototype.getNacionalidad = function () {
        return this.nacionalidad;
    };
    return Autor;
}());
exports.Autor = Autor;
