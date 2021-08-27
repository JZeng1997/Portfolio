import React from 'react'
import './page-styles.css'

const About = () => {
    return (
        <div className='page-container'>
            <h1>About</h1>
            <h2>Goal</h2>
            <div className='personality-container'>
                <h2>Quick learner</h2>
            </div>
            <div className='personality-container'>
                <h2>Driven</h2>
                <p>Staying dedicated to a task without giving up no matter how hard it gets. </p>
            </div>
            <div className='personality-container'>
                <h2>Always Improving</h2>
                <p>Whether its learning something new, improving my programming skills, or working out; I'm always looking to push my limits.</p>
            </div>
            <h2>Hobbies</h2>
            <p>
                Shaolin Kung Fu, Tai Chi, Archery, Working out, Hiking, Escape Rooms
            </p>
            <p>MAKE A HOBBIES CONTAINER FOR EACH HOBBY</p>
            <p>
                <h1>Shaolin</h1>
            </p>
        </div>
    )
}

export default About
