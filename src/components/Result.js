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
    </div>
    <div>
      {JSON.stringify(data)}
    </div>
  </div>
)

export default Result