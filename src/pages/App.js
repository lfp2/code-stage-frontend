import React, { useEffect, useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Playlists from '../components/Playlists'
import Alegria from '../assets/images/Alegria.png'
import Motivacao from '../assets/images/Motivacao.png'
import Diversao from '../assets/images/Diversao.png'
import Sextou from '../assets/images/Sextou.png'
import PositividadeIcon from '../assets/images/PositividadeIcon.png'
import { getAccessToken } from '../services/spotify'
import { useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function App() {
  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()
  const code = query.get('code')

  useEffect(async () => {
    if (!cookies.access_token) {
      try {
        const response = await getAccessToken(code)
        setCookie('access_token', response.data.access_token, {
          path: '/',
          secure: true,
        })
        setCookie('refresh_token', response.data.refresh_token, {
          path: '/',
          secure: true,
        })
        setCookie('user_id', response.data.user_id, {
          path: '/',
          secure: true,
        })
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

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
