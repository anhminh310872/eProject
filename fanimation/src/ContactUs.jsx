import React from 'react';

function ContactUs() {
    const spacing = 10; // Khai báo biến spacing ngoài JSX

    return (
        <>
            <div className="hero">
                <h1>Contact Us</h1>
                <hr />
            </div>

            <div className="box-in4">
                <h3>Request Information</h3>
                <div className="rq-in4">
                    <p>Fullname:</p>
                    <input
                        type="name"
                        placeholder="Enter name"
                    />
                </div>
                <div className="rq-in4">
                    <p>Email:</p>
                    <input
                        type="email"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mess">
                    <p>Message:</p>
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="What do you want?"
                    />
                </div>
                <button className="sendrp">SEND</button>
            </div>

            <img
                className="imgcontactus"
                alt=""
                src="./images/5pladepanasonic.png"
            />

            <hr />

            <div className='ggmap' >
                <iframe 
                className='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.267408022309!2d106.67984617594756!3d10.790819589358854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4a7c59c09%3A0x8e2f7cbc924be1db!2zMzkxYSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1734636266531!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
          
            </div>
        </>
    );
}

export default ContactUs;