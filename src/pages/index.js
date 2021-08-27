import React from 'react'
import './page-styles.css'

const Home = () => {
    return (
        <div className="page-container">
            <h1>Home</h1>
            <div className="quote">
                <p>"Go ahead and live with your head held high. No matter how devestated you may be by your own weakness or uselessness, set your heart ablaze. Grit your teeth and look straight ahead"</p>
                <p style={{textAlign: 'right'}}>- Regoku (Demon Slayer) </p>
            </div>
        </div>
    )
}

export default Home
