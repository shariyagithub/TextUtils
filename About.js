import React,  {useState} from 'react'

export default function About(props) {

    //const [myStyle,setMyStyle]=useState({
      //  color:'black',
      //  backgroundColor:'white'
   // })

    let myStyle ={
      color:props.mode === 'dark'?'white':'#042743',
      backgroundColor:props.mode ==='dark'?'rgb(36,74,104)':'white',
      
     
    }

    
  return (
    <div className="container" >
        <h1 className="my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>About us</h1>
      <div className="accordion" id="accordionExample"  style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     textutils giv you a way to analyze your text quikly and efficiently be it word count,charcter count or 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       textutils is a free character counter tool that provides instant character count & word count statistic for a given text.Textutils reports nuber of words and character.Thus it is suitable for writing.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        this word counter software works in any web browser such as chrome,firefox,internet explore,safari,opera,it suits to count character in facebook,blog,books,excel document,pdf document,essay,etc.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
