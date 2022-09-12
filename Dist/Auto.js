var Automovil = /** @class */ (function () {
    /*
        constructor() {
    
        }
    */
    function Automovil(color, puertas, marca, nivelCombustible, encendido) {
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
        this.nivelCombustible = nivelCombustible;
        this.encendido = encendido;
    }
    Automovil.prototype.getColor = function () {
        return this.color;
    };
    Automovil.prototype.getPuertas = function () {
        return this.puertas;
    };
    Automovil.prototype.getMarca = function () {
        return this.marca;
    };
    Automovil.prototype.getNivelCombustible = function () {
        return this.nivelCombustible;
    };
    Automovil.prototype.getEncendido = function () {
        return this.encendido;
    };
    Automovil.prototype.setEncendido = function (encendido) {
        this.encendido = encendido;
        if (encendido) {
            console.log("Automovil Encendido!");
        }
        else {
            console.log("Automovil Apagado!");
        }
    };
    Automovil.prototype.acelerar = function () {
        if (this.nivelCombustible != 0 && this.encendido) {
            console.log("Acelerando...");
        }
        else if (this.nivelCombustible == 0) {
            console.log("Sin combustible! Dirígase a cargar.");
            console.log("nivel combustible: " + this.nivelCombustible);
        }
        else if (!this.encendido) {
            console.log("Para acelerar primero encienda el automovil");
        }
    };
    Automovil.prototype.cargarCombustible = function (nivelCombustible) {
        console.log("cargando combustible...");
        this.nivelCombustible = nivelCombustible;
    };
    Automovil.prototype.cambiarColor = function (color) {
        this.color = color;
        console.log("color del Automovil cambiado a " + color);
    };
    return Automovil;
}());
var auto1 = new Automovil("Rojo", 5, "Ford", 0, false);
auto1.acelerar();
auto1.cargarCombustible(50);
auto1.setEncendido(true);
auto1.acelerar();
console.log(auto1);
auto1.cambiarColor("Azul");
