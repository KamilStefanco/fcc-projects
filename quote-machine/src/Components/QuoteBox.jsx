import ShareButton from "./ShareButton"

function QuoteBox({quote, author, getNewQuote, color}) {
  
    return (
      <div className="quote-box" id="quote-box">
        <h1>Random Quote Machine</h1>
        <hr/>

        <div className="quote-text">
            <p className="quote" id="text">{quote}</p>
            <p className="author" id="author">-{author}</p>
        </div>

        <div className="buttons">
          <span>
            <ShareButton type="twitter" />
          </span>

          <button className="new-quote-btn" onClick={getNewQuote} style={{backgroundColor:color}} id="new-quote" >Enlighten me</button>
        </div>
      </div>
    )
}
  
export default QuoteBox