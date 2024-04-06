import React from 'react'
import './Collections.css'
import card1 from  './card1.jpg'
import collection1 from './IMAGE/collections1.avif'
import collection2 from './IMAGE/collections2.avif'
import collection3 from './IMAGE/collections3.avif'
import collection5 from './IMAGE/collection5.avif'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Collections = () => {
  return (
    <div>
        <div className='collection'>
    <div className='col'><h1>Collections</h1></div>
    <div className='nas'>
     <div id='explore'><h4>Explore curated lists of top restaurants, cafes, pubs, and bars in Bhopal, based on trends</h4></div>
     <div ><a id='all' href="#">All collection in Bhopal<ArrowRightIcon/> </a></div>
    </div>
    <div className='c-card'>
       <div  className='photo1'>
         <img    className='pimage' src={collection1} alt="" />
         <div className='c-content'>
         <h5>12 Best Luxury Dining pl....</h5>
         <h5>13 Place> </h5>
         </div>
       </div>
       <div  className='photo2'>
         <img className='pimage' src={collection2}alt="" />
         <div className='c-content'>
         <h5>11 Romantic Dining place</h5>
         <h5>13 place</h5>
         </div>
       </div>
       <div  className='photo3'>
         <img  className='pimage' src={collection3}alt="" />
         <div className='c-content'>
         <h5>17 great cafes</h5>
         <h5>13 Place</h5>
         </div>
       </div>
       <div  className='photo4'>
         <img   className='pimage' src={collection5} alt="" />
         <div className='c-content'>
         <h5>12 local Favourite food</h5>
         <h5>13 place <ArrowRightIcon/></h5>
         </div>
       </div>

    </div>
</div>
    </div>
  )
}

export default Collections