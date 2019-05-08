import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import UserHome from "./components/UserHome";
import AddQuestion from "./components/AddQuestion";
import Question from "./components/Question";
import QuestionResults from "./components/QuestionResults";
import LeaderBoard from "./components/LeaderBoard";
import ScoreCard from "./components/ScoreCard";
import NotFound404 from "./components/NotFound404";
import history from "./History";

class Routers extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/signin" component={Login} />
                        <Route exact path="/userHome" component={UserHome} />
                        <Route exact path="/addQuestion" component={AddQuestion} />
                        <Route exact path="/question/:id" component={Question} />
                        <Route exact path="/questionResult/:id" component={QuestionResults} />
                        <Route exact path="/leaderboard" component={LeaderBoard} />
                        <Route exact path="/scorecard" component={ScoreCard} />
                        <Route path="*" component={NotFound404} />
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default Routers;
