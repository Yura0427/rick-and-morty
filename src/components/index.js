import React from 'react'
import portal from '../img/rick-morty-portal.jpg'

export default function Home() {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src={portal} width='100%'/>
        </div>
    )
}
