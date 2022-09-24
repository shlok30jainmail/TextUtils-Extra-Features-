import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';

import * as ReactDOM from "react-dom";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')// whether a dark is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
        setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#151538";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success")

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success")

    }
  }

  // Exercise solution start
  const colorMode = ()=>{
    if(mode === 'light' || 'dark'){
      setMode('primary');
      document.body.style.backgroundColor = "#151538";
      document.body.style.color = "white";
      showAlert("primary mode has been enabled", "success")

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success")

    }
  }
  // exercise solution end 

  
  return (
  <>
<Router>
<Navbar title="Textutil" aboutText="About Us" mode={mode}  toggleMode={toggleMode} colorMode={colorMode}/>
{/* <Navbar/> */}
<Alert alert = {alert}/>
<div className="container my-3">


  <Switch>

    <Route exact path="/about">
      <About mode={mode} />
    </Route> 
     <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />

    </Route> 

  
    </Switch>
</div>

</Router>
  </>
  );
}

export default App;
