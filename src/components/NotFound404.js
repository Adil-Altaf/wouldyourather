import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import './NotFound404.css'

class NotFound404 extends Component {
  render() {
    return (
        <div>
        <div className="notFound404Container">
            <Paper style={{padding:"10px"}}>
                <div className="notFound404Header">
                    <div className="notFound404Title">
                            We apologize!
                    </div>
                    <div className="notFound404Message">
                        The page you are looking for does not exist.
                    </div>
                </div>
                <Button variant="contained" style={{backgroundColor:"black",color:"white"}} component={Link} to={"/userHome"}>Back to Home</Button>
            </Paper>
        </div>
    </div>
    );
  }
}

export default NotFound404;
