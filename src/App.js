import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './Components/Intro';
import Author from './Components/Author';
import Goal from './Components/Goal';


function App() {
  return (
    <Router>
      <div id="main">
        <Switch>
          <Route exact path="/">
            <Intro/>
          </Route>
        </Switch>
        <Switch>
            <Route path="/author">
              <Author/>
            </Route>
        </Switch>
        <Switch>
          <Route path="/goal">
            <Goal/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
