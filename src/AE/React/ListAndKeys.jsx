import React from "react";

class NameList extends React.Component {
  render() {
    const names = ["John", "Alice", "Bob"];

    const colors = [
        {id : 1, color : "Purple"},
        {id : 2, color : "Red"},
        {id : 3, color : "Green"},
        {id : 4, color : "Blue"},
        {id : 5, color : "Yellow"},
    ]

    const products = [
        { id: "a1", name: "Laptop", price: 1000 },
        { id: "b2", name: "Phone", price: 500 },
        { id: "c3", name: "Tablet", price: 300 }
    ];

    return (

      <ul>
        <h4>Names</h4>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}

        <h4>Colors</h4>
        {colors.map((color) => (
            <li key ={color.id}>{color.color}</li>
        ))}
        
        <h4>Products</h4>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    );
  }
}

export default NameList;
