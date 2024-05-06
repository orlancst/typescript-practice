//type alias es un atajo para evitar describir todos los tipos de un objeto cada vez
type User = {
    id: number;
    name: string;
    isActive: boolean;
}

// const john: { id: number; name: string; isActive: boolean } = { -> en vez de definir los tipos del objeto uno a uno...
const john: User = { //simplemente le definimos el alias que creamos al inicio.
    id: 1,
    name: 'john',
    isActive: true,
};
const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);

    return user;
}

// ----------------------------------------------------------------


// Tambien se puede definir un alias para variar los tipos.
type StringOrNumber = string | number;

let valor: StringOrNumber;
valor = 'hola';
valor = 123;

type Theme = 'light' | 'dark';
let userTheme: Theme = "dark";

function setTheme(t: Theme) {
    userTheme = t;
}

setTheme('light');

//-------------------------------------------------

type Employee = {
    id: number;
    name: string;
    department: string;
}

type Manager = {
    id: number;
    name: string;
    employees: Employee[]
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
    if ('employees' in staff) {
        console.log(`${staff.name} es gerente y tiene ${staff.employees.length} empleados`);
    } else {
        console.log(`${staff.name} es empleado en el departamento de ${staff.department}`);

    }
}

const daniel: Employee = { id: 1, name: 'Daniel', department: 'Ventas' };
const leo: Employee = { id: 2, name: 'Leo', department: 'HR' };

const barbara: Manager = { id: 1, name: 'Barbara', employees: [daniel, leo] };

// printStaffDetails(daniel);
// printStaffDetails(leo);
// printStaffDetails(barbara);

//--------------------------------------------

type Book = {
    id: number;
    name: string;
    price: number;
}

const book1: Book = {
    id: 1,
    name: 'La iliada',
    price: 10
}

const book2: Book = {
    id: 2,
    name: 'La odisea',
    price: 15
}

//se puede agregar un tipo adicional al objeto que no exista en el type original
const discountedBook: Book & { discount: number } = {
    id: 3,
    name: 'la guerra de troya',
    price: 30,
    discount: 0.15 //este no existe en el type Book original, pero se le incluyó con "& { discount: number }".
}

//o tambien se puede agregar al definir el tipo
type DiscountedBook = Book & { discount: number };
const discountedBook2: DiscountedBook = {
    id: 4,
    name: 'la cenicienta',
    price: 20,
    discount: 0.10
}

//--------------------------------------------

const propName = 'edad';

type Animal = {
    [propName]: number;
}

let tiger: Animal = {
    [propName]: 4
}

//--------------------------------------------

interface EBook {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    //method
    printAuthor(): void;
    printTitle(message: string): string;
    //printSomething: (someValue: number) => number;
}

const deepWork: EBook = {
    isbn: 123,
    title: 'a book',
    author: 'a friend',
    genre: 'self-help',
    printAuthor() {
        console.log(this.author);

    },
    printTitle(message) {
        return `${this.title} ${message}`
    },

    // printSomething: function(someValue) {
    //     return someValue * 2;
    // }

    // printSomething: (someValue) => {
    //     return someValue * 2;
    // }
    
    // printSomething(someValue) {
    //     return someValue * 2.5;
    // }
}

// deepWork.isbn = 456; -> no se puede modificar porque tiene la propiedad de que es solo lectura
deepWork.author = 'michael'; // si es posible editar.
deepWork.printAuthor();

const resultPrint = deepWork.printTitle('es interesante');
//console.log(resultPrint);

//console.log(deepWork.printSomething(5));

//----------------------------------------------------------------

interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    upgradeRam(increase: number): number;
    storage?: number;
}

const laptop: Computer = {
    id: 1,
    brand: 'HP',
    ram: 8,
    upgradeRam(amount) {
        this.ram += amount;
        return this.ram;
    }
}

laptop.storage = 512;
// console.log(laptop.upgradeRam(2));
// console.log(laptop);

//--------------------------------------------

interface Person {
    name: string;
    getDetails(): string;
    
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}

//se puede volver a agregar más propiedades a las interfaces.
interface Person {
    age: number;
}

const persona1: Person = {
    name: 'Juan',
    age: 19,
    getDetails() {
        return `Name: ${this.name} - Age: ${this.age}`;
    }
}

interface Worker extends Person {
    workerId: number;
}

const worker: Worker = {
    name: 'Carlos',
    age: 20,
    getDetails() {
        return `Worker ID: ${this.workerId} - Name: ${this.name} - Age: ${this.age}`;
    },
    workerId: 1,
}

interface Gerente extends Person, DogOwner{
    managePeople(): void;
}

const gerente: Gerente = {
    name: 'Matias',
    age: 35,
    dogName: 'Firulais',
    getDetails() {
        return `Name: ${this.name} - Age: ${this.age}`;
    },
    getDogDetails() {
        return `Dog Name: ${this.dogName}`;
    },
    managePeople() {
        console.log("managin' people");
        
    },
}

//console.log(persona1.getDetails());
//console.log(worker.getDetails());
// console.log(gerente);
// console.log(gerente.getDetails());
// console.log(gerente.getDogDetails());
// gerente.managePeople();

//----------------------------------------------------------------

interface Person2 {
    name: string;
}

interface PetOwner extends Person2 {
    petName: string;
    animal: 'dog' | 'cat';
}

interface Manager2 extends Person2 {
    managePeople(): void;
    delegateTasks(): void;
}

const human: Person2 | PetOwner | Manager2 = getEmployee();

function getEmployee(): Person2 | PetOwner | Manager2 {
    const random = Math.random();

    if (random < 0.33) {
        return {
            name: 'Pablo'
        }
    } else if (random < 0.66) {
        return {
            name: 'Kevin',
            petName: 'Sasha',
            animal: "dog"
        }
    } else {
        return {
            name: 'Oscar',
            managePeople() {
                console.log('Managing people!!!');
                
            },
            delegateTasks() {
                console.log('Delegating tasks...');
                
            }
        }
    }
}
console.log(human.name);
//console.log(human.delegateTasks()); -> No sabe que tipo va a retornar

//Si queremos condicionar que un objeto haga algo en especifico si es del tipo indicado, no se retorna como booleano.
//function isManager(obj: Person2 | PetOwner | Manager2): boolean {
function isManager(obj: Person2 | PetOwner | Manager2): obj is Manager2 { //se especifica "obj is Manager".

    return 'managePeople' in obj
}

console.log(isManager(human));

//Al llamar la funcion obtendremos las funciones internas del tipo si la funcion retorna true.
if (isManager(human)) {
    human.delegateTasks();
}
