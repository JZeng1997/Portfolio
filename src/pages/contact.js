import React from 'react'

const Contact = () => {
    return (
        <div className='page-container'>
            <h1>Contact Me</h1>
            <form>
                <text>Name: </text>
                <input type='text' id='name'></input>
                <br/>
                <text>Email: </text>
                <input type='text' id='email'></input>
                <br/>
                <text>Phone: </text>
                <input type='tel' id='phone'></input>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
