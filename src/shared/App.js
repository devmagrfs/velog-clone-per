import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Signup from '../page/Signup';

import './App.css';

function App() {
  return (
    <ConnectedRouter>
      <Route path="/user/signup" exact component={Signup} />
    </ConnectedRouter>
  );
}

export default App;
