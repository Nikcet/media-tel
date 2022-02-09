import React from "react";
import Login from "./Login";
import Header from "./Header";
import UsersList from "./UsersList";
import Aside from "./Aside";
import AddUser from "./AddUser";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

function App() {
  return (
    <div className="root">
      <Aside />
      <Header />
      {/* <UsersList /> */}
      {/* <AddUser /> */}
      {/* <Switch >
        <Route>
          <Users />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
