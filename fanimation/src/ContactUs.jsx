import React from 'react'


function Contactus() {
    return ( 
        <>
        <div className="hero">
        <h1>Contact Us</h1>
        <hr />
      </div>
      
        <div className='box-in4'>
            <h3>Request Information</h3>
            <div className='rq-in4'>

            <p>Fullname:</p>
            <input 
            type='name'
            placeholder='enter name'
            />
            </div>
             <div className='rq-in4'>
                <p>Email:</p>
                <input 
                type='email'
            placeholder='enter email'
                />
             </div>
             <div className='mess'>
                <p>Message:</p>
                <textarea
        rows="4"
        cols="50"
       placeholder='what do you want?' 
      />
                

             </div>
        <button className='sendrp'>SEND</button>        
             </div>
             <img className='imgcontactus' alt="" src='./images/5pladepanasonic.png'/>
             
        </>
     );
}

export default Contactus;