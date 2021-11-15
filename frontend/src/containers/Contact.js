import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Contact = ({ setAlert }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        subject: '',
        city:'',
        property:'',
        message: ''
    });

    const { name, email, subject, message, phone, city, property } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setLoading(true);
        axios.post('http://localhost:8000//api/contacts/', { name, email, subject, message, phone,property, city }, config)
        .then(res => {
            setAlert('Message Sent', 'success');
            setLoading(false);
            window.scrollTo(0, 0);
        })
        .catch(err => {
            setAlert('Error with Sending Message', 'error');
            setLoading(false);
            window.scrollTo(0, 0);
        })
    };

    return (
        <div className='contact'>
            <Helmet>
                <title>Realest Estate - Contact</title>
                <meta
                    name='description'
                    content='Contact us'
                />
            </Helmet>
            <h1 className='contact__h1'>Let's find your dream house</h1>
            <form className='contact__form' onSubmit={e => onSubmit(e)}>
                <div className='contact__form__div1'> 
                <label className='contact__form__label' htmlFor='name'>Your Name:</label>
                <input 
                    className='contact__form__input' 
                    name='name' 
                    type='text' 
                    placeholder='Full Name' 
                    onChange={e => onChange(e)} 
                    value={name} 
                    required 
                />
                </div>
                <div className='contact__form__div1'>   
                <label className='contact__form__label' htmlFor='email'>Your Email:</label>
                <input 
                    className='contact__form__input' 
                    name='email' 
                    type='email' 
                    placeholder='example@gmail.com' 
                    onChange={e => onChange(e)} 
                    value={email} 
                    required 
                />
                </div>
                <div className='contact__form__div1'> 
                <label className='contact__form__label' htmlFor='phone'>Your Phone:</label> 
                <input 
                    className='contact__form__input' 
                    name='phone' 
                    type='text' 
                    placeholder='123456' 
                    onChange={e => onChange(e)} 
                    value={phone} 
                />
                 </div>
                <div className='contact__form__div1'> 
                <label className='contact__form__label' htmlFor='city'>City:</label>
                <input 
                    className='contact__form__input' 
                    name='city' 
                    type='text' 
                    placeholder='Name of the city' 
                    onChange={e => onChange(e)} 
                    value={city} 
                    required 
                />
               </div>
               <div className='contact__form__div1'> 
                <label className='contact__form__label' htmlFor='property'>Rent/Buy:</label>
                <input 
                    className='contact__form__input' 
                    name='property' 
                    type='text' 
                    placeholder='I am looking to buy/rent' 
                    onChange={e => onChange(e)} 
                    value={property} 
                    required 
                />
                </div>
                <div className='contact__form__div1'> 
                 <label className='contact__form__label' htmlFor='subject'>Subject:</label>
                 <input 
                    className='contact__form__input' 
                    name='subject' 
                    type='text' 
                    placeholder='example@gmail.com' 
                    onChange={e => onChange(e)} 
                    value={subject} 
                    required 
                />
                </div>
                <div className='contact__form__div1'> 
                <label className='contact__form__label' htmlFor='message'>Message:</label>
                <textarea 
                    className='contact__form__textarea'
                    name='message'
                    cols='30'
                    rows='10'
                    placeholder='Message'
                    onChange={e => onChange(e)} 
                    value={message} 
                />
                </div>
                {loading ?
                    <div className='contact__form__loader'>
                        <Loader
                            type="Oval"
                            color="#424242"
                            height={50}
                            width={50}
                        />
                    </div> :
                    <button className='contact__form__button' htmltype='submit'>Send</button>
                }
                <div>
                </div>
            </form>
            {/* <Navbar /> */}
        </div>
    );
};

Contact.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Contact);