import React, {useEffect, useState} from 'react';
import {Index} from './components/Index';
import {About} from './components/About';
import {Work} from './components/Work';
import {Tcg} from './components/Tcg';
import {PageNotFound} from './components/PageNotFound';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";



function App() {

	const [email, setEmail] = useState('');
	const currentMail = 'jordy.sahit@hva.nl';

  useEffect(() => {
		function updateMail(){
			setEmail(currentMail);
		}

		console.log('test', email);

		if(email === ''){
			updateMail();
			console.log('email should now contain mail', email);
		}

  })

  return (
    <Router>
			<Switch>
    		{/* <Route path="/" exact render={props => ( <Index {...props} setEmail(email)/> )}></Route> */}
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
