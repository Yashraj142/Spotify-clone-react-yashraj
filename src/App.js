
import './App.css';
import Title from './components/Title'
import Sidebar from './components/Sidebar'
import PlayerPlaylist from './components/PlayerPlaylist'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Title></Title>
    <div className='player-container'>
      <div className='side-bar'>
        <Sidebar></Sidebar> 
      </div>
      <div className='player-playlist'>
        <PlayerPlaylist></PlayerPlaylist>
      </div>
    </div>
    <div className='footer'>
      <Footer></Footer>
    </div>   
    
    
    </>
  );
}

export default App;
