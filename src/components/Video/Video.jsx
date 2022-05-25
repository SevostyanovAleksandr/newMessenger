import React from 'react'
import ReactPlayer from "react-player"
import styles from "./Video.module.scss"
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


const Video = () => {
  return ( 
  <div>
    <Zoom top>
  <div className={styles.zagolovok}>ОТЗЫВЫ ГОВОРЯТ САМИ ЗА СЕБЯ...</div>
  </Zoom>
  <Zoom botton>
  <div className={styles.tittle}>Нам доверяют такие проффессионалы как вы...</div>
  </Zoom>
  <div className={styles.playerwrapper}>
    <Slide Right>
    <div className={styles.player}>
        <ReactPlayer width="90%" height="100%"
          className={styles.reactplayer}
          url='https://www.youtube.com/watch?v=wDkztLMNK9k'/>
      </div>
      <div className={styles.player}>
      <ReactPlayer width="90%" height="100%"
        className={styles.reactplayer}
        url='https://www.youtube.com/watch?v=wDkztLMNK9k'/>
    </div>
    <div className={styles.player}>
    <ReactPlayer width="90%" height="100%"
      className={styles.reactplayer}
      url='https://www.youtube.com/watch?v=wDkztLMNK9k'/>
  </div>
  </Slide>
  <Slide light>
  <div className={styles.player}>
    <ReactPlayer width="90%" height="100%"
      className={styles.reactplayer}
      url='https://www.youtube.com/watch?v=wDkztLMNK9k'/>
  </div>
  <div className={styles.player}>
    <ReactPlayer  width="90%" height="100%"
      className={styles.reactplayer}
      url='https://www.youtube.com/watch?v=wDkztLMNK9k'/>
  </div>
  <div className={styles.player}>
    <ReactPlayer width="90%" height="100%"
      className={styles.reactplayer}
      url='https://www.youtube.com/watch?v=wDkztLMNK9k'/>
  </div>
  </Slide>
  <Slide right>
  <div className={styles.player}>
    <ReactPlayer width="90%" height="100%"
      className={styles.reactplayer}
      url='https://www.youtube.com/watch?v=wDkztLMNK9k'/>
  </div>
  <div className={styles.player}>
    <ReactPlayer width="90%" height="100%"
      className={styles.reactplayer}
      url='https://www.youtube.com/watch?v=wDkztLMNK9k'/>
  </div>
  <div className={styles.player}>
    <ReactPlayer width="90%" height="100%"
      className={styles.reactplayer}
      url='https://www.youtube.com/watch?v=wDkztLMNK9k'/>
  </div>
  </Slide>
  </div>
  </div>

      
  )
}

export default Video