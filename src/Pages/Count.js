import { useState, useEffect } from "react"

const Count = () =>{
    const [count, setCount] = useState(0)

    useEffect(()=>{
        alert('hi')
    })

    const addFunc = () =>{
        setCount(count + 1)
    }

    return(
        <>
        <h1>count : {count}</h1>
        <button onClick={addFunc}>add</button>
        </>
    )
}

export default Count