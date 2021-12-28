import emailjs from "emailjs-com";
import React from 'react';

export default function Mailer() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_nxknjsf', e.target, 'user_u4hDHbYoB4ZMkBm4zISAs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return(
        <div
        className="mailer container"
        style={{ width: "50%"}}>
            <h1 style={{marginTop: "20px"}}>Send us an e-mail!</h1>
            <form
            className="row"
            style={{margin: "25px 85px 0px 100px"}}
            onSubmit={sendEmail}>
                <label>Your Name</label>
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                style={{marginBottom: "10px"}}
                />
    
                <label>Your Email</label>
                <input
                type="email"
                name="user_email"
                className="form-control"
                placeholder="Your Email Address"
                style={{marginBottom: "10px"}}
                />

                <label>Subject</label>
                <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                style={{marginBottom: "10px"}}
                />
    
                <label>Message</label>
                <textarea
                name="message"
                rows="4"
                className="form-control"
                placeholder="Subject"
                />

                <input
                type="submit"
                value="Send"
                className="form-control btn btn-secondary"
                style={{marginTop: "30px", marginBottom: "52px"}}
                />
            </form>
        </div>
        )
    }