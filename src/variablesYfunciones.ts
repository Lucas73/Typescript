let variable: string = "Buenas"; 
console.log(variable);

variable = "casa";

let texto: any = 234;
texto = "perro";
texto = true;

let deTodo: string | number = "perro";

deTodo = 123;

interface Tiempo {
  day: number;
  number: number;
  year: number;

}

var miCumple: Tiempo = {
  day: 7,
  number: 12,
  year: 1973
}

function concatanate(text1: string, text2, param:100){
  var resultado: string = text1 + text2;
  return resultado;
}




