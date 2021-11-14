import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const layout = (props) => (
    <div>
        <Navbar />
        {props.children}
        
    </div>
);

export default layout;