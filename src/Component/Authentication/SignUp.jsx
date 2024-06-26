import React ,{useState} from 'react'
import './Signup.css'
import axios from 'axios'
import PersonIcon from '@mui/icons-material/Person';
import{Route,Routes,useNavigate} from 'react-router-dom'


const SignUp = () => {
  let navigate=useNavigate()
  const [formData, SetFormdata]=useState({
     name:'',
     email:'',
     passWord:''
  });
  const handleChange=(e)=>{
    SetFormdata({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
      let res=await axios.post('http://localhost:7000/api/users',formData)
      console.log(res)
     };

  return (
    <div className='body'>

        <div className="login">
        <div className="logo">
        </div>
        <div className="title1">Singup</div>
        <div className="subtitle">We serve you the best food</div>
        <div className="fields">
                  <div className='Name'><PersonIcon/><input   type="text" className='userName'   name='name' placeholder='Enter your name'  value={formData.name}  onChange={handleChange}/></div>
                <div className="username"><svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                </svg>
                 <input type="email" className="user-input"    placeholder='Enter your email'  name='email'  value={formData.email}  onChange={handleChange}/></div>

                 <div className="password"><svg className="svg-icon" viewBox="0 0 20 20">
                 <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,
                 0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,
                 5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,
                 0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-
                 0.664-0.663c0-0.366,0.298-0.665,0.664-
                 0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
                </svg>
                 <input type="password" className="passinput" placeholder=' Password'  name='passWord'    value={formData.passWord} onChange={handleChange} /></div>
        </div>
        <button  onClick={handleSubmit} className="singin">Singup</button>
     </div>

    </div>
  )
}

export default SignUp