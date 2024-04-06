import React from 'react'
import './Explore.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Explore = () => {
  return (
    <div>
        <div className="Explore-container">
            <div className='aprents'>
                <div className='heading'>
                    <h1>Explore options near me</h1>
                </div>
                <div className='blocks'>
                <div className="fb1">
                    <span>Popular cuisines near me  <span id='arrows'><KeyboardArrowDownIcon/></span> </span>
                 </div>
                <div className="fb1">
                    <span>Popular restaurant types near me <span id='arrows' ><KeyboardArrowDownIcon/></span> </span>
                 </div>
                 <div className="fb1">
                    <span>Top Restaurant Chains  <span id='arrows' ><KeyboardArrowDownIcon/></span> </span>
                 </div>
                <div className="fb1">
                    <span>Cities We Deliver To  <span id='arrows' ><KeyboardArrowDownIcon/></span> </span>
                </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Explore