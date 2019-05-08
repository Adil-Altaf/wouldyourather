import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ScoreCard from "./ScoreCard";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userScore } from "../utilities/helper";

import './LeaderBoard.css';

class LeaderBoard extends Component {

    render() {
        const { userIds, userAuth } = this.props;

        if(!userAuth){
            return <Redirect to="/signin" />
        }

        return (
            <div className="leaderBoardContainer">
                <Grid container spacing={24} direction="column">
                    {
                        userIds.map((id) => (
                            <Grid key={id} item xs={12}>
                                <ScoreCard  id={id}></ScoreCard>
                            </Grid>
                        ))
                    }

                </Grid>
            </div>
        );
  }
}

function mapStateToProps({users, questions, userAuth}) {
    return {
        userAuth,
        userIds: Object.keys(users)
            .sort((a,b) => userScore(users[b]) - userScore(users[a]))
    }
}

export default connect(mapStateToProps,null)(LeaderBoard);
