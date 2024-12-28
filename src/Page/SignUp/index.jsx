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
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter your name"/>
            <label>Username:</label>
            <input type="text" placeholder='Username' />
            <label>Email:</label>
            <input type="email" placeholder='Email' />
            <label>Mobile:</label>
            <input type="Mobile" placeholder='Mobile' />
            <div className="checkbox" type="checkbox">Share my registration data with Superapp</div>
            <button>Sign Up</button>
            </form>
            </div>
          </div>
          </div>
        </div>
  
    </>
  )
}

export default signUp