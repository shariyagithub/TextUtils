import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpclick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","success");
      }
      const handleLoclick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase","success");
      }
      const handleClearclick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = '';
        setText(newtext)
        props.showAlert("text has been cleaned","success");
      }
      const handleRemovespaceclick = ()=>{
        //console.log("Uppercase was clicked" + text);
        
        let newtext = text.split(/[ ]+/);
    
        setText(newtext.join(" "))
        props.showAlert("space has been removed","success");
      }
    
      const handleCopyclick = ()=>{
        console.log("i am happy");
        var text=document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text has been copied","success");
      }
      const handleOnchange = (event)=>{//event is use to add another value with existing value
        console.log("On change");
        setText(event.target.value)
      }
      
    
      const [text,setText]= useState('');
      //usestate is use make state variable
      //setText("new text");
      //correct way to change the text
    

  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
    <h1>{props.heading}</h1> 
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode=== 'dark'?'#0dcaf0':'white',color: props.mode==='dark'?'white':'black'}} id="my-box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
<button className="btn btn-primary mx-1" onClick={handleCopyclick}>Copy text</button>
<button className="btn btn-primary mx-1" onClick={handleRemovespaceclick}>Remove space</button>
</div>

<div className="container my-3" style={{color:props.mode=== 'dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p> {text.split(" ").length} <b>Words</b> and {text.length} <b>character</b></p>
  <p>{0.008*text.split(" ").length} <b>Minutes read</b></p>

  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
</>
  )
}
