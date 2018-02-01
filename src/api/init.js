import axios from 'axios'

// Initialise base url
const api = axios.create({
  baseURL: process.env.REACT_APP_WORDS_API_URL,
  headers: {
    'X-Mashape-Key': process.env.REACT_APP_WORDS_API_KEY,
    'X-Mashape-Host': process.env.REACT_APP_WORDS_API_HOST
  }
})

export default api