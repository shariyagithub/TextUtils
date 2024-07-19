
import './App.css';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
 Routes,
  Route
  
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');//whether the dark mode is enable or not

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);

     },1500);
  }
 


  const toggleMode = ()=>{
   // removeBodyClasses();
    //document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert("Dark mode has been enable","success");
      document.title= "Textutils - Dark Mode";
      //setInterval(() =>{
         // document.title = ' textutils is Amazing Mode';
      //},2000);
      //setInterval(() =>{
        //document.title = 'Install TextUtils Now';
     //  },1500);
    }

    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("light mode has been Enable","success");
      document.title= "Textutils - light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="textUtils2" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert} />
 <div className="container my-3">
 <Routes>
          <Route exact path="/about" key="about" element={<About mode={mode} />}/>
            
         
          <Route exact path="/" key="textform" element={<Textform showAlert={showAlert} heading="Try textUtils - Word Counter,Character Counter,Remove ExtraSpaces" mode={mode}/>}/>
          
        </Routes>
     
        
  </div>
  </Router>
      
 
 </>
  );
}

export default App;
