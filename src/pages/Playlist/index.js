import React, { useEffect, useState } from 'react'
import './App.css'
import Track from '../../components/Track'
import { useCookies } from 'react-cookie'
import { getDancePlaylist } from '../../services/spotify'

function App() {
  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])
  const [tracks, setTracks] = useState([])

  let query = useQuery()
  const code = query.get('code')

  useEffect(async () => {
    try {
      setTracks(getDancePlaylist(cookies.user_id))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return <div className="App"></div>
}

export default App
