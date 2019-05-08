import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
/*
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import ScoreCard from "./components/ScoreCard";
import Question from "./components/Question";
import PollResults from "./components/PollResults";
*/
import history from "./History";;

class Routers extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Login} />
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default Routers;
