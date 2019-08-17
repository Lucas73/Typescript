class Persona {
  nombre: string;
  apellido: string;

  constructor(nombre:string,apellido:string){
    this.nombre=nombre;
    this.apellido=apellido;
  }

  enCadena(): string {
    return this.nombre + " " + this.apellido;
  }
}

class Ciudadano extends Persona {
  identidad: string;
  constructor(id:string,nombre:string, apellido:string){
    super(nombre, apellido)
  }
  enCadena():string{
    return this.enCadena()+""
  }
}

