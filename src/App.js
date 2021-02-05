import {Index} from './components/Index'; 
import {About} from './components/About';
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <Route path="/" exact component={Index}></Route>
    <Route path="/about" component={About}></Route>
    </Router>
  );
}

export default App;
