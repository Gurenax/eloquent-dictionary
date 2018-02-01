import React from 'react'

const Result = ({
  data
}) => (
  <div>
    <div>
      { // Syllables
        !!data && data.syllables.list.join('-')
      }
    </div>
    <div>
      {
        !!data && data.results.map( result => (
          <div>
            { result.partOfSpeech }<br/>
            { result.definition }<br/>
            { !!result.synonyms && result.synonyms.join(', ') }<br/>
            { !!result.similarTo && result.similarTo.join(', ') }<br/>
            { !!result.derivation && result.derivation.join(', ') }<br/>
            { !!result.examples && result.examples.join(', ') }<br/>
          <hr/>
          </div>
        ))
      }
    </div>
    
    <div><hr/>
      {JSON.stringify(data)}
    </div>
  </div>
)

export default Result