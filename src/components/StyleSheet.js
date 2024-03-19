import React from 'react'
import './myStyles.css'


const StyleSheet = ({primary})=>{

const style = primary ? 'primary': ''
    return(
        <h2 className={style}>Style sheeet</h2>
    )
}

export default StyleSheet;