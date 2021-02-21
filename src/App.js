import React, {useEffect, useState} from 'react';
import {Index} from './components/Index';
import {About} from './components/About';
import {Work} from './components/Work';
import {Tcg} from './components/Tcg';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";



function App() {

	if(window.location.pathname == '/about'){
		console.log('ya yeet')
	}

  useEffect(() => {
		console.log(window.location.pathname);
  })

  return (
    <Router>
			<Switch>
    		<Route path="/" exact component={Index}></Route>
				<Route path="/work/tcg" component={Tcg}></Route>
    		<Route path="/about" component={About}></Route>
				<Route path="/work" component={Work}></Route>
				<Route path="*" component={About}></Route>
			</Switch>
    </Router>
  );
}

export default App;
