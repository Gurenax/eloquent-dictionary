import fetchUrl from '../api/fetch'

/*
* Globals
*/
let url

beforeAll(() => {
  // Set the url
  url = '/posts/1'
})

describe('Fetch a url', () => {
  test('It should return a JSON object', async () => {
    const response = await fetchUrl(url)
    expect(typeof response).toEqual('object')
  })

  test('It should have at least one object key', async () => {
    const response = await fetchUrl(url)
    expect(Object.keys(response).length).toBeGreaterThan(0)
  })
})