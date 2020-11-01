import React, { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Playlists from '../components/Playlists'
import Alegria from '../assets/images/Alegria.png'
import Motivacao from '../assets/images/Motivacao.png'
import Diversao from '../assets/images/Diversao.png'
import Sextou from '../assets/images/Sextou.png'
import PositividadeIcon from '../assets/images/PositividadeIcon.png'
import { AUTHENTICATION_LINK } from '../services/spotify'
import { useLocation } from 'react-router-dom'

function App() {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()
  const [token, setToken] = useState(query.get('token'))

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
    </div>
  )
}

export default App
