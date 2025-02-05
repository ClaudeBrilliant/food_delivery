/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

// eslint-disable-next-line no-unused-vars
const FoodItem = ({id,name,price,description,image}) => {

   const [itemCount,setItemCount] = useState(0)

    return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt=''></img>
           {
            !itemCount
            ? <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=''></img>
            : <div className="food-item-counter">
                  <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt=''></img>
                  <p>{itemCount}</p>
                  <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt=''></img>
             </div>
           }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''></img>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem