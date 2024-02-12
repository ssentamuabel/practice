import React from 'react'


// function Greatings()
// {
//     return <h2>Hello Ssentamu</h2>
// }



const Greatings = ({firstname, secondname, children})=> {

    return (
        <>
             <h1>Hello {firstname} {secondname} </h1>
             <p>{children}</p>
        </>
       
    )
   

}


export default Greatings;