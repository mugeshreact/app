import React from 'react'
import logo from './assets/logo.png'
import banner from './assets/banner-img.gif'

const Entera = () => {
    
  return (
    <>
    <div className='nav'>
        <img src={logo} /> 
    </div>
    <div className='header col-12'>
        <div className='content col-8 col-lg-8 col-sm-12'>
            <div className='a'>
            <h1>Finding Challenges in Managing Your Organization's Cloud <br/>Spend?</h1>
        </div>
            <div className='b'>
            <h4>Navigate Your Cloud Spending Towards High Returns Result-Assuring Insights for Your <br/>Cloud Investment</h4>
            </div>
            <div className='c'>
            <p>Get FREE Cloud Cost Optimization & Avail 15% Discount on Your Estimated Price. Let's Start Tracking & <br/>Optimize Cloud Bills, Just Jump in & Register!</p>
            </div>
            <div className='img-section'>
            <img src={banner} className="col-lg-8 col-sm-12" />
            <button className='header-btn'>Get a free Consultaion</button>
            </div>
        </div>
        <div>
            <form>
                <div className='form-control col-4 col-lg-8 col-sm-12'>
                    <div className='center'>
                    <h2>Register Now</h2>
                    </div>
                    <input type='text'  placeholder='Full Name'></input><br/>
                    <input type='email'  placeholder='Email'></input><br/>
                    <input type='number'  placeholder='Mobile Number'></input><br/>
                    <input type='text'  placeholder='Services'></input><br/>
                    <textarea placeholder='Your Comments'></textarea><br/>
                    <div className='btn'>
                     <button type='submit' >Register</button>   
                    </div>
                    
                    
                </div>
            </form>
        </div>
    </div>
    <div className='footer'>
        <div className='content'>
        www.enteratechnologies.com | +91 73053 20111
        </div>
    </div>
    </>
  )
}

export default Entera;