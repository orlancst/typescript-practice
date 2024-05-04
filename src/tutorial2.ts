

let car: { brand: string; year: number } = {
    brand: 'toyota',
    year: 2020
};

car.brand = 'ford'; // se puede cambiar si el tipo del valor es el correcto
// car.year = '2024'; //no se puede cambiar porque el valor de year debe ser number
// car.color = 'black'; //no se puede asignar porque no existe la propiedad color

let car2: { brand: string; year: number } = {
    brand: 'audi',
    year: 2021
};

let book = { title: 'lord of the rings', cost: 20 };
let pen = { title: 'bic', cost: 2 };
let notebook = { title: 'lenovo' };

//asigamos el signo de ? para indicar que una propiedad es opcional
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// si una propiedad tiene antecedido la palabra readonly indica que el valor no puede cambiar y que es solo lectura.
// items[0].title = 'awesome title';

let product = { title: 'shirt', price: 100 };
let product1 = { title: 'pants' };

let products: { title: string; price?: number }[] = [product, product1]

products.push({ title: 'shoes' });


/*
function sayHi(name) {  -> causa un error ya que detecta que el parametro es tipo any (no fue indicado un tipo)
    console.log('Hi ' + name + "!");
    
}
*/

function sayHi(name: string) {  //no causa error si le indicamos el tipo de dato
    console.log('Hi ' + name + "!");

}
sayHi('paul');
// sayHi(12); -> debe ser tipo string
// sayHi('mark', 'lucas') -> solo esperaba un solo parametro

// le podemos indicar a la funcion el valor que debe retornar
function calculateDiscount(price: number): number {
    const hasDiscount = true;
    if (hasDiscount) {
        // return 'Discount applied'; -> marca error ya que se le indico que el valor que debe retornar la funcion debe ser tipo number
    }

    return price * 0.9;
}

const finalPrice = calculateDiscount(200);

function addition(digit: any) {
    let x: number = 3;

    return digit + x;
}

// es peligroso que las funciones tengan parametros tipo any
const result = addition(5);
const algunValor = result;

//----------------------------------------------------------------

const nombres: string[] = ['juan', 'carlos', 'maria', 'lucas']

function isNameInList(name: string): boolean {
    return nombres.includes(name);
}

let nameToCheck = 'pedro';

console.log(isNameInList(nameToCheck) === true ? `${nameToCheck} está en la lista` : `${nameToCheck} no está en la lista`);

//----------------------------------------------------------------

function calculatePrice(price: number, discount?: number): number {
    // return price - discount; -> si un parametro es opcional, este no puede estar involucrado en el return porque puede ser undefined
    return price - (discount || 0); //si no se pasa un valor, se puede enviar un "fallback" que indique un valor por defecto.
}

let priceWithDiscount = calculatePrice(100, 20);

//-----------------------------------------------------------------

//si solo recibe el primer parametro se le puede aplicar que al segundo tenga un valor inicial.
function calculateScore(iniial: number, penalty: number = 0): number {
    return iniial - penalty;
}

let xScore = calculateScore(100, 20);
let yScore = calculateScore(200); //Espera dos parametros, pero solo recibe uno.

//-----------------------------------------------------------------

// la lista de numeros al final deben usarse con el rest operator (...numbers), lo que hace es agrupar los numeros en un array.
function sum(message: string, ...numbers: number[]): string {
    //const doubled = numbers.map((num) => num * 2);

    let total = numbers.reduce((prev, curr) => {
        return prev + curr;
    }, 0)

    return `${message}${total}`
}

// si pasamos una lista de numeros como parametros, estos SIEMPRE deben ir al final
let aResult = sum('the total is: ', 1, 2, 3, 4, 5)

//-----------------------------------------------------------------

// las funciones tambien pueden no retornar nada, en este caso se indica un void.
function logMessage(message: string): void {

    console.log(message);
    // return message; -> esto marcara un error

}

logMessage('hello typescript');

//-----------------------------------------------------------------

function processInput(input: string | number) {

    // console.log(input * 2); -> error

    if (typeof input === 'number') {
        console.log(input * 2);

    } else {
        console.log(input.toUpperCase());

    }

}

processInput('hello');
processInput(49);

//-----------------------------------------------------------------

function createEmployee({ id }: { id: number }): {
    id: number;
    isActive: boolean;
} {
    return { id, isActive: id % 2 === 0 }
}

const newbie1 = createEmployee({ id: 1 })
const newbie2 = createEmployee({ id: 2 })

console.log(newbie1, newbie2);

//----------------------------------------------------------------

function createStudent(student: { id: number; name: string }): void {
    console.log(`bienvenido ${student.name.toUpperCase()}`);

}

const newStudent = {
    id: 4,
    name: 'nelson',
    email: 'nelson@mail.com' //si el objeto creado tiene propiedades que no necesita la funcion, no habra ningun problema mientras estén las propiedades que busca
}

createStudent(newStudent)
// createStudent({id: 5, name: 'rick', email: 'rick@mail.com'}) -> marca error porque se esta pasando una propiedad adicional en el llamado de la funcion

//----------------------------------------------------------------

function processData(
    input: string | number, config: { reverse: boolean } = { reverse: false }
): string | number {
    if (typeof input === 'number') {
        return input * input;
    } else {
        return config.reverse ? input.toUpperCase().split('').reverse().join('') : input.toUpperCase();
    }
}

console.log(processData(10));
console.log(processData('Gutten tag!'));
console.log(processData('Ciao!', { reverse: true }));
