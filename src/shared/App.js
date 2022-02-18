import { Router, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore"


import Signup from '../page/Signup';
import Main from '../page/Main';

import './App.css';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/user/signup" exact component={Signup} />
      <Route path="/" exact component={Main} />
    </ConnectedRouter>
  );
}

export default App;
