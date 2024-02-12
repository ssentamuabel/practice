import React from 'react'


const Hello = ()=>{
    // return (
    //     <div>
    //         <h1>Hello Ssentamu</h1>
    //     </div>
    // )



    return React.createElement(
        'div',
        {id:'container'},
        React.createElement(
            'h1',
            {id:'item'},
            "Hello SSentamu"
        )
    )
}


export default Hello