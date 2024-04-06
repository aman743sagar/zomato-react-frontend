import React from 'react'
import card1 from './card1.jpg'
import card2 from './card2.jpg'
import card3 from './card3.webp'
import './Card.css'

const Card = () => {
  return (
    <div>
    <div className='cardsparents'>
     <div className='Card1'>
       <div className='image'><img   className='cimage' src={card1} alt="" />
        <div className='content'>
         <h3>Order online</h3>
         <h5>Stay home and Order to your door step</h5>
          </div>
         </div>
       </div>
       <div className=' Card2'>
        <div className='image'><img  className='cimage' src={card2} alt="" />
        <div className='content'>
          <h3>Dining</h3>
          <h5>View the city's favourite venues</h5>
        </div>
         </div>
       </div>
       <div className='Card3'>      
       <div className='image'><img   className='cimage' src={card3} alt="" />
       <div className='content'>
         <h3>Nightlife and Clubs</h3>
         <h5>Explore the city's top nightlife outlets</h5>
        </div>
        </div>
      </div>
     </div></div>
  )
}

export default Card