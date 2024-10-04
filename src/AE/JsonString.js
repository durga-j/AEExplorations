function JSONString(){
    const jsonString = `{
        "person": {
            "name": "Mayu",
            "age": 2,
            "address": {
                "city": "Tirupur",
                "zip": "666666"
            }
        }
    }`;
    
    const obj = JSON.parse(jsonString);
    
    // Accessing nested properties
    console.log(obj.person.name);      // Output: "Mayu"
    console.log(obj.person.address.city);  // Output: "Tirupur"
    
}
export default JSONString;