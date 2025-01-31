function Display({display, formula}) {

    return (
      <>
        <div className="formula">{formula}</div>
        <div className="display" id="display"> {display} </div>
      </>
    )
}
  
  export default Display