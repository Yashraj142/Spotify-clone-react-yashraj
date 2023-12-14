import React from 'react'
import './Footer.css'

import { ReactComponent as Playicon } from '../assets/playicon.svg'
import { ReactComponent as Previcon } from '../assets/Previcon.svg'
import { ReactComponent as Nexticon } from '../assets/nexticon.svg'
import { ReactComponent as Pauseicon } from '../assets/pauseicon.svg'





export default function Footer() {

  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <div className='footer-container'>
      <div className='player-control'>
      <Previcon width = {'32px'}/>
      {
        isPlaying?
        <Pauseicon width={'32px'} onClick={() => setIsPlaying(false)}/>
        :
        <Playicon width={'32px'} onClick={() => setIsPlaying(true)}/>
      }   
      <Nexticon width = {'32px'}/>
      </div>
      </div>
  )
}
