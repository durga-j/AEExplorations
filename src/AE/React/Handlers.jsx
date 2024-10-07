import React from "react";
class EventHandler extends React.Component{
    state = {
        name : "Aspire",
        value : ''
    };

    handleClick = () => {
        alert("Button clicked.. Hello",this.state.name);
    }

    handleChange = (event) => {
        this.setState(
            {value : event.target.value}
        );
    }

    render(){
        return(
            <div>
                <h1> hello World</h1>

                <button type ="button" 
                    onClick={this.handleClick}>
                    Click me!
                </button>
                <br></br>

                <input type= "text" 
                    onChange={this.handleChange} 
                    value={this.state.value}>
                </input>
                
                <h3>{this.state.value}</h3>
            </div>
        );
    }
}
export default EventHandler;