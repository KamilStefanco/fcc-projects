function Editor({handleChange, text}){

    return(
        <div className="editor-wrapper">
            <div className="toolbar">Editor</div>
            <textarea className="editor" id="editor" onChange={handleChange} value={text}></textarea>
        </div>
    );
}

export default Editor