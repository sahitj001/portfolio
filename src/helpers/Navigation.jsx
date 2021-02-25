import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Index} from '../components/Index';
import {About} from '../components/About';
import {Work} from '../components/Work';
import {Tcg} from '../work-items/Tcg';
import {PageNotFound} from '../components/PageNotFound';

export function Navigation() {

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
	)
}
