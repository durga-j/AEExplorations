import React from "react";

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : "",
      age : ""
    };
  }

  handleValueChange = (event) => {
    const {name , value} = event.target;
    this.setState({
      // name : (event.target.value)
      [name]:value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert (`Form Submitted Successfully \nUr age is ${this.state.age}. \nThanks ${this.state.name}`);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
        <label>
          UserName :
          <input
            type = "text"
            value = {this.state.name}
            name="name"
            onChange={this.handleValueChange}
            />
        </label>
        <br></br>
        <label>
          Age :
          <input
            type = "text"
            value = {this.state.age}
            name="age"
            onChange={this.handleValueChange}
            />
        </label>
        <br></br>
        <button 
          type="submit"
          >Submit </button>
          </form>
      </div>
    )
  }
}

export default Form;
