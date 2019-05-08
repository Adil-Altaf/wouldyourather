import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import { connect } from "react-redux";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Redirect } from "react-router-dom";
import { setUserAuth } from "../reduxStore/actions/userAuth";

import './Login.css';

class Login extends Component {

    state = {
        userId: '',
        goToHome: false,
    };

    handleChange = event => {
        this.setState({ userId: event.target.value });
    };

    submit = e => {
        e.preventDefault();
        const { userId } = this.state;
        this.props.dispatch(setUserAuth(userId));
        // add in store
        this.setState({
            userId:'',
            goToHome: true
        });
    }

    render() {
        const {userIds, users} = this.props;

        if(this.state.goToHome){
            return <Redirect to="/userHome" />
        }

        return (
            <div>
                <div className="signinContainer">
                    <Paper>
                        <div className="signinBoxHeader">
                            <div className="signinBoxTitle">
                                Welcome! You're in the Would you Rather App!
                            </div>
                            <div className="signinBoxMsg">
                                Please sign in to continue using the Would You Rather App
                            </div>
                        </div>
                        <div className="signinElements">
                            Sign In
                            <form>
                                <FormControl variant="filled" className="formControl">
                                    <InputLabel htmlFor="filled-user">Select User</InputLabel>
                                    <Select
                                        value={this.state.userId}
                                        onChange={this.handleChange}
                                        input={<FilledInput name="userId" id="filled-user" />}
                                    >

                                        {
                                            userIds.map((id) => (
                                                <MenuItem key={id} value={id}>
                                                    <ListItemIcon >
                                                        <img className="signinBoxImage" alt="complex" src={users[id].avatarURL} />
                                                    </ListItemIcon>
                                                    <ListItemText inset primary={users[id].name} />
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </form>
                        </div>
                        <Button variant="contained" style={{backgroundColor: "black", color:"white"}} className="formControl" onClick={this.submit}>Sign In</Button>
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps({userAuth, questions, users}) {
    return {
        userAuth,
        userIds: Object.keys(users),
        users: users
    }
}

export default connect(mapStateToProps)(Login);
