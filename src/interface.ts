interface Geometria {
  base: number;
  altura: number;
}
interface Calculo {
  calculaArea():number;
}

class Rectangulo implements Geometria, Calculo {
  base: number = 0;
  altura: number = 0;
  calculaArea(){
    return this.base;
  }
}


db.alumnos.insertMany([{nombre:'María' , apellido:'Mongo', email:'gen1@example.com', edad:20},
{nombre:'María', apellido:'Js', email:'gen2@example.com',edad:17},
{nombre:'María' , apellido:'PHP', email:'gen3@example.com'},
{nombre:'Pepe' , apellido:'Node', email:'gen4@example.com'},
{nombre:'Pepe' , apellido:'Vue', email:'gen5@example.com',edad:18},
{nombre:'Pedro' , apellido:'Symfony', email:'gen6@example.com'},
{nombre:'Carlos' , apellido:'React', email:'gen7@example.com',edad:190},
{nombre:'Fernando' , apellido:'Angular', email:'gen8@example.com'},
{nombre:'Lucía' , apellido:'Pérez', email:'gen9@example.com'},
{nombre:'Roberta' , apellido:'Martínez', email:'gen10@example.com',edad:220}])
 