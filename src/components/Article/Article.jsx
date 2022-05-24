import React from 'react';
import styles from "./Article.module.scss"

const Article = () => {
    return (
           <div id="article" className={styles.wraper}>
           <div className={styles.wrapperArticle}>
            <div className={styles.text}>Нам доверяют такие проффессионалы как вы...</div>
            <h3 className={styles.zagolovok}>Создаю сайты как у веб-студий, по ценам фриланса</h3>
            <div className={styles.oneline}></div>
             <div className={styles.text}>Создание привлекательных и эффективных веб-сайтов, которые отражают ваш бренд, повышают кэофицент конверсии и значительно повышают ваш доход</div>
            <button className={styles.button}>Портфолио работ</button>
            </div>
            </div>
           
            
    );
};

export default Article;