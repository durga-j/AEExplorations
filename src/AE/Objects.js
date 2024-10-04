function Objects() {

    //object
    const person = {
        name: "John",
        age: 30,
        job: "Developer"
    };
    
    // Accessing object properties
    console.log("accessing obj", person.job);
    console.log("name", person["name"]);
    
    // Adding property
    person.location = "chennai";
    
    // Object iteration
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
    
    // Object destructuring
    const { age, job } = person;
    console.log("Destructuring ", age, job);
    
    // Object methods
    console.log("keys", Object.keys(person));
    console.log("values", Object.values(person));
    console.log("entries", Object.entries(person));
    
    // Prototype-based inheritance
    function Animal(type) {
        this.type = type;
    }

    Animal.prototype.speak = function() {
        console.log(this.type + " makes a sound");
    };

    const dog = new Animal("Dog");
    dog.speak();  // Output: "Dog makes a sound"
    
    // Classes in JS
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }

    const jane = new Person("Jane", 25);
    jane.greet();  // Output: "Hello, my name is Jane"
    
    // Encapsulation with private fields in classes
    class Bank {
        #balance;  // Private field
        
        constructor(owner, balance) {
            this.owner = owner;
            this.#balance = balance;
        }
        
        deposit(amount) {
            this.#balance += amount;
        }
        
        getBalance() {
            return this.#balance;
        }
    }

    const acc = new Bank("John", 1000);
    acc.deposit(1000);
    console.log("Account Balance", acc.getBalance());  // Output: Account Balance 2000
    
    
    // Polymorphism
    class Fruit {
        constructor(name){
            this.name = name;
        }
        
        type(){
            console.log(`${this.name} is a fruit`);
        }
    }
    
    class Apple extends Fruit {
        type(){
            console.log(`${this.name} is a fruit and it is red in color`);
        }
    }
    
    class Orange extends Fruit {
        type() {
            console.log(`${this.name} is a fruit and it is orange in color`);
        }
    }
    
    const fruits = [new Fruit("Apple"), new Fruit("Orange")];
    
    fruits.forEach(fruit =>{
        fruit.type();
    })

}
export default Objects;
