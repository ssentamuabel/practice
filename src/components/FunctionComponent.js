import React from 'react'


const FunctionComponent = ()=>{



    function clickHandler(){
        console.log("Hello World, this is clickhandler")
    }

    return(
        <>
            <button onClick={clickHandler}>Click Here</button>
        </>
    )
}

export default FunctionComponent;