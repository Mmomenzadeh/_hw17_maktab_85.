import "../assets/styles/counter.css"

const Counter = ()=>{
    return(

        <div className="counter">
            <button className="btn plus">+</button>
                <p className="number">0</p>
            <button className="btn minus">-</button>

        </div>
    )
}


export default Counter