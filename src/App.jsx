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

function ChangeTheme(){
  const [index, setIndex] = useState(0);

  const changeTheme = () => {
    let newIndex;
    
  }
}




  return (
    <>


      <div className='main-container main-light' id='main-container'>
        <p className='quote quote-light' id='quote'>{quotes[index].quote}</p>
        <br />
        <hr className='line line-light' id='line'></hr>
        <p className='signature signature-light' id='signature'>{quotes[index].author}</p>
        <button className='btn btn-light' id='btn' onClick={changeQuotes}></button>
      </div>
      
    </>
  )
}

export default App
