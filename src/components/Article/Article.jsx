import React from 'react';
import styles from "./Articlemodule.scss"

const Article = () => {
    return (
           <div className={styles.wraper}>
           <div className={styles.wrapperArticle}>
            <div className={styles.text}>На этой странице будет храниться какаяя нибудь информация</div>
            <h3 className={styles.zagolovok}>Здесь храниться самая интересная статья</h3>
            <div className={styles.text} >Рассках о том как я изучал реакт нативный</div>
            <button className={styles.button}>Нжми на меня</button>
            </div>
            <div className={styles.fotostakan}>
                <img  src="https://cdn.pixabay.com/photo/2017/02/01/19/54/beverage-2031238__480.png" alt="" />
            </div>
            </div>
            
    );
};

export default Article;