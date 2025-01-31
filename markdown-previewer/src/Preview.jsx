function Preview({markdown}){
    
    return(
        <div className="preview-wrapper">
            <div className="toolbar">Preview</div>
            <div className="preview" id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
    );
}

export default Preview