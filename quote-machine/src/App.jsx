import { useState, useEffect } from 'react'
import QuoteBox from './Components/QuoteBox'

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color,setColor] = useState("#fff");

  const getNewQuote = async () => {
    try{
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);

    }catch(error){
      console.log("Error fetching quote: ",error)
    }
    getRandomColor();
  }

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor("rgb(" + r + "," + g + "," + b +")");
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className='wrapper' style={{backgroundColor: color}}>
      <QuoteBox quote={quote} author={author} getNewQuote={getNewQuote} color={color}/>
    </div>
  )
}

export default App
