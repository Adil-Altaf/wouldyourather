import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import { userScore } from "../utilities/helper";
import { connect } from "react-redux";

import './ScoreCard.css';

class ScoreCard extends Component {

    render() {
        const { user } = this.props;

        return (
            <div>
                <Paper className="scoreCardContainer">
                    <Grid container spacing={16} style={{backgroundColor:"lightgray"}}>
                        <Grid item xs={3} alignItems="center" justify="center" container>
                            <div>
                                <img className="scoreCardImage" alt="complex" src={user.avatarURL} />
                            </div>
                        </Grid>
                        <Grid item xs={1} className="scoreCardSeparatorGrid">
                            <div className="scoreCardSeparator">
                            </div>
                        </Grid>
                        <Grid item xs={7} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs >
                                    <div className="scoreCardName">
                                        {user.name}
                                    </div>
                                </Grid>
                                <Grid item xs container>
                                    <Grid xs={10} item >
                                        Number of Questions Answered
                                    </Grid>
                                    <Grid xs={2} item>
                                        {Object.keys(user.answers).length}
                                    </Grid>
                                </Grid>
                                <Grid item xs container>
                                    <Grid item xs={10}>
                                        Number of Questions Created
                                    </Grid>
                                    <Grid item xs={2}>
                                        {user.questions.length}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} className="scoreCardSeparatorGrid">
                            <div className="scoreCardSeparator">
                            </div>
                        </Grid>
                        <Grid xs={2} item container direction="column" alignItems="center" justify="center">
                                <Paper className="scoreCardScoreElement">
                                    <Grid item container direction="column" className="scoreCardScoreGrid">
                                        <Grid item className="scoreCardScoreHeader">
                                            Score
                                        </Grid>
                                        <Grid item alignItems="center" justify="center" container>
                                        <Badge color="primary" className="scoreCardBadge"
                                                badgeContent={userScore(user)} >
                                            <span></span>
                                        </Badge>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps({userAuth, questions, users}, { id }) {
    return {
        userAuth,
        user: users[id],
    }
}

export default connect(mapStateToProps)(ScoreCard);
