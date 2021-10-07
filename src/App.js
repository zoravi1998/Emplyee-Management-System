import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
//import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeCompenent from "./components/ViewEmployeeComponent";
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeCompenent}></Route>
            {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}

          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
