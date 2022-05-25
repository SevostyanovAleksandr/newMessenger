import React from 'react';
import styles from "./Servise.module.scss"
import { Fade } from 'react-reveal';
import { Zoom } from 'react-reveal';
import { Flip } from 'react-reveal';


const Article = () => {
    return (<div id="servise" className={styles.wrapermain}>
           <div className={styles.wraper}>
           <div className={styles.wrapperArticle}>
               <Flip top>
            <h3 className={styles.zagolovok}>Я предлагаю услуги, основанные на огромном опыте</h3></Flip>
            <Flip top>
             <div className={styles.text}>С гордостью могу сказать, что за последние несколько лет работы частным вебмастером я делал сайты в таких категориях, как финансовые и юридические услуги, розничная торговля, потребительские товары, технологии и др. Это помогло мне развить мышление и видение, чтобы помочь своим клиентам в разработке качественного продукта.</div>
             </Flip>
             <Fade right big>
            <button className={styles.button}>Заказать сайт</button>
            </Fade>
            </div>
            </div>
            <Zoom>
            <div className={styles.wraperimg}>
                <div className={styles.img}>
                    <img src="https://s.tmimgcdn.com/scr/56700/56721-original.jpg" alt=""  width="200px" height="300px"/>
                </div>
                <div className={styles.img}>
                    <img src="https://s.tmimgcdn.com/scr/35500/35506_01_home_original.jpg" alt=""width="200px" height="300px" />
                </div>
            </div>
            </Zoom>
        
            </div>
              
    );
};

export default Article;