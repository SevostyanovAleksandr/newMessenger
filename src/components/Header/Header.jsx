import React from "react"
import styles from "./Header.module.scss"




const Header = () => {


  
  return <div id = "header" className={styles.header}>
           <div className= {styles.logo}>
         <img  className="1" src="https://cdn.svgporn.com/logos/nats.svg" alt="" height = "60px"  />
       </div>
       <div className= {styles.menuwrapper}>
           <div className="hrefname">
         <a className="hrefnamea" href="">Главная</a>
         </div>
         <div className="hrefname">
         <a href="#contentmy">Обо мне</a>
         </div>
         <div className="hrefname">
         <a href="#servise">Сервис</a>
         </div>
         <div className="hrefname">
         <a href="">Работы</a>
         </div>
         <div className="hrefname">
         <a href="">Цены</a>
         </div>
         <div className="hrefname">
         <a href="">Контакты</a>
         </div>
         <div className="hrefname">
         <a href="">Отзывы</a>
         </div>
       </div>
       <div className={styles.buttonwrapper}>
         <button className={styles.buttonlogin}>Связаться со мной</button>
       </div>
    </div>
     
}


export default Header