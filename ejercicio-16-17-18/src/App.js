import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/registro" component={RegisterPage} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
};

export default App;
