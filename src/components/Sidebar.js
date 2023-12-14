import React from 'react'
import './Sidebar.css'

import { ReactComponent as Homeicon } from '../assets/Homeicon.svg'
import { ReactComponent as Libraryicon } from '../assets/libraryicon.svg'
import { ReactComponent as Playicon } from '../assets/playicon.svg'
import { ReactComponent as Searchicon} from '../assets/searchicon.svg'

const myplayist = [
  {
    id:1,
    name:'ashish',
  },
  {
    id:2,
    name:'yashraj',

  },
  {
    id:3,
    name:'Kripa',

  },
  {
    id:4,
    name:'harsh',

  },
  {
    id:5,
    name:'jenson',

  }


]

export default function Sidebar() {
  return (
    <div className='side-bar-container'>
      <div className='side-bar-item'>
        <Homeicon width = {'18px'} strokewidth = {'2px'} ></Homeicon> Home
      </div>
      <div className='side-bar-item'>
        <Searchicon width = {'18px'} strokewidth = {'2px'} ></Searchicon> search
      </div>
      <div className='side-bar-item'>
      <Libraryicon width = {'18px'} strokewidth = {'2px'} ></Libraryicon> Your Library
      </div>

      <div className='side-options'>{
        myplayist.map((item) => {
          return(
            <div className='side-bar-item' key = 'item.id'>
              {item.name}
            </div>
          )
        })
      }

      </div>
      
    </div>
  )
}


