import React, {useEffect, useState} from 'react';
import {Index} from './components/Index';
import {About} from './components/About';
import {Work} from './components/Work';
import {Tcg} from './components/Tcg';
import {PageNotFound} from './components/PageNotFound';
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
    		<Route path="/about" exact component={About}></Route>
				<Route path="/work" exact component={Work}></Route>
				<Route path="*" component={PageNotFound}></Route>
			</Switch>
    </Router>
  );
}

export default App;
