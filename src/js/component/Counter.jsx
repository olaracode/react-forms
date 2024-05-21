import React, { useState } from "react";


// Solid
// Single responsability Principle
const Counter = () => {
    console.log("Counter renderizado")
    const [counter, setCounter] = useState(0);
    return (
        <div>
            {counter}
            <button
                onClick={() => setCounter(counter + 1)}
            >Sumale 1</button>
        </div>
    )
}

export default Counter;