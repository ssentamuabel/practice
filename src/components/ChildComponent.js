import React from 'react'


const ChildComponent = ({greetHandler})=>{
    return (
        <>
            <button onClick={()=>greetHandler("Yusuf Ssentamu")}>Click here</button>
        </>
    )
}


export default ChildComponent