import React from 'react'
import ReactPlayer from "react-player"
import styles from "./Video.module.scss"


const Video = () => {
  return (
    <div className={styles.playerwrapper}>
        <ReactPlayer
          className={styles.reactplayer}
          url='https://www.youtube.com/watch?v=wDkztLMNK9k'
        />
      </div>

  )
}

export default Video