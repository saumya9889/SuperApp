import React from 'react';
import SignUpImg from '../../assets/images/signup-img.png';

const signUp =()=>{
  return (
    <>
    <div className='container'>
        <div className="signup-page">
          <div className='signup-left'>
          <img src={SignUpImg} className='signup-img'  alt="signup" />
          <h1>Discover new things on Superapp</h1>
          </div>
          <div className='signup-right'>
          <div className="signup-logo">
            <h2 className='signup-text'>Super app</h2>
            <p>Create your new account</p>
            </div>
            <div className="signup-form">
            <form>
            <input type="text" name="name" placeholder="Enter your name"/>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="Mobile" placeholder='Mobile' />
            <div className="terms">
            <input className="checkbox" type="checkbox" />
            <h6> Share my registration data with Superapp</h6> 
            </div>
            <button type="submit">Sign Up</button>
            </form>
             <p className='policies'>By clicking on Sign up. you agree to Superapp <a href='terms'>Terms and<br/>Conditions of Use</a>
             <br/><br/> To learn more about how Superapp collects, uses, shares and<br/> protects your personal data please head Superapp <a href='privacy'>Privacy Policy</a>
             </p>
            </div>
          </div>
          </div>
        </div>
  
    </>
  )
}

export default signUp