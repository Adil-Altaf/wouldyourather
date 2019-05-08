import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PollTabContainer from './PollTabContainer';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


import './UserHome.css';


class Home extends Component {

    state = {
      value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { userAuth} = this.props;

        if(!userAuth){
            return <Redirect to="/signin" />
        }


        return (
            <div className="homeContext">
                <Paper >
                    <Grid container spacing={16} justify="center" >
                        <Grid item xs={12}>
                            <Tabs value={value} onChange={this.handleChange}  variant="fullWidth">
                                <Tab label="Questions Not Answered" />
                                <Tab label="Questions Answered" />
                            </Tabs>
                        </Grid>
                        <Grid item xs={12}>
                            {value === 0 && <PollTabContainer isAnswered={false}></PollTabContainer>}
                            {value === 1 && <PollTabContainer isAnswered={true}></PollTabContainer>}
                        </Grid>
                    </Grid>


                </Paper>
            </div>
        );
    }
}

function mapStateToProps({userAuth}) {
    return {
        userAuth
    }
}

export default connect(mapStateToProps)(Home);
