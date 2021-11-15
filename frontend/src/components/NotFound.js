import React from 'react';
import { useHistory } from "react-router-dom";
const NotFound = () => {
    let history = useHistory();
    return(
    // <div className='notfound'>
    //     <h1 className='notfound__heading'>404 Not Found</h1>
    //     <p className='notfound__paragraph'>The link you requested does not exist on our website.</p>
    // </div>
    <div className="notfound">
    <img className="notfound__img" src="https://i.imgur.com/A040Lxr.png" alt="lost_in_space"/>
<div>
        <h3 className="notfound__heading">This Page is Lost in Space</h3>
        <p className='notfound__paragraph'>You thought this mission to the moon would be a quick six month thing. Your neighbor offered to look after your dog. Your high school math teacher was impressed. He once said you wouldn’t amount to anything.You sure showed him. But now here you are, fifty feet from your spaceship with no way to get back. Your dog will be so sad. Your math teacher will be so smug. Pretty devastating.</p>
        </div>
        <button className="notfound__button" onClick={() => history.goBack()}>Go Back</button>
    
</div >
    )
    
    };

export default NotFound;