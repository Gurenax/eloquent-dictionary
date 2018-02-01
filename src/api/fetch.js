/*
* Set base url
*/
const baseUrl = 'https://jsonplaceholder.typicode.com'

/*
* Fetch an api url
*/
const fetchUrl = async url => {
  // Set url to baseUrl + url (e.g. https://jsonplaceholder.typicode.com + /posts/1)
  const response = await fetch(baseUrl + slashUrl(url))
  // Ensure that the content type is JSON
  const contentType = response.headers.get('content-type')
  if (contentType && contentType.includes('application/json')) {
    return await response.json()
  }
  throw new TypeError('Expected a JSON object')
}

/*
* Ensure that the endpoint starts with a slash
*/
const slashUrl = url => {
  return !url.startsWith('/') ? '/' + url : url
}

export default fetchUrl
