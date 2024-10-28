import React from "react";


interface Examples {
    name : string
}
const TypescriptExp: React.FC<Examples>=({name = "Durga"})=>{
    return (
        <>
            <h1>Hello! {name}, Welcome.</h1>
        </>
    );
}

export default TypescriptExp;