import React from 'react'
import background from '../../images/drive.png'
export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <img src={background} width="100%" styles={{opacity: 0.5}} />
        </div>
    )
}
