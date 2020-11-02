import axios from 'axios'

const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientId = process.env.REACT_APP_CLIENT_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET
const redirectUri = 'http://mooday.netlify.app/playlists'
const scopes = 'user-read-private user-read-email user-top-read'
export const AUTHENTICATION_LINK =
  authEndpoint +
  '?response_type=code' +
  '&client_id=' +
  clientId +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' +
  encodeURIComponent(redirectUri)

export const getAccessToken = async (code) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/callback?code=${code}`
    )
    return response
  } catch {
    error(console.log(error))
  }
}

export const getDancePlaylist = async (user_id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/callback?user_id=${user_id}`
    )
    return response
  } catch {
    error(console.log(error))
  }
}
