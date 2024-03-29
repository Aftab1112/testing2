import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
  }

  setTimeout(() => {
setAlert(null)
  }, 2500);

  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor ="#042743"
      showAlert(" Dark Mode Activated","success")
    }else{
      setMode("light")
      document.body.style.backgroundColor ="white"
      showAlert(" Light Mode Activated","success")
      
    }
  }
  return (
    <>
    <Router>
<Navbar abc="TextUtils" sec ="About us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

    <Routes>

    <><Route path='/about' element={<About mode={mode}/>}></Route></>
   <><Route path='/' element = {<TextForm showAlert={showAlert}heading="Enter Your Text "mode={mode}/>}></Route></>
          
    </Routes>

</div>
</Router>
    </>
  );
  
}

export default App;
