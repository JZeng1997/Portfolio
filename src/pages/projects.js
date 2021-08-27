import React from 'react'
import './page-styles.css'

const Projects = () => {
    return (
        <div className='page-container'>
            <p>
                <h1>Projects and Achievements</h1>
                <div className='project-component'>
                    <h2> Chat Application</h2>
                    <p>Implemented a simple chat application using React and Firebase</p>
                </div>
                <div className='project-component'>
                    <h2>Tournament Judging Application</h2>
                    <p>An application for judging in martial tournaments</p>
                </div>
                <div className='project-component'>
                    <h2>AlgoExpert</h2>
                </div>
            </p>
        </div>
    )
}

export default Projects
