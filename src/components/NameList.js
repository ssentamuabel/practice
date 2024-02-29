import React from 'react'
import Person from './Person'


const NameList = ()=>{

    const names = ["Yusuf", "Abel", "Ssentamu"]
    const Persons = [
        {
            id: 1,
            "name": "Ssentamu Yusuf",
            "age":25,
            "skill": "React"
        },
        {
            id: 2,
            "name": "Kasibante Grace",
            "age":22,
            "skill": "Angular"
        },
        {
            id: 3,
            "name": "Nakato Daizy",
            "age":19,
            "skill": "Vue"
        }
    ]
    const namesList = names.map(name=><h2>{name}</h2>)
    // const PersonList = Persons.map((person)=><Person  key ={person.id} person={person}/>)
    const PersonList = Persons.map((person, index)=><Person  key ={index} person={person}/>)
    return(
        <div>
            {
                PersonList
            }
            
        </div>
    )
}



export default NameList;