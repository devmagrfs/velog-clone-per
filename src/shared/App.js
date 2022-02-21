import React from "react";

import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { ConnectedRouter } from "connected-react-router";

import Header from "../components/Header";
import Login from "../pages/Login";
import PostDetail from "../pages/PostDetail";
import Signup from '../pages/Signup';
import Main from '../pages/Main';
import MainRecent from '../pages/MainRecent';
import PostAdd from '../pages/PostAdd';

function App() {
  return (
    // style={{ backgroundColor: "#121212" }}
    <div className="App" >
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/user/signup" exact component={Signup} />
        <Route path="/post/:id" exact component={PostDetail} />
        <Route path="/" exact component={Main} />
        <Route path="/recent" exact component={MainRecent} />
        <Route path="/write" exact component={PostAdd} />
      </ConnectedRouter>
    </div>
  );
}
export default App;

