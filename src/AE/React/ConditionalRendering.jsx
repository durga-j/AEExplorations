import React from "react"
class Num extends React.Component {
   constructor(props){
    super(props)
    this.state={
        number: 99
    }
   }

   render(){

    //if-else

    // if(this.state > 100){
    //     return <h1>{this.state.number} is greater than 100</h1>
    // }
    // else{
    //     return <h1>{this.state.number} is lesser than 100</h1>
    // }

    //ternary

    // return (
    //     <div>
    //         {(this.state.num > 100) ? 
    //         <h1>{this.state.number} is greater than 100</h1> 
    //         : <h1>{this.state.number} is greater than 100</h1>
    //     }
    //     </div>
    // );

    //logical & Operator

    // return (
    //     <div>
    //       {this.state.number < 100 && <h1>{this.state.number} is Lesser</h1>}
    //     </div>
    // );   
    
    //switch
    
    switch(true){
        case this.state.number > 100 : 
            return <h1>{this.state.number} is Greater</h1>
        case this.state.number < 100 :
            return <h1>{this.state.number} is Lesser</h1>
        default :
            return <h1>Provide Number</h1>
    }

   }
}

export default Num;