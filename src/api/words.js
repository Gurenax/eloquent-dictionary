import api from './init'

/*
* Fetch word definition from Words API
*/
const fetchWord = async word => {
  return await api.get(`/words/${word}`)
}

export default fetchWord