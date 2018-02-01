import api from './init'

const fetchWord = async word => {
  return await api.get(`/words/${word}`)
}

export default fetchWord