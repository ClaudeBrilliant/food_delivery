
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  // eslint-disable-next-line no-unused-vars
  const[cartItems,setCartItems]= useState({});

  // const addToCart =(itemId) => {
  //    if(!cartItems[itemid]) {
  //     setCartItems((prev)=> ({...prev,[itemId]:1}))
  //    }
  //    else{
  //     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  //    }
  // }

  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
  // }

  useEffect(()=>{
      console.log({cartItems})
  })

  const contextValue = {
    food_list,
    // cartItems,
    // setCartItems,
    // addToCart,
    // removeFromCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default StoreContextProvider;
