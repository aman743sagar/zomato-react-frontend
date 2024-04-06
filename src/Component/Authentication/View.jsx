import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './View.css'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const View = () => {

    let navigate=  useNavigate()
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
    const [data, SetData] = useState('');
    const [search, SetSearch] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:7000/api/restro');
            console.log(response.data,"resss");

            SetSearch(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);

      const handleChange = (e) => {
        SetData(e.target.value);
      };
    
      const handleSubmit = () => {
        let NewA = search.filter((str) => {
          return str.text === data;
        });
        SetSearch(NewA);
      };
      // show food
      const showFood=(id)=>{
        navigate(`/view/${id}/product`)
        // console.log(id,"idddddd");
    
      }
  return (
    <div className='mainview'>
      <div className='maincontaines'>
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
               <SearchIcon id='searchicon'/>  <input onChange={handleChange}   id='fieldss' name='data' value={data} type="text" placeholder="Search"/>
             </div>
             <div className='lohin'>Login</div>
             <div className='singhin'>Singin</div>
      </div>
      <section className='containergh'>
       <div className='heaadingsd'> <h2> Best Trending dining restaurants in Panchsheel Nagar, Bhopal </h2> </div>
        <div className='maincardconatiner'>
           {search.map((res, index) => (
           <div onClick={ ()=> showFood(res._id)}   key={index} className="maintre" >
              <div className='card-imagew'> <img src={res.image} className="card-img-top" alt="Restaurant" /> </div>
               <div className="card-body">
                    <div className="list-group-item"><h4>{res.name}</h4></div>
                    <div className="list-group-item"><h5>{res.address}</h5> </div>
                    <div className="list-group-item"><h6>{res.descriptions}</h6></div>
             </div>
        </div>
 ))}
       </div>
      </section>
    </div>
  )
}

export default View