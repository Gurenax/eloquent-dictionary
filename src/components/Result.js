import React from 'react'

const Result = ({ word, data, error }) => (
  <div className="container mt-3">
    {!error ? (
      !!data ? (
        <div>
          {!!data.syllables && (
            <h2>
              {// Syllables
              data.syllables.list.join('-')}
            </h2>
          )}
          {!!data.pronunciation &&
            !!data.pronunciation.all && (
              <p className="font-italic pronunciation">
                {// Pronunciation
                '\\' + data.pronunciation.all + '\\'}
              </p>
            )}
          <div>
            {!!data.results ? (
              data.results.map(result => (
                <div>
                  <p className="font-italic partOfSpeech">
                    {result.partOfSpeech}
                  </p>
                  <p>{': ' + result.definition}</p>
                  {!!result.synonyms && (
                    <p>
                      <strong>synonyms</strong>
                      <p>{result.synonyms.join(', ')}</p>
                    </p>
                  )}
                  {!!result.similarTo && (
                    <p>
                      <strong>similar to</strong>
                      <p>{result.similarTo.join(', ')}</p>
                    </p>
                  )}
                  {!!result.examples && (
                    <p>
                      <strong>examples</strong>
                      <p>{result.examples.join(', ')}</p>
                    </p>
                  )}
                  <hr />
                </div>
              ))
            ) : (
              <em>
                <br />The definition for <em>{data.word}</em> is not available
                at this time
              </em>
            )}
          </div>
        </div>
      ) : !!word ? (
        <h4 className="responsiveHello">
          <br />You are typing...<br />
          Press the <strong>Enter</strong> key
          <br />when you are done
        </h4>
      ) : (
        <h4 className="responsiveHello">
          <br />Hello, this is the<br />
          <em>Eloquent Dictionary</em>.<br />Begin by searching a{' '}
          <strong>word</strong>
        </h4>
      )
    ) : (
      <em>
        <br />Unfortunately, the word you are searching for cannot be found in
        this dictionary
      </em>
    )}
  </div>
)

export default Result
