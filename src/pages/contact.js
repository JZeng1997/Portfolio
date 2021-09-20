import React, {useState, useReducer} from 'react'
import { init, send } from 'emailjs-com'

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

const Contact = () => {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name:'Joseph Zeng',
        message: '',
        reply_to: '',
    });
    init('user_2vjzFwwExJP1N2MO4wilO');
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);}, 10000);
        send(
            'service_gdsfk55',
            'template_i0iwhjm',
            toSend,
            'user_2vjzFwwExJP1N2MO4wilO'
        ).then((response) => {
            console.log('SUCESS!', response.status, response.text);
        }).catch((err) => {
            console.log('FAILED...', err);
        });
    }
    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
        setToSend({ ...toSend, [event.target.name]: event.target.value });
    }
    return (
        <div className='page-container'>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label>Name </label>
                <input type='text' id='name' name='from_name' onChange={handleChange} required ></input>
                <br/>
                <label>Email </label>
                <input type='text' id='email' name='reply_to' onChange={handleChange} required ></input>
                <br/>
                <label>Message<br/></label>
                <textarea type='text' id='message' name='message' style={{width: '40vw', height: '20vh'}} onChange={handleChange} required ></textarea>
                <br/>
                <button type='submit' value='Submit'>Submit</button>
                {submitting && <div>
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                        ))}
                    </ul>
                    </div>}
            </form>
        </div>
    )
}

export default Contact
