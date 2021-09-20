import React from 'react'
import About from './about'
import './page-styles.css'
import Skills from './skills'

const Home = () => {
    return (
        <div className="page-container">
            <About />
            <Skills />
        </div>
    )
}

export default Home
