import { useEffect, useState } from 'react'
import './App.css'
import { data } from './data'

function App() {

  const [word, setWord] = useState('')
  const [guesses, setGuesses] = useState([])

  useEffect(() => {
    const randomWord = data[Math.floor(Math.random() * data.length)]
    setWord(randomWord.toLowerCase())
  }, [])

  useEffect(() => {
    function handleOnClick(event) {
      setGuesses(oldArray => [...oldArray, event.key])

    }
    document.addEventListener('keydown', handleOnClick)
  }, [])



  function getRightLetters() {
    let letters = guesses
    letters = letters.filter((letter) => {
      return word.includes(letter)
    })
    return letters
  }

  function getWrongLetters() {
    let letters = guesses
    letters = letters.filter((letter) => {
      return !word.includes(letter)
    })
    return letters
  }


  return (
    <div className="App" >
      <section className='hangman'>

        {
          word.split('').map((letter) => {
            if (getRightLetters().includes(letter)) {
              return (<span >{letter} </span>)
            }
            return (<span>_</span>)
          })
        }
        <span>{getWrongLetters().length === 5 ? 'Lost' : ''}</span>
        <span>{getRightLetters().join('') === word ? 'Won' : ''}</span>
      </section>
    </div >
  )
}

export default App
