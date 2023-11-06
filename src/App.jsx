import { useState } from 'react'
import quotes from './quotes.json'
import './index.css'

function App() {
  const [index, setIndex] = useState(0);

  const changeQuotes = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    while (newIndex === index);

    setIndex(newIndex);
  };


  return (
    <>
      <div className='main-container'>
        <p className='quote'>{quotes[index].quote}</p>
        <br />
        <hr className='line'></hr>
        <p className='signature'>{quotes[index].author}</p>
        <button className='btn' onClick={changeQuotes}></button>
      </div>
      
    </>
  )
}

export default App
