import axios from 'axios'

// Setup axios to support Jest test environemnt (i.e. bypass Network Error issues)
const path=require('path');
const lib=path.join(path.dirname(require.resolve('axios')),'lib/adapters/http');
const http=require(lib);
const api = axios.create({
  baseURL: process.env.REACT_APP_WORDS_API_URL,
  adapter: http,
  headers: {
    'X-Mashape-Key': process.env.REACT_APP_WORDS_API_KEY,
    'X-Mashape-Host': process.env.REACT_APP_WORDS_API_HOST
  }
})

/*
* Globals
*/
let url

beforeAll(() => {
  // Set the url
  url = '/words/eloquent'
})

describe('Fetch a url', () => {
  test('It should return an OK response', async () => {
    try {
    const response = await api.get(url)
    expect(response.status).toEqual(200)
    }
    catch(error) {console.error(error)}
  })

  test('It should return a JSON object', async () => {
    const response = await api.get(url)
    expect(typeof response.data).toEqual('object')
  })

  test('It should have at least one object key', async () => {
    const response = await api.get(url)
    expect(Object.keys(response.data).length).toBeGreaterThan(0)
  })
})