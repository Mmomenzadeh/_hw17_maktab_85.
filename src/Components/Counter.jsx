import "../assets/styles/counter.css"
import React,{useState} from 'react'



const Counter = ()=>{
    const [currentState , setState ] = useState(0)
    const numberCounter = (op)=>{
    

    if (op === '+') {
        
        setState(currentState => currentState +1)

    }else{
        setState(currentState => currentState -1)
    }
}
    return(

        <div className="counter">
            <button className="btn plus" onClick={()=>{numberCounter("+")}}>+</button>
                <p className="number">{currentState}</p>
            <button className="btn minus" onClick={()=>{numberCounter("-")}}>-</button>

        </div>
    )
}


export default Counter