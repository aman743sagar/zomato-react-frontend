import React, { useState } from 'react';
import { useLocation,useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import './Viewcard.css';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';




const BillDetailsCard = ({ totalPrice, discount, gstRate, platformChargeRate }) => {
  const gstAmount = (totalPrice * gstRate) / 100;
  const platformCharge = (totalPrice * platformChargeRate) / 100;
  const totalAmount = totalPrice - (totalPrice * discount) / 100 + gstAmount + platformCharge;
      
  return (
    <div className='bill-details-cart'>
      <div className='detailheadingfd'><h3>Bill Details</h3></div>
      <div className='maindetbox'><span className='headdingcartdetail'>Total Price:</span> <span className='backendatah'>{totalPrice}</span></div>
      <div className='maindetbox'><span  className='headdingcartdetail'  >Discount:</span > <span  className='backendatah' >{discount}%</span></div>
      <div className='maindetbox'><span  className='headdingcartdetail' >GST ({gstRate}%): </span > <span   className='backendatah'>{gstAmount}</span></div>
      <div className='maindetbox'><span  className='headdingcartdetail' >Platform Charge ({platformChargeRate}%): </span> <span  className='backendatah' >{platformCharge}</span></div>
      <div className='maindetbox'><span className='headdingcartdetail' >Total Amount:</span> <span>{totalAmount}</span></div>
    </div>
  );
};

const Viewcard = () => {
  const location=useLocation()
  let {restroId}=    useParams()
  const {cart,totalPrice:initialTotalPrice,restaurant}=location.state;
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);
  const [cartItems, setCartItems] = useState(cart);
  const [savedAmount, setSavedAmount] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);


  const handlePlus = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
    updateTotalPrice(updatedCartItems);
  };

  
  const handleMinus = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = Math.max(updatedCartItems[index].quantity - 1, 0);
    setCartItems(updatedCartItems);
    updateTotalPrice(updatedCartItems);
  };

  const updateTotalPrice = (items) => {
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };
  const handleApplyCoupon = () => {
    switch (coupon) {
      case 'MAIGAREEBHU':
        setDiscount(90);
        setSavedAmount((totalPrice * 90) / 100);
        break;
      case 'COUPON1':
        setDiscount(50);
        setSavedAmount((totalPrice * 50) / 100);
        break;
      case 'COUPON2':
        setDiscount(25);
        setSavedAmount((totalPrice * 25) / 100);
        break;
      default:
        alert('Invalid coupon code');
    }
  };

  const handlePayment= async()=>{
     const stripe= await loadStripe("pk_test_51P4JeWSAwzKxKMw8hWaycDxQSYudcCNJ6o8pIQ7PFcDJrbybJa6pEvPM6xY9es1A7IzGHYobFUyJMngp4b2eyDPb00VX8REslu")
     const body = {
      products:cartItems,
      restroId:restroId,
      restaurant:restaurant
  }
  const headers = {
      "Content-Type":"application/json"
  }
  const response = await fetch("http://localhost:7000/api/payment",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
  });

  const session = await response.json();

  const result = stripe.redirectToCheckout({
      sessionId:session.id
  });
  
  if(result.error){
      console.log(result.error, 'errrrr');
  }
  }


  return (
    <div className='maine-content-cart'>
      <div className='cartheadingh'><h2>Cart</h2></div>
      {cartItems.length===0 ?(
         <div>
           <div className='cartierhg'><h1>Add item to cart</h1></div>
           <div className='cartlogo'> <AddShoppingCartIcon id='lohgo'/> </div>
         </div>
      ):(
        <div>
          {cartItems.map((item,index)=>(
            <div className='mainrcartconatiner'  key={index}>
               <div className='cartdetail'>
                    <div className='item-name'> <FiberManualRecordIcon id='bullet'/> <span>{item.name}</span> </div>
                         <div className='flex-container'>
                             <div  className='grennbutton'>
                               <span> <button   id='plusbuttton' onClick={()=>handlePlus(index)}>+</button> </span>
                               <span className='quanttttiy'>{item.quantity}</span>
                              <span> <button  id='minnnbutton' onClick={()=>handleMinus(index)}>-</button></span>
                              {/* <span>*{item.price}</span> */}
                            </div>
                           <div>${item.price *item.quantity}</div>
                      </div>
               </div>
            </div>
          ))}
             
              <div className='coupon'>
                  <div className='coupoheading'><h4>Apply coupon</h4></div>
                  <div>
                     <select value={coupon} onChange={handleCouponChange} id='couponselect'>
                        <option value="">Select Coupon</option>
                        <option value="MAIGAREEBHU">MAIGAREEBHU - 90% off</option>
                        <option value="COUPON1">COUPON1 - 50% off</option>
                        <option value="COUPON2">COUPON2 - 25% off</option>
                    </select>
                    <button id='couponbutton' onClick={handleApplyCoupon}>Apply Coupon</button>
                  </div>
               </div>
                   <BillDetailsCard
                   totalPrice={totalPrice}
                   discount={discount}
                   gstRate={12}
                   platformChargeRate={1} />
              <div id='paybutton'><button id='pbutton' onClick={handlePayment}>Go for Payment</button></div>
           </div>
      )}
    </div>
  )
}

export default Viewcard



// pk_test_51P4JeWSAwzKxKMw8hWaycDxQSYudcCNJ6o8pIQ7PFcDJrbybJa6pEvPM6xY9es1A7IzGHYobFUyJMngp4b2eyDPb00VX8REslu




// secretkey    sk_test_51P4JeWSAwzKxKMw8E8GEfSg9EqUqH7yHJQXvTVQ8mH1oqC7R5oGXNeR7fpSRxwBghc6s8xkEf3Xv4GLj5nXaT7CW00wAM8GzH5