import './App.css';
import { useEffect, useState } from 'react';
import CatComponent from './CatComponent';

function App() {
  const [cat, setCat] = useState([]);
  const [advice, setAdvice] = useState('');
  const [submitted, setSubmitted] = useState();

  useEffect(() => {
    getCat();
    getAdvice();
  }, [submitted] );


  const getCat = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    setCat(data[0].url);
  }

  const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);
  }

  const showKittie = () => {
    const newReflection = document.querySelector('.kitty');
    const rules = document.querySelector('.App-par');
    const adviceParagraph = document.querySelector('.App-advice');

    newReflection.style.zIndex = '1';
    adviceParagraph.style.display = 'block';
    rules.style.display ='none';

    setSubmitted(cat, advice);
  }
  
  return (
    <div className="App">
      <div className='App-container'>
        <CatComponent catImage={cat} advice={advice} />
        <button className='App-btn' onClick={showKittie}>Get Advice From a Cat!</button>
      </div>
    </div>
  );
}

export default App;
