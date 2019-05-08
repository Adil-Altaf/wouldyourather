import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuesiton } from "../reduxStore/actions/questions";

import './AddQuestion.css';

class AddQuestion extends Component {

    state = {
        optionOne:'',
        optionTwo:'',
        goToHome: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    submit = e => {
        e.preventDefault();
        const {optionOne , optionTwo} = this.state;
        this.props.dispatch(handleAddQuesiton(optionOne, optionTwo));
        // add in store
        this.setState({
            optionOne:'',
            optionTwo:'',
            goToHome: true
        });
    }

    render() {

        const { goToHome} = this.state;

        const { userAuth} = this.props;
        if(!userAuth){
            return <Redirect to="/signin" />
        }

        if(goToHome){
            return <Redirect to={"/userHome"} />
        }

        return (
            <div>
                <div className="addQuestionBox">
                    <Paper className="addQuestionElement">
                        <div className="addQuestionHeader">
                            Add Quesiton
                        </div>
                        <div className="addQuestionControls">
                            <div >
                                Please complete the question text:
                            </div>
                            <div className="addQuestionText">
                                Would you rather...
                            </div>
                            <form>
                                <TextField
                                    id="optionOne"
                                    label="Option One"
                                    className="addQuestionFormControl"
                                    value={this.state.optionOne}
                                    onChange={this.handleChange('optionOne')}
                                    margin="normal"
                                    variant="outlined"
                                    />
                                <div className="addQuestionSeparator">
                                    OR
                                </div>
                                <TextField
                                    id="optionTwo"
                                    label="Option Two"
                                    className="addQuestionFormControl"
                                    value={this.state.optionTwo}
                                    onChange={this.handleChange('optionTwo')}
                                    margin="normal"
                                    variant="outlined"
                                    />
                            </form>
                        </div>
                        <Button variant="contained" color="inherit" className="addQuestionFormControl" onClick={this.submit}>Submit</Button>
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps({userAuth}) {
    return {
        userAuth
    }
}

export default connect(mapStateToProps)(AddQuestion);
