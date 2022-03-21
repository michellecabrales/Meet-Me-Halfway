import React from 'react'
import background from '../../images/drive.png'
import Box from '../../images/purple.png';

export default function Home() {

    return (
        <div>
            <h1>Home</h1>
            <img src={background} width="100%" styles={{opacity: 0.5}} />
            <img src={Box} width = "45%" length = "200%"
            style={{
                position: 'absolute ',
                left: 0,
                right: 0, 
                top: 200,
                bottom: 900

            }}/>
        </div>

        
    )
}
