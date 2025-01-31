function ShareButton({type,color}){

    const Icon = type === "twitter" ? <i className="fa-brands fa-twitter fa-xl"></i> : <i className="fa-brands fa-tumblr fa-xl"></i>;
    
    return(
        <>
            <a target="_blank" href="https://www.twitter.com/intent/tweet" id="tweet-quote" className="icons" style={{backgroundColor:color}} >{Icon}</a>
        </>
    );
}

export default ShareButton