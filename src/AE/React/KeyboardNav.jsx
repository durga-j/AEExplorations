import { useState } from "react"

export default function Navigation(){

    const[isToggled,setToggled] = useState(false);

    const handleKeyDown=(event)=>{
        if(event.key === 'Enter' || event.key === ' '){
            setToggled(!isToggled)
        }
    }

    return(
        <div
            role="button"
            tabIndex={0}
            onClick={() => setToggled(!isToggled)}
            onKeyDown={handleKeyDown}
        >
            {isToggled ? 'ON' : 'OFF'}
        </div>
    )
}
