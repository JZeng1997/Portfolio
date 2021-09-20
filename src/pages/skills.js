import React from 'react'
import './page-styles.css'
import javascript_image from './../Media/javascript_icon.png'
import cplusplus_image from './../Media/cplusplus_icon.png'
import html_image from './../Media/html_icon.png'
import java_image from './../Media/java_icon.png'
import react_image from './../Media/react_icon.png'
import php_image from './../Media/php_icon.png'
import css_image from './../Media/css_icon.png'
import { useState } from 'react'

const Skills = () => {
    const jsScript = `
    Experience: 2 year
    Projects: Career Fair Application, Portfolio, Tournament Application
    `;
    const htmlScript = `
    Experience: 2 year
    Projects: Career Fair Application, Portfolio, Tournament Application, Data Spreasheet Generator
    `;
    const javaScript = `
    Experience: 2+ years
    Projects: Murder Mystery, My Castle Not Yours
    `;
    const reactScript = `
    Experience: 1 year
    Projects: Portfolio, Tournament Application
    `;
    const cplusScript = `
    Experience: 2+ years
    Projects: Simple Go (Unity)
    `;
    const cssScript = `
    Experience: 2 year
    Projects: Career Fair Application, Portfolio, Tournament Application, Data Spreadsheet Generator
    `;
    const phpScript = `
    Experience: <1 year
    Projects: Data Spreadsheet Generator
    `;

    const [showJavascript, setShowJavascript] = useState(false)
    const [showHtml, setShowHtml] = useState(false)
    const [showJava, setShowJava] = useState(false)
    const [showReact, setShowReact] = useState(false)
    const [showCplusplus, setShowCplusplus] = useState(false)
    const [showPhp, setShowPhp] = useState(false)
    const [showCss, setShowCss] = useState(false)

    return (
        <div className='centered'>
            <h1>Skills</h1>
            <div className='skills transparent-bg'>
                <div className='skillBox'>
                    <img src={javascript_image} className='skill' 
                    onMouseEnter={() => setShowJavascript(true)} onMouseLeave={() => setShowJavascript(false)} />
                    {showJavascript && (<p>{jsScript}</p>)}
                </div>
                <div className='skillBox'>
                    <img src={html_image} className='skill' 
                    onMouseEnter={() => setShowHtml(true)} onMouseLeave={() => setShowHtml(false)} />
                    {showHtml && (<p>{htmlScript}</p>)}
                </div>
                <div className='skillBox'>
                    <img src={java_image} className='skill' 
                    onMouseEnter={() => setShowJava(true)} onMouseLeave={() => setShowJava(false)} />
                    {showJava && (<p>{javaScript}</p>)}
                </div>
                <div className='skillBox'>
                    <img src={react_image} className='skill' 
                    onMouseEnter={() => setShowReact(true)} onMouseLeave={() => setShowReact(false)} />
                    {showReact && (<p>{reactScript}</p>)}
                </div>
                <div className='skillBox'>
                    <img src={cplusplus_image} className='skill' 
                    onMouseEnter={() => setShowCplusplus(true)} onMouseLeave={() => setShowCplusplus(false)} />
                    {showCplusplus && (<p>{cplusScript}</p>)}
                </div>
                <div className='skillBox'>
                    <img src={php_image} className='skill' 
                    onMouseEnter={() => setShowPhp(true)} onMouseLeave={() => setShowPhp(false)} />
                    {showPhp && (<p>{phpScript}</p>)}
                </div>
                <div className='skillBox'>
                    <img src={css_image} className='skill' 
                    onMouseEnter={() => setShowCss(true)} onMouseLeave={() => setShowCss(false)} />
                    {showCss && (<p>{cssScript}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Skills
