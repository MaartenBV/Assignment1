import React from 'react';
import '../../App.css';
import Mailer from '../Mailer'

function Contact() {
    return(
        <div className="mailer-container">
            <h2 className="contact-title">CONTACT INFO</h2>
            <p className="contact-info">Maarten Lauwereys</p>
            <p className="contact-info">E-mail: maarten.lauwereys@ugent.be</p>
            <p className="contact-info">Phone number: 0494 14 15 89</p>
            <Mailer/>
        </div>
    )
}

export default Contact