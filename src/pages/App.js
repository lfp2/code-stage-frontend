import React from 'react'
import './App.css'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Playlists from '../components/Playlists'
import Alegria from '../assets/images/Alegria.png'
import Motivacao from '../assets/images/Motivacao.png'
import Diversao from '../assets/images/Diversao.png'
import Sextou from '../assets/images/Sextou.png'
import PositividadeIcon from '../assets/images/PositividadeIcon.png'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu actualPage="Moods" />
      <Playlists
        title="Positividade"
        titleImage={PositividadeIcon}
        playlistsImages={[Alegria, Motivacao, Diversao, Sextou]}
        playlistsTitle={['Alegria', 'Motivação', 'Diversão', 'Sextou']}
      />
      <Playlists
        title="Positividade"
        titleImage={PositividadeIcon}
        playlistsImages={[Alegria, Motivacao, Diversao, Sextou]}
        playlistsTitle={['Alegria', 'Motivação', 'Diversão', 'Sextou']}
      />
      <Playlists
        title="Positividade"
        titleImage={PositividadeIcon}
        playlistsImages={[Alegria, Motivacao, Diversao, Sextou]}
        playlistsTitle={['Alegria', 'Motivação', 'Diversão', 'Sextou']}
      />
      <Playlists
        title="Positividade"
        titleImage={PositividadeIcon}
        playlistsImages={[Alegria, Motivacao, Diversao, Sextou]}
        playlistsTitle={['Alegria', 'Motivação', 'Diversão', 'Sextou']}
      />
      <div height={'30px'}></div>
    </div>
  )
}

export default App
