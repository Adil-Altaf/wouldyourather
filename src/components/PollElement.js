import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { formatQuestion } from "../utilities/helper";
import { connect } from "react-redux";

import './PollElement.css';

class PollElement extends Component {


  render() {
    const { question, navigationURL } = this.props;
    return (
        <div className="pollElementContainer">
            <Paper className="pollElementPaper">
                <div className="pollElementBoxHeader">
                    {question.authorName} asks:
                </div>
                <div className="pollElementControls">
                    <Grid container spacing={16}>

                        <Grid item xs={4} alignItems="center" justify="center" container>
                            <div>
                                <img className="pollElementScoreCardImg" alt="complex" src={question.avatarURL} />
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="pollElementSeparator">
                            </div>
                        </Grid>
                        <Grid item xs={7} container direction="column">
                            <Grid item >
                                <div className="pollElementMainTitle">
                                    Would you Rather....
                                </div>
                            </Grid>
                            <Grid item>
                                <div>
                                    ..{question.optionOne.text}...
                                </div>
                            </Grid>
                            <Grid item >
                                <Button variant="contained" color="inherit" className="pollElementFormControl" component={Link} to={navigationURL}>View Poll</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
  }
}


function mapStateToProps({userAuth, questions, users}, { id }) {
    const question = questions[id];

    return {
        userAuth,
        question: formatQuestion(question,users[question.author],userAuth),
        navigationURL: users[userAuth].answers[id]? `questionResult/${question.id}` : `/question/${question.id}`
    }
}

export default connect(mapStateToProps)(PollElement);
