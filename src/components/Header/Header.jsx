import React from "react"
import { menu } from "./menu"
import styles from "./Header.module.scss"


const Header = () => {
  return <div className={styles.header}>
           <div className= {styles.logo}>
         <img src="https://cdn.svgporn.com/logos/nats.svg" alt="" height = "60px"  />
       </div>
       <div className= {styles.menuwrapper}>
         <ul className= {styles.menu}>
           {menu.map((item, idx) =>(
         <li key={`menu-item ${idx}`}>
           <a href={item.link}>{item.title}</a>
         </li>
         ))} 
         </ul>

       </div>
       <div className={styles.buttonwrapper}>
         <button className={styles.buttonlogin}>Связаться со мной</button>
       </div>
    </div>
    
    
  
}

export default Header