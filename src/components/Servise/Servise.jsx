import React from 'react';
import styles from "./Servise.module.scss"

const Article = () => {
    return (<div className={styles.wrapermain}>
           <div className={styles.wraper}>
           <div className={styles.wrapperArticle}>
            <h3 className={styles.zagolovok}>Я предлагаю услуги, основанные на огромном опыте</h3>
             <div className={styles.text}>С гордостью могу сказать, что за последние несколько лет работы частным вебмастером я делал сайты в таких категориях, как финансовые и юридические услуги, розничная торговля, потребительские товары, технологии и др. Это помогло мне развить мышление и видение, чтобы помочь своим клиентам в разработке качественного продукта.</div>
            <button className={styles.button}>Заказать сайт</button>
            </div>
            </div>
            <div className={styles.wraperimg}>
                <div className={styles.img}>
                    <img src="https://s.tmimgcdn.com/scr/56700/56721-original.jpg" alt=""  width="200px" height="300px"/>
                </div>
                <div className={styles.img}>
                    <img src="https://s.tmimgcdn.com/scr/35500/35506_01_home_original.jpg" alt=""width="200px" height="300px" />
                </div>
            </div>
            </div>
    );
};

export default Article;