import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Viewfood = () => {
  const navigate=useNavigate();
  const {restroId}=useParams()
  const [restaurant, setRestaurant] = useState({});

   useEffect(()=>{
    async function showProduct(){
      const restaurantResponse = await axios.get(`http://localhost:7000/api/restro/${restroId}`);
      console.log(restaurantResponse.data,"rrrr");
          setRestaurant(restaurantResponse.data);
    }
    showProduct()

   },[])
  

  const addProduct = () => {
    navigate(`/view/${restroId}/addproduct`);
  };


  return (
        <div id='parent' className=' '>
        <div className='button_cart mb-5'>
        <button onClick={addProduct}> add product</button>
          {/* <button onClick={viewCart}>
            View Cart ({cart.length})
          </button> */}
        </div>
        <div>
          <img id='restroImage' src={restaurant.image} alt='Restaurant' />
          <h4>{restaurant.name}</h4>
        </div>
    </div>
  )
}

export default Viewfood