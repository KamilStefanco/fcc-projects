import { useState, useEffect } from 'react';
import {marked} from 'marked';
import Editor from "./Editor.jsx"
import Preview from "./Preview.jsx"

const placeholder = `Let's do some headers!
  # I AM A H1 HEADER!
  ## I AM A H2 HEADER!
  
  How about a link to [Google!](http://google.com)

  Anybody want a \`<div></div>\`?

  Here's a function to cheer you up!

  \`\`\`
    function sayHi() {
       console.log("HI!");
    }
  \`\`\`

  Let's count to three!
  
  * One
  * Two
  * Three

  Quote that is **not** relevant at all!
  
    As Kanye West said:
    > idk what he said.
  
  Here's an image of React!

  ![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
  
  ### Blockquotes
  > something
  >
  >> readmeFile
`

function App() {

  const [text,setText] = useState("");
  const [markdown,setMarkdown] = useState(""); 

  marked.setOptions({
    breaks: true
  });

  const handleChange = (event)=>{
    setText(event.target.value)
    setMarkdown(marked(event.target.value));
  }

  useEffect(()=> {
    setText(placeholder);
    setMarkdown(marked(placeholder));
  },[])

 
  return (
    <div className="wrapper">

      <Editor handleChange={handleChange} text={text} />
      <Preview markdown={markdown} />

    </div>
  );
}

export default App
