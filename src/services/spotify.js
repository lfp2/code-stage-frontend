const authEndpoint = 'https://accounts.spotify.com/authorize?'
const clientId = process.env.REACT_APP_CLIENT_ID
const redirectUri = 'http://localhost:3000/playlists'
const scopes = [
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-top-read',
]
export const AUTHENTICATION_LINK = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=code&show_dialog=true`
