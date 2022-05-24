import React from 'react'
import styles from "./Сontentmy.module.scss"
import LightSpeed from 'react-reveal/LightSpeed';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';



const Сontentmy = () => {
  return (<div id="contentmy" className={styles.wrappercontent}>
      <Bounce left>
      <div className={styles.TextDeveloper}>Разрабатываем сайты более 10 лет</div>
      </Bounce>
      <LightSpeed>
            <div className={styles.wrappercontenttext}>
                <div className={styles.contentleft}>Ваш сайт является первым контактным лицом для вашей организации. Ваш сайт должен вызывать у ваших клиентов уверенность в том, что они покупают качественный продукт или услугу. Я разрабатываю, кодирую и продаю десятки сайтов в год. Это дает мне уникальный взгляд на внутреннюю работу и стратегии многих компаний. Я вижу, что работает, а что нет. Я применю этот опыт в вашей организации, чтобы дать вам конкурентное преимущество.</div>
                <div className={styles.contentright}>Я знаю, что красота в глазах смотрящего, поэтому я, как частный вебмастер по созданию сайтов, работаю с вами, чтобы создать продукт, который будет одновременно полностью функциональным и визуально привлекательным, как для вас, так и для вашей целевой аудитории.</div>
            </div>
            </LightSpeed>
            <Reveal>
            <div className={styles.wrappercontenttextlogo} >
               <div className={styles.wrappercontentimg}>
               <div className= {styles.logo}>
                 <img src="https://cdn-icons-png.flaticon.com/512/2857/2857527.png" alt="" height = "40px"  width="40px"/>
               </div>
                 <h3 className={styles.zagolovoklogo}>Cтратегия</h3>
                 <dir className = {styles.logotext}> Я беседую с вами лично, чтобы лучше понять ваш продукт и текущие проблемы. Это помогает мне начать сотрудничество и определить следующие шаги.</dir>
                 </div>
                 <div className={styles.wrappercontentimg}>
                 <div className= {styles.logo}>
                 <img src="https://cdn-icons-png.flaticon.com/512/3141/3141181.png" alt="" height = "40px"  width="40px" padding-left="" />
               </div>
                 <h3 className={styles.zagolovoklogo}>Маркетинг</h3>
                 <dir className = {styles.logotext}>Получая ценную информацию от клиентов, я помогаю компаниям находить жизнеспособные возможности для бизнеса.</dir>
                 </div>
                 <div className={styles.wrappercontentimg}>
                 <div className= {styles.logo}>
                 <img src="https://cdn-icons-png.flaticon.com/512/2171/2171148.png" alt="" height = "40px"  width="40px"/>
               </div>
                 <h3 className={styles.zagolovoklogo}>Технологии</h3>
                 <dir className = {styles.logotext}>Создаю прототипы и тестирую каждый вариант, чтобы найти наилучший возможный дизайн, понятный вашим пользователям.</dir>
            </div>
            </div>
            </Reveal>
            <Fade>
            <div className={styles.wrappercontenttextlogo} >
               <div className={styles.wrappercontentimg}>
               <div className= {styles.logo}>
                 <img src="https://cdn-icons.flaticon.com/png/512/3463/premium/3463107.png?token=exp=1653327199~hmac=bff06d916fe1f107c3af0f5e16a6100c" alt="" height = "40px"  width="40px"/>
               </div>
                 <h3 className={styles.zagolovoklogo}>eCommerce</h3>
                 <dir className = {styles.logotext}> Правильное сочетание методологий веб-разработки и высококонкурентных маркетинговых стратегий.</dir>
                 </div>
                 <div className={styles.wrappercontentimg}>
                 <div className= {styles.logo}>
                 <img src="https://cdn-icons.flaticon.com/png/512/3270/premium/3270970.png?token=exp=1653327306~hmac=c45343e07582a7d3ad5676344a992db1" alt="" height = "40px"  width="40px" padding-left="" />
               </div>
                 <h3 className={styles.zagolovoklogo}>Курирование</h3>
                 <dir className = {styles.logotext}>Все рутинные технические работы по вашему ресурсу, хостингу, домену - я беру на себя.</dir>
                 </div>
                 <div className={styles.wrappercontentimg}>
                 <div className= {styles.logo}>
                 <img src="https://cdn-icons-png.flaticon.com/512/3579/3579142.png" alt="" height = "40px"  width="40px"/>
               </div>
                 <h3 className={styles.zagolovoklogo}>SEO</h3>
                 <dir className = {styles.logotext}>Мы создаем веб-сайты, которые улучшают алгоритмы, чтобы вы могли привлекать ценный поисковый трафик.</dir>
            </div>
            </div>
            </Fade>

        </div>
  )
}

export default Сontentmy