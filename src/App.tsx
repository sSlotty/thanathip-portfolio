import { Switch, Route } from 'react-router-dom';

import Infomation from './components/Infomation';
import Index from './pages/Index';
import NotfoundPage from './pages/NotfoundPage';


function App() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/infomation/:id" exact component={Infomation} />
      <Route path="*" component={NotfoundPage} />
    </Switch>
  );
}

export default App;
