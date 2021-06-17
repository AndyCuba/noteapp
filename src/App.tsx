import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import NotePage from './pages/NotePage/NotePage';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/notes/:noteId" component={NotePage}/>
      </Switch> 
    </div>  
  );
}

export default App;
