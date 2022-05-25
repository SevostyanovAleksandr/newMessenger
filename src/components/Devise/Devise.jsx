import React from 'react'
import styles from "./Devise.module.scss"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
const Devise = () => {
    return(
    <div className={styles.wrapper}>
    <div className={styles.wrappertext}>
        < Flip top>
    <div className= {styles.zagolovok}>Отображение на всех устройствах</div></Flip>
    < Flip top>
    <div className= {styles.text}>Отображение вашего ресурса на всех современных девайсах – это не только важнейший фактор ранжирования в поисковых системах, это еще показатель серьёзности вашей компании, которая заботится о своих посетителях. О роли мобильного трафика говорить не стоит, каждый понимают всё возрастающую популярность мобильного интернета.</div>
    </Flip>
    <div className= {styles.wrapperbutton}>
    <Fade right big>
    <button className={styles.button}>Заказать сайт</button></Fade>
    </div>
    </div>
    <Zoom>
    <div className={styles.img}>
        <img className={styles.img1} src="https://avatars.mds.yandex.net/get-altay/4632172/2a0000017807b81c6916e880ea04405652b5/XXL"  width={350} height="300"/>
    </div></Zoom>
    </div>
    )
}

export default Devise