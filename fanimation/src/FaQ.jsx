import './assets/faq.css';
import React, { useState } from 'react';

function FAQ() {

    const InqSubmit = () => {
            alert("Thank you for your inquiry!");
      }
    
    const ToggleDiv = ({ children, toggleContent }) => {
        const [isVisible, setIsVisible] = useState(false);
    
        const handleClick = () => {
            setIsVisible(!isVisible);
        };
    
        return (
            <div>
                <div onClick={handleClick} className="q">
                    {toggleContent} <span className="arrow">{isVisible ? '▲' : '▼'}</span>
                </div>
    
                {isVisible && (
                    <div className="a">
                        {children}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="faq-container">
            <section>
                <div className="hero">
                    <h1>Frequently Asked Questions</h1>
                    <hr />
                </div>
            </section>

            <div className="faq-list">
                <ToggleDiv toggleContent="What types of fans do you sell?">
                    <p>We sell a variety of ceiling fans, pedestal fans, wall fans, exhaust fans, as well as fan accessories and parts.</p>
                </ToggleDiv>
                <hr />
                <ToggleDiv toggleContent="How can I choose a fan for my room?">
                    <p>You should decide based on the size of your room. For smaller rooms (up to 15m²), we recommend a wall or pedestal fan. For larger rooms, a pedestal or ceiling fan may be sufficient instead.</p>
                </ToggleDiv>
                <hr />
                <ToggleDiv toggleContent="Are your fans energy-efficient?">
                    <p>Yes, our fans are designed with energy-efficiency as a high priority, as well as bringing the latest cooling technology to your home.</p>
                </ToggleDiv>
                <hr />
                <ToggleDiv toggleContent="Do you offer installation services?">
                    <p>Yes! We offer installation services with an extra fee.</p>
                </ToggleDiv>
                <hr />
                <ToggleDiv toggleContent="What is your refund policy?">
                    <p>Currently, we offer a 30-day refund period where you can return any products from our store you are not satisfied with. However, we will not refund the installation fee and you must also cover the shipping fee.</p>
                </ToggleDiv>
                <hr />
                <ToggleDiv toggleContent="What do I do if my fan is making noise or not working properly?">
                    <p>For wall and ceiling fans, please make sure the blades and motor are clean from dust and perform regular cleaning. Also make sure they are properly mounted and hung, do not leave the bolts loose.</p>

                    <p>For pedestal fans, make sure there is no dust buildup in the fan blades. If the fan isn't working, ensure it is properly connected to a power cord.</p>

                    <p>If any of these problems persist, please contact our customer support team for troubleshooting or a warranty claim.</p>
                </ToggleDiv>
                <hr />
                <ToggleDiv toggleContent="How do I clean my fan?">
                    <p>Make sure no power is going into the fan before cleaning, use a microfiber cloth to clean the blades and associated parts.</p>

                    <p>You should also periodically lubricate your fan's motor to ensure smooth use.</p>
                    
                    <p>If you don't plan on using your fan for an extended period, you should store it in a dry place and cover it to prevent dust.</p>
                </ToggleDiv>
                <hr />
                <ToggleDiv toggleContent="How can I track my purchase once it's shipped?">
                    <p>Once it is shipped, you will receive an email about your purchase's shipping details, including its estimated arrival date and a shipping code. You can also track your purchase on your page's profile, as well as use the shipping code to observe your purchase's journey.</p>
                </ToggleDiv>
            </div>

            <h2>Have extra questions?</h2>
            <p style={{width:"60%", margin:"auto"}}>Please send your inquiries using the form below and our trusted team will get back to you ASAP.</p>

            <div className="q-form">
                <form action="" onSubmit={InqSubmit}>
                <h1>Inquire Us</h1>
                <div className="q-form-prompt">Full name:</div>
                <input required placeholder="Your full name here" className="q-form-input" />
                <div className="q-form-prompt">Email:</div>
                <input required type="email" placeholder="Your email here" className="q-form-input" />
                <div className="q-form-prompt">Inquiry:</div>
                <textarea required placeholder="Your inquiry here" className="q-form-input msg" />
                <button className="q-form-btn" value="submit">SEND</button>
                </form>
            </div>
            <br />
        </div>
    );
}

export default FAQ;