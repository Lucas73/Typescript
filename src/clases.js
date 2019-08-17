var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.enCadena = function () {
        return this.nombre + " " + this.apellido;
    };
    return Persona;
}());
