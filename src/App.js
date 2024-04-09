import logo from './logo.svg';
import './App.css';
import Home from './Component/Header/Home';
import Login2 from './Component/Authentication/Login2'
import SignUp from './Component/Authentication/SignUp'
import Addrestro from './Component/Authentication/Addrestro'
import View from './Component/Authentication/View';
import  {Routes,Route} from 'react-router-dom'
import Viewfood from './Component/Authentication/Viewfood';
import Addproduct from './Component/Authentication/Addproduct';
import Viewcard from './Component/Authentication/Viewcard';


function App() {
  return (
    <div >

      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login2/>}/>
       <Route path='/singUp' element={<SignUp/>}/>
       <Route path='/addrestro' element={<Addrestro/>}/>
       <Route path='/view' element={<View/>}/>
       <Route path='/view/:restroId/product' element={<Viewfood/>}/>
       <Route path='/view/:restroId/addproduct' element={<Addproduct/>}/>
       <Route path='/view/:restroId/viewcart' element={<Viewcard/>}/>
      
      
       </Routes>
    </div>
  );
}

export default App;
