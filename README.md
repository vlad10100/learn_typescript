# TypeScript

- TypeScript is a superset of JavaScript, meaning that it does everything that JavaScript does.
- JavaScript with added features
- To add static typing to JavaScript. - the type of the variable cannot be changed at any point in a program. (It can prevent a LOT of bugs)

- TypeScript cannoy be understood by browsers, it has to be compiled into JavaScript by the TypeScript Compiler

### Why you should use TypeScript?

- can spot 15% of common bugs
- Readability - easier to see that the code is supposed to do.
- Popular :)
- Gives you a better understanding, and a new perspective on JavaScript

### Drawbacks of TypeScript

- Takes longer to write than JavaScript.
- TypeScript has to be compiled, can take time, especially in larger projects
  <br/><br/><br/>

# Types in TypeScript

<br/>

### Primitive Types

primitive value is data that is not an object and has no methods. immutable, they can't be altered.

- String
- Number
- Bigint
- Boolean
- Undefined
- Null
- Symbol

###### Type Signature

`: type`

Examples:

```
let age: number = 24;
let firstName: string = "Vlad";
let hasGirlfriend: boolean = false;

let experience: number;  // declare variable without assigning a value
experience = 2;
```

##### Union Type

variable that can be assigned more that one type.

```
let experience: string | number;
experience = 2;
experience = '3';
```

<br/><br/><br/>

### Reference Types

Arrays, Objects, and Functions

#### Arrays in typeScript

```
let ids: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Vlad', 'TypeScript', 'JavaScript'];
let options: boolean[] = [true, false, true];
let books: object[] = [
    {name: 'Can't hurt me', author: 'David Goggins'}, ...
];

let arr: any[] = [1, 'Vlad', false];

let person: (string | number | boolean)[] = ['Danny', 1, true];


let person: [string, number, boolean] = ['Danny', 1, true];
person[0] = 100; // Error - Value at index 0 can only be a string
```

#### Tuple

an array with fixed size and known datatypes. stricter than a regular array.

#### Objects in typeScript

Objects in TypeScript must have all the correct properties and value type

```
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// ERRORS
person.isProgrammer = 'YEAH'; // ERROR: should be a boolean
person = {
  name: 'Vlad',
  location: 'PH',
};
// ERROR: missing the isProgrammer property
```

#### Interface

To check taht multiple objects have the same specific properties and value types:

```
interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let person1: Person = {
    name: 'Vlad',
    location: 'PH',
    isProgrammer: true
};
```

#### Declaring function properties.

- JS Functions
- Arrow Functions

```
interface makeSound {
    bark(sound: string): string;
    meow: (sound: string) => string;
}

let myPets: makeSound = {
    bark: function(sound: string) {
        return `The sound of the dof is ${sound} ${sound}!!!`
    },
    meow: (sound: string) => {
        return `The sound of the cat is ${sound} ${sound}!!!`
    }
}

console.log(myPets.bark('arf'))
console.log(myPets.meow('meooww'))
```

#### Functions in typeScript

Define what types of function arguments should be, as well as the return type of the function.

```
const circle: Function = (diameter: number): string  => {
    return `The circumference is ${Math.PI * diameter}`
}
console.log(circle(10))
```

#### Add a Question mark after a parameter to make it optional

```
const add = (a: number, b: number, c?: number | string) => {
  console.log(c);

  return a + b;
};

console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
// I could pass a number, string, or nothing here!
// 9
```

#### Void - indacates that a function will return nothing

#### ANY - basically reverting TypeScript back to JavaScript

avoid using `any` type as much as you can

#### Type Aliases

- Can reduce code duplication
- Can act as a single source of truth

```
type StringOrNumber = string | number

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person1: PersonObject = {
  name: "vlad",
  id: '123abc'
};

const sayHello: Function = (person: PersonObject) => {
  return `Hello ${person.name}`
}

```

## The DOM and type casting

- TypeScript doesnt have an access to the DOM

#### Non-Null Assertion Operator (!)

to tell the compiler that an expression has a value other than null or undefined.

#### Type Inference

TypeScript can see the type of the variable

Can't infer the type of DOM element by its call or id.

<br/><br/><br/>

## Classes in TypeScript

We can define the types that each piece of data should be in a class:

```
class Person {
  name: string;
  isCool: boolean;
  pets: number;

  constructor(n: string, c: boolean, p: number) {
    this.name = n;
    this.isCool = c;
    this.pets = p;
  }

  sayHello() {
    return `Hi, my name is ${this.name} and I have ${this.pets} pets.`
  }
}
```

#### Access Modifiers

- readonly: This property is immutable - it can only be read
- private: Can only access or modify from methods within this class
- protected: Can access or modify from this class and subclasses
- public: Can access or modify from anywhere - including outside the class

Consice way to construct a class:

```
class Person {
  constructor(
    readonly name: string,
    private isCool: boolean,
    protected email: string,
    public pets: number
  ){}

  sayMyName(): void {
    console.log(`Youre not Heisenberg, you're ${this.name}`)
  }
}
```

#### Extending Classes

```
class Programmer extends Person {
  programmingLanguages: string[]

  constructor(
    name: string,
    isCool: boolean,
    email: string,
    pets: number,
    programmingLanguages: string[]
  ) {
    // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
    super(name, isCool, email, pets);
    this.programmingLanguages = programmingLanguages;
  }
}
```

<br/><br/><br/>

## Modules in TypeScript

1. Compile the TypeScript file `tcs index.ts`
2. Import the JavaScript module to your HTML file

note: Always import as a JavaScript file, even in TypeScript files.

<br/><br/><br/>

## Interfaces in TypeScript

Interfaces define how an object should look:

- interface
- type alias
- object type could be defined anonymously

NOTE:

- key distinction is that type alias cannot be reopened to add new property, while interface is always extendable.
- a type cannot be changed after being created
- the TypeScript docs recommend using interfaces to define objects, until you need to use the features of a type

#### Extending an Interface

```
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: 'Mishka',
  honey: true
}
```

#### Extending a type via intersection

```
type Animal {
  name: string;
}

type Bear = Animal & {
  honey: boolean;
};

const bear: Bear = {
  name: 'Mishka',
  honey: true
}
```

Object Factory - blueprint of what an object is supposed to look like.
Interface - a structure used solely for type checking

<br/><br/>

## Interfaces with Classes

Tell a class that it must contain properties and methods by implementing an interface

```
interface HasFormatter {
  format(): string
}

class Person implements HasFormatter {
  constructor(public name: string, protected password: string) {}

  format() {
    return this.username.toLocaleLowerCase()
  }
}

// Must be objects that implement the HasFormatter interface
let person1: HasFormatter;
let person2: HasFormatter;

person1 = new Person('Vlad', 'password123');
```

<br/><br/>

### Literal Types

```
let faveColor: 'red' | 'blue' | 'yellow';
faveColor = 'blue'
```

<br/><br/>

## Generics

- Allow you to create a component that can work over a variety of types, rather than a single one.
- Helps to make the component more reusable
- Have type safety

`<T>` – where T is known as the type parameter:

## Generics with Interfaces

when we dont know what type a certain value in an object will be ahead of time.

Example:

```
interface Course<T> {
  name: string;
  units: number;
  instructors: T
}

let Math10: Course<string> = {
  name: "Math", units: 3, instructors: 'Prof Vlad'
}

let Physics: Course<string[]> = {
  name: 'Physics', units: 5, instructors: ['Prof Vlad', 'Prof X']
}

console.log(Math10)
console.log(Physics)
```
