import React from 'react'
import './getz.css'
import phone from './IMAGE/phone.avif'
import playstore from './IMAGE/playstore.webp'
import appstore from './IMAGE/appstore.webp'

const Getz = () => {
  return (
    <div>
        <div className="main-container">
           <div className="parents23">
            <div className="phone">
                <img src={phone} alt="" />
            </div>
            <div className="get-the">
                <div className='appp'>
                    <h1>Get the Zomato app</h1>
                    <h6>We will send you a link, open it on your phone to download </h6>
                    <h6>the app</h6>
                </div>
                <div className='radiaobutton'>
                 <div className='seriser'>
                   <input id='oneee' name="one " type="radio"/>
                        <span id='fgh'>Email</span>
                   <input id='oneee' name="one " type="radio"/>
                    <label id='fgh'>Phone</label>
                  </div>
                  <div className='inputfiled1'>
                   <input  id='inps' type="Email" placeholder='Enter your email' />
                   <button id='shar'>Share app link</button>
                 </div>
                </div>
                <div className='downlod'>
                  <h5>Downlod app from</h5>
                 <span><img id='imag34' src={playstore} alt="" /></span>
                  <span><img   id='imag35' src={appstore} alt="" /></span>

                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Getz