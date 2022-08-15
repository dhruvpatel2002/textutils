import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";



function App() {

const [mode, setMode] = useState('light');  
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
      setAlert(null);
  }, 1500);
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#091b26';
    showAlert("Dark mode enabled", "success");
    document.title = 'TextUtils - Dark Mode';
    // setInterval(() => {
    //   document.title = 'Text-Utils is Amazing'
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install TextUtils Now'
    // }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled", "success");
    document.title = 'TextUtils - Light Mode'
  }
}

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3 ">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading= "Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
    </div>
    </Router>
    </>
  );
}


export default App;
