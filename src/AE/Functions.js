function Functions(){

    function greet(name = "Welcome") {
        console.log("Hello, " + name + "!");
      }

      greet("World");  // Output: Hello, World!
      greet("Nice to meet you!"); 
      greet(); //default value
      
      //Function Expressions
      const greetExp = function(name) {
        console.log("Hello, " + name + "!");
      };

      greetExp("World");
      
      //Arrow function
      const greetArrow = (name) => {
        console.log("Hello, " + name + "!");
      };

      greetArrow("Arrow Function");
      
      //params and arguments
      function add(a, b) {
        return a + b;
      }

      let result = add(5, 3);  // Output: 8
      console.log("addidtion", result);
      
      //return values
      function multiply(a, b) {
        return a * b;
      }

      let multi = multiply(4, 5);  // Output: 20
      console.log("mutilplication",multi);
      
      //callback function
      function sayHello(name) {
        console.log("Hello, " + name);
      }

      function greetUser(callback) {
        const userName = "John";
        callback(userName);
      }

      greetUser(sayHello); 
}

export default Functions;