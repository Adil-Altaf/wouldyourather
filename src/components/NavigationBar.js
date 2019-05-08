import React, { Component, Fragment } from 'react';
import './NavigationBar.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import LoadingBar from "react-redux-loading";
import { connect } from "react-redux";
import { setUserAuth } from "../reduxStore/actions/userAuth";

const styles = {
    signedInUser: {
        marginRight: 12,
    },
    root: {
        flexGrow: 1,
    },
    expand: {
        flexGrow: 1,
    }
};

class NavigationBar extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    }

    state = {
        userId: '',
        toLogin: false,
    };

    logout = e => {
        e.preventDefault();
        this.props.dispatch(setUserAuth(null));
        // add in store
    }
    render() {
        const { classes, signedInUser  } = this.props;
        return (
            <header>
                <AppBar position="static" >
                    <Toolbar>
                        <div className={classes.expand}>
                            <Button color="inherit"  className="navigationLinkButton" component={Link} to="/userHome">Home</Button>
                            <Button color="inherit" className="navigationLinkButton" component={Link} to="/addquestion">Add Question</Button>
                            <Button color="inherit" className="navigationLinkButton" component={Link} to="/leaderboard">Leader Board</Button>
                        </div>
                        {
                            signedInUser? (
                                <Fragment>
                                    <Typography variant="h6" color="inherit" className={classes.signedInUser}>
                                        Hello {signedInUser.name}
                                    </Typography>
                                    <Avatar alt="Remy Sharp" src={signedInUser?signedInUser.avatarURL:""} className={classes.avatar} />
                                    <Button color="inherit" className="navigationLinkButton" onClick={this.logout}>Logout</Button>
                                </Fragment> ) :
                                <Button color="inherit" className="navigationLinkButton" component={Link} to="/login">Login</Button>
                        }
                      </Toolbar>
                  </AppBar>
                <LoadingBar />
            </header>
        );
    }
}

function mapStateToProps({userAuth, questions, users}) {
    return {
        userAuth,
        signedInUser: users[userAuth]
    }
}

export default connect(mapStateToProps)(withStyles(styles)(NavigationBar));
