import React from 'react';
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
         <h1 className="menuTittle">Our Menu</h1>
         <div className="menuList"> 
          {MenuList.map((menuItem,key)=> {
              return <MenuItem  
              key={key}  //Special String attribute
              image={menuItem.image} 
              name={menuItem.name}
              price={menuItem.price}/>
         }
         )}
         </div>
        </div>
  )
}

export default Menu;