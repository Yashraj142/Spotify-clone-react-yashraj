import React from 'react'
import './PlayerPlaylist.css'

const playlist = [
  {
    id:1,
    name:"sugar",
    Artist:"Maroon 5",
    Album:"V",
    Duration:"3:14",
  },

  {
    id:2,
    name:"unholy",
    Artist:"Sam Patras",
    Album:"Gloria",
    Duration:"1:56",

  },
  {
    id:3,
    name:"Fade to black",
    Artist:"Metallica",
    Album:"Ride the Lighting",
    Duration:"6:05",
  },
  {
    id:4,
    name:"Dil Se Re",
    Artist:"A R Rahman",
    Album:"Dil Se",
    Duration:"5:04",
  },
  {
    id:5,
    name:"Lagja Gale",
    Artist:"Lata Mangeshkar",
    Album:"Lagja gale",
    Duration:"5:02",
  },
  {
    id:6,
    name:"Believer",
    Artist:"Imagin Dragons",
    Album:"Evolve",
    Duration:"3:37",
  },
  {
    id:7,
    name:"I am a Rider",
    Artist:"Satisfya",
    Album:"Now you see me to",
    Duration:"3:04",
  },
  {
    id:8,
    name:"Har Ghadi",
    Artist:"Sonu Nigam",
    Album:"Kal ho na ho",
    Duration:"6:43",
  },
  {
    id:9,
    name:"Arjun Vailly",
    Artist:"Bhupindar Baddal",
    Album:"Animal",
    Duration:"4:18",
  },
  {
    id:10,
    name:"Saari Duniya Jalaa Denge",
    Artist:"B Praak",
    Album:"Animal",
    Duration:"4:54",
  }

]



export default function PlayerPlaylist() {
  return (
    <div className='player-playlist-container'>
      <div className='player-playlist-header'>
        <div className='playlist-card'>

        </div>
        <div className='playlist-body'>
          <p>Playlist</p>
          <h1>Best of Mine</h1>
        </div>

      </div>

      <div className='playlist-list'>
        <div className='playlist-list-id'>No.</div>
        <div className='playlist-list-name'>Title</div>
        <div className='playlist-list-artist'>Artist</div>
        <div className='playlist-list-album'>Album</div>
        <div className='playlist-list-duration'>Duration</div>
      </div>

      <div className='playlist-list-container'>
        {
          playlist.map( item => {
            return (
              <div className='playlist-list'>
        <div className='playlist-list-id'>{item.id}</div>
        <div className='playlist-list-name'>{item.name}</div>
        <div className='playlist-list-artist'>{item.Artist}</div>
        <div className='playlist-list-album'>{item.Album}</div>
        <div className='playlist-list-duration'>{item.Duration}</div>
      </div>
          )
          })
        }
      </div>
    </div>
  )
}
