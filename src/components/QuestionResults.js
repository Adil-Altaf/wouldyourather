import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { Redirect } from "react-router-dom";
import { formatQuestion } from "../utilities/helper";
import { connect } from "react-redux";

import './QuestionResults.css';

class QuestionResults extends Component {

    optionResult(votes, question){
        return (votes / (question.optionOne.votes.length + question.optionTwo.votes.length))*100;
    }

    showVoteComponent(question,userAuth){
      return (
        question.optionOne.votes.includes(userAuth)?
        (
            <div className="questionResultsUserVote">
                You
            </div>
        ):null
      );
    }
    render() {

    const { question, userAuth} = this.props;

    if(!userAuth){
        return <Redirect to="/signin" />
    }

    if(!question) {
        return null;
    }

    return (
        <div className="questionResultsContainer">
            <Paper className="questionResultsElement">
                <div className="questionResultsHeader">
                    {question.authorName} asks:
                </div>
                <div className="questionResultsControls">
                    <Grid container spacing={16}>

                        <Grid item xs={3} alignItems="center" justify="center" container>
                            <div>
                                <img className="questionResultsScoreCardImage" alt="complex" src={question.avatarURL} />
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="questionResultsSeparator">
                            </div>
                        </Grid>
                        <Grid item xs={8} container direction="column">
                            <Grid item >
                                <div className="questionResultsTitle">
                                    Results:
                                </div>
                            </Grid>
                            <Grid item className="questionResultsAnswerGrid">
                                <Paper className="questionResultsAnswerElement">
                                    {
                                        question.optionOne.votes.includes(userAuth)?
                                        (
                                            <div className="questionResultsUserVote">
                                                You
                                            </div>
                                        ):null
                                    }
                                    <Grid container spacing={16} direction="column">
                                        <Grid item >
                                            Would you rather {question.optionOne.text}
                                        </Grid>
                                        <Grid item >
                                            <LinearProgress variant="determinate" value={(this.optionResult(question.optionOne.votes.length,question))} className="questionResultsAnswerProgress" />
                                        </Grid>
                                        <Grid item className="questionResultsTotalVotes" >
                                            {question.optionOne.votes.length} out of { question.optionOne.votes.length + question.optionTwo.votes.length} votes
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item className="questionResultsAnswerGrid">
                                <Paper className="questionResultsAnswerElement">
                                    {
                                        question.optionTwo.votes.includes(userAuth)?
                                        (
                                            <div className="questionResultsUserVote">
                                                You
                                            </div>
                                        ):null
                                    }
                                    <Grid container spacing={16} direction="column">
                                        <Grid item >
                                            Would you rather {question.optionTwo.text}
                                        </Grid>
                                        <Grid item >
                                            <LinearProgress variant="determinate" value={(this.optionResult(question.optionTwo.votes.length,question))} className="questionResultsAnswerProgress"/>

                                        </Grid>
                                        <Grid item className="questionResultsTotalVotes">
                                        {question.optionTwo.votes.length} out of { question.optionOne.votes.length + question.optionTwo.votes.length} votes
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
  }
}

function mapStateToProps({userAuth, questions, users}, props) {
    const { id } = props.match.params;
    return {
        userAuth,
        question: questions[id]? formatQuestion(questions[id],users[questions[id].author],userAuth): null
    }
}

export default connect(mapStateToProps)(QuestionResults);
