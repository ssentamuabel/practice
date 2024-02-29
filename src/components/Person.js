import React from 'react'


const Person = ({person})=>{
    return (
        <div>
            <h2>I am {person.name} aged {person.age} and skilled in {person.skill}</h2>
        </div>
    )
}

export default Person