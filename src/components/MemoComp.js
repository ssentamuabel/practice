import React from 'react'


const MemoComp = ({name})=>{
    console.log("this is the Memo Component rendering")
    return(
        <div>
            <h2>This is the Memo Component {name}</h2>
        </div>
    )
}

export default React.memo(MemoComp)