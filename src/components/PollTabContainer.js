import React, { Component } from 'react';
import PollElement from './PollElement';
import { connect } from "react-redux";

class PollTabContainer extends Component {
  render() {
    return (
      <div>
        {
            this.props.questionIds.map((id) => (
                <PollElement key={id} id={id}></PollElement>
            ))
        }
      </div>
    );
  }
}

function mapStateToProps({users, questions, userAuth}, {isAnswered}) {
    return {
        questionIds: Object.keys(questions)
            .sort((item1,item2) => questions[item2].timestamp - questions[item1].timestamp)
            .filter((q)=> {
                return userAuth && (isAnswered? users[userAuth].answers[q] : !users[userAuth].answers[q]);
            })
    }
}

export default connect(mapStateToProps,null)(PollTabContainer);
