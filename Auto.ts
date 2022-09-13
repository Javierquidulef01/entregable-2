class Automovil {
    private color:string;
    private puertas:number;
    private marca:string;
    private nivelCombustible:number;
    private encendido:boolean;
/*
    constructor() {

    }
*/
    constructor(color:string, puertas:number, marca:string, nivelCombustible:number, encendido:boolean) {
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
        this.nivelCombustible = nivelCombustible;
        this.encendido = encendido;
    }

    public getColor():string {
        return this.color;
    }

    public getPuertas():number {
        return this.puertas;
    }

    public getMarca():string {
        return this.marca;
    }

    public getNivelCombustible():number {
        return this.nivelCombustible;
    }

    public getEncendido():boolean {
        return this.encendido;
    }
    public setEncendido(encendido:boolean):void {
         this.encendido = encendido;

         if (encendido) {
            console.log("Automovil Encendido!");
         } else {
            console.log("Automovil Apagado!");
         }
    }

    public acelerar():void {
        if(this.nivelCombustible != 0 && this.encendido) {
            console.log("Acelerando...");
        } else if(this.nivelCombustible == 0){
            console.log("Sin combustible! Dirígase a cargar.");
            console.log("nivel combustible: " + this.nivelCombustible);
        } else if(!this.encendido) {
            console.log("Para acelerar primero encienda el automovil")
        }
    }

    public cargarCombustible(nivelCombustible:number):void {
        if (nivelCombustible > 1) {
        console.log("cargando combustible...");
        this.nivelCombustible = nivelCombustible;
        } else {
            console.log("Error! No se admiten numeros Negativos en la carga de Combustible");
        }
    }

    public cambiarColor(color:string):void {
        this.color = color;
        console.log("color del Automovil cambiado a " + color);
    }
}

let auto1 = new Automovil("Rojo", 5, "Ford", 0, false);

auto1.acelerar();

auto1.cargarCombustible(50);
auto1.setEncendido(true);

auto1.acelerar();

console.log(auto1);

auto1.cambiarColor("Azul");