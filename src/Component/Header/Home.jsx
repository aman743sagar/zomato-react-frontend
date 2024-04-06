import React  from 'react'
import Background2 from  './Background2.jpg'
import './Home.css'
import logo2 from './logo2.avif'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Card from './Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import Collections from './Collections';
import Cities from './Cities';
import Getz from './Getz';
import Explore from './Explore';
import { useEffect, useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import Fotter from './Fotter'





const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

       let data=   localStorage.getItem('userData')
       console.log(data,"dataaaaaaaa");
      let newData=  JSON.parse(data)
      console.log(newData,"newData");

      setData(newData)

  }, []);

     let remove=()=>{
      localStorage.clear('userData')
      setData(null)


     }
  return (
    <>
      <div className='parents'>
        <img  id ="img"  src={Background2} alt="" />
        <div className='Navbar'>
            <div className='navbar-left'>
                <span className='resto'> <Link to='/addrestro' id='restroo'> Add restro</Link></span>
                <span className='invers'><Link to='/view' id='restroo'>View food</Link></span>
            </div>
            <div className='navbar-right'>
              {
                data?(<> <span id='sa'>{data.userData.name}</span>
                <span onClick={remove} className='login8'>  <Link id='lg' > <LogoutIcon/> Logout</Link></span>
                </>
                ):
                (<>
                  <span className='login8'>  <Link id='as' to='/login'> <LoginIcon className='hjg'/>  Login</Link></span>
                  <span className='singin2'>  <Link id='as' to='/singup'> <HowToRegIcon/> Singup</Link></span>
                </>)
              }
            </div>
        </div>

        <div className='input'>
           <img  className='img' src={logo2} alt="not found" />
        </div>
        <div className='title'>
            <h1>Discover the best food & drinks in Bhopal</h1>
            <div className='inp'>
                <select  className='option'>
                    <option ><LocationOnIcon/>Bhopal</option>
                    <option >jhansi</option>
                    <option >Indor</option>
                    <option >Delhi</option>
                    <option >Lucknow</option>
                </select>
               <input  id="one" type="text" placeholder='Enter your city name' />
            </div>
        </div>
        </div>
        <Card/>
        <Collections/>
        <Cities/>
        <Getz/>
        <Explore/>
        <Fotter/>
    </>
  )
}

export default Home