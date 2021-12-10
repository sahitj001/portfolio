import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Index } from '../components/Index';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { Tcg } from '../work-items/Tcg';
import { PageNotFound } from '../components/PageNotFound';
import { Itsavirus } from '../work-items/Itsavirus';
import { Tropomi } from '../work-items/Tropomi';
import { Tinkaway } from '../work-items/Tinkaway';
import { Mohi } from '../work-items/Mohi';

export function Navigation() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={About}></Route>
				<Route path="/work/tcg" component={Tcg}></Route>
				<Route path="/work" exact component={Work}></Route>
				<Route path="/work/itsavirus" exact component={Itsavirus}></Route>
				<Route path="/work/knmi" exact component={Tropomi}></Route>
				<Route path="/work/tinkaway" exact component={Tinkaway}></Route>
				<Route path="/work/mohi" exact component={Mohi}></Route>
				{/* <Route path="*" component={PageNotFound}></Route> */}
			</Switch>
		</Router>
	)
}
