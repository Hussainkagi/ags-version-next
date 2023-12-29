import React from 'react'
import './Home.scss';
import Products from '../Products/page';
const Home = () => {
  return (
   <>
   <div>
        
        <div className="main-content">
            <div className="layout">
        <Products Title={"Products"}/>
            </div>
        </div>
    </div>
   </>
  )
}

export default Home;
