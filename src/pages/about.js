import React from 'react'
import './page-styles.css'

const About = () => {
    return (
        <div className='centered'>
            <div className='bio'>
                <div className='intro transparent-bg'>
                    <h1> Hello I'm<br/>Joseph Zeng </h1>
                    <h3>Aspiring Software Developer|</h3>
                    <h3>Passionate for quality code</h3>
                </div>
                <div className='aboutme-container transparent-bg'>
                    <p>
                        I started my programming journey when I took my first computer science class in high school and joined a summer coding camp 
                        later that year. I found my passion in software development and pursued and obtained a MS in Computer Science from the Colorado 
                        School of Mines.
                        I want to put my diverse skill-set I gained from my education towards a challenging yet fulfilling career as a software developer
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
