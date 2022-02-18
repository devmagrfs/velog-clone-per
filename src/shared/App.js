import { Router, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore"


import Signup from '../page/Signup';

import './App.css';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/user/signup" exact component={Signup} />
    </ConnectedRouter>
  );
}

export default App;
