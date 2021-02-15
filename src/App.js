import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage.component';
import Hats from './pages/hats.component';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={Hats} />
    </Switch>
  );
}

export default App;
