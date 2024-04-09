import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Viewfood.css'
import { useNavigate, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Viewfood = () => {
  const navigate=useNavigate();
  const {restroId}=useParams()
  const [restaurant, setRestaurant] = useState({});
  const [product,Setproduct]=useState([]);
  const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

   useEffect(()=>{
    async function showProduct(){
      const restaurantResponse = await axios.get(`http://localhost:7000/api/restro/${restroId}`);
      console.log(restaurantResponse.data,"rrrr");
          setRestaurant(restaurantResponse.data);

          const productResponse = await axios.get('http://localhost:7000/api/proud');
          // const productResponse = await axios.get('http://localhost:4000/api/product');
        const filteredProducts = productResponse.data.filter(p => p.restaurant === restroId);
          console.log(productResponse.data,"resss");

          Setproduct(filteredProducts);
    }
    showProduct()

   },[])
  const addProduct = () => {
    navigate(`/view/${restroId}/addproduct`);
  };
  const viewcart =()=>{
    navigate(`/view/${restroId}/viewcart`)
  }


  return (
   <div id='parent' className='grandparents'>
      <div className='maincontaine'>
        <div className='imgelogo'><img src={zomatologo} alt="" /></div>
            <div className='immageserachbox'>
              <LocationOnIcon id='locationicon'/>
                <select  className='option34'>
                    <option >Bhopal</option>
                    <option >jhansi</option>
                    <option >Indor</option>
                    <option >Delhi</option>
                    <option >Lucknow</option>
                </select>
                <MoreVertIcon id='lineicon'/>
               <SearchIcon id='searchicon'/>  <input    id='fieldss' name='data'  type="text" placeholder="Search"/>
             </div>
             <div className='lohin'>Login</div>
             <div className='singhin'>Singin</div>
      </div>
         <div className='button_cart'>
            <div id='vbutton'> <button onClick={addProduct}> Add product</button></div>
            <div id='vbutton' > <button onClick={viewcart}>View cart</button></div>
         </div>
            <div className='resturant-product-conatiner'>
                 <div className='resturantconatinerd'>
                    <div><h2 id='rheading'> Restaurant Name:- {restaurant.name}</h2></div>
                   <div><img id='restroImaged' src={restaurant.image} alt='Restaurant' /></div>
               </div>
            <div className='product-card-conatiner'>{
            product.map((res)=>{
              return(

               <div className='product-card'>
                <div><img id='prodimage' src={res.image} alt="" /></div>
                <div> <h3 id='pname'>{res.name}</h3></div>
                <div><h5 id='pdescriptions'>{res.descriptions}</h5></div>
                <div> <h5 id='pprice'>$ {res.price}</h5></div>
                <div><button id='addplusminis'>Add</button></div>

               </div>
)})}
 </div>
  </div>
 </div>
  )
}

export default Viewfood