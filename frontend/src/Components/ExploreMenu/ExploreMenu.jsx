// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


// eslint-disable-next-line react/prop-types, no-unused-vars
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
     <h1>Explore pour menu</h1>
    <p className='explore-menu-text'>Discover a world of culinary delights with our extensive menu featuring a diverse selection of dishes crafted with passion and expertise.</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index) => {
            return(
                <div onClick={() => setCategory (prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                  <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""></img>
                  <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
     <hr/>
    </div>
  )
}

export default ExploreMenu