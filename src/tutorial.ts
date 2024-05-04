//definir una variable y un tipo de variable
let unaCadena:string = "hola mundo";

//se puede reasignar el valor a la variable mientras mantenga el mismo tipo
unaCadena = 'hello world';
unaCadena = unaCadena.toUpperCase();

let numerito: number = 10;
numerito = 2 + 6;
//numerito = 'texto';  <-- NO ES PERMITIDO

let esCierto: boolean = false;
esCierto = true;
//esCierto = 'texto'; <-- NO ES PERMITIDO

let edad: number = 16;
let esMenor: boolean = edad < 18;
//console.log(`Es menor? ${esMenor}`);

//----------------------------------------------------------------

//union types: puedes asignarle mas de un tipo a una variable:
let impuesto: number | string = 10;
impuesto = 25;
impuesto = '$30';

//----------------------------------------------------------------

//Asignar posibles valores (estados) a una variable
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';

//----------------------------------------------------------------

//tipo 'any' permite cualquier tipo de dato a una variable. Esto no es recomendado hacerlo.
let incognita: any = true;
let aleatorio; //any

//----------------------------------------------------------------

//aplica un tipo de variable bajo una condicion
const libros = ['la iliada', 'la odisea', 'guerra de troya'];
let coincidencia: string | undefined;

for (let libro of libros) {
    if (libro === 'la odisea') { //si el dato existe en el array, hagamos que la variable resultante sea tipo string
        coincidencia = libro;
        coincidencia = coincidencia.toUpperCase();
        break;
    }
}

//muestra el resultado de la coincidencia. si no cambia la variable, esta queda como indefinida.
//console.log(coincidencia?.length);


//----------------------------------------------------------------

//declaramos un array en que solo puede contener datos de tipo number
let listadoNumeros:number[] = [10, 20, 30, 40];
listadoNumeros.push(50) // funciona
//listadoNumeros.push('A') // no funciona

//let listadoVacio: [] = [1];  -> listado que esta vacio

//Array que permite tanto valores string como valores number
let listadoRandom:(string | number)[] = [1, 2, "A", "B"]