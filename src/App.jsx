import { useEffect, useState } from 'react'
import './App.css'
import Result from './components.jsx/Result'
import { data } from './data'

function App() {
  const randomWord = (data[Math.floor(Math.random() * data.length)]).toLowerCase()


  const [word, setWord] = useState(randomWord)
  const [guesses, setGuesses] = useState([])
  const englishLetters = 'abcdefghijklmnopqrstuvwxyz'
  useEffect(() => {
    function handleOnClick(event) {

      if (englishLetters.includes(event.key)) {
        setGuesses(oldArray => [...oldArray, event.key])
      }

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
  function reset() {
    setGuesses([])
    setWord(randomWord)
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
        <Result getWrongLetters={getWrongLetters} getRightLetters={getRightLetters} reset={reset} word={word} />
      </section>
    </div >
  )
}

export default App
