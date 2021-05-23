"use strict";
exports.__esModule = true;
exports.Nota = void 0;
var Nota = /** @class */ (function () {
    function Nota() {
    }
    Nota.prototype.setArticulo = function (art) {
        this.articulo = art;
    };
    ;
    Nota.prototype.setPersonal = function (per) {
        this.personal = per;
    };
    ;
    Nota.prototype.setPost = function (post) {
        this.post = post;
    };
    ;
    Nota.prototype.getArticulo = function () {
        return this.articulo;
    };
    ;
    Nota.prototype.getPersonal = function () {
        return this.personal;
    };
    ;
    Nota.prototype.getPost = function () {
        return this.post;
    };
    ;
    return Nota;
}());
exports.Nota = Nota;
