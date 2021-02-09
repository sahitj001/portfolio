import React, {useEffect, useState} from 'react';
import {Index} from './components/Index';
import {About} from './components/About';
import {Route, BrowserRouter as Router} from "react-router-dom";



function App() {

	if(window.location.pathname == '/about'){
		console.log('ya yeet')
	}

  useEffect(() => {
		console.log(window.location.pathname);
  })

  return (
    <Router>
    <Route path="/" exact component={Index}></Route>
    <Route path="/about" component={About}></Route>
    </Router>
  );
}

export default App;
