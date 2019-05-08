import { getInitialData } from '../../utilities/api';
import { getInitialQuestions } from './questions';
import { getInitialUsers } from './users';
import { showLoading, hideLoading  } from "react-redux-loading";

export function handleIntialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(getInitialUsers(users));
                dispatch(getInitialQuestions(questions));
                dispatch(hideLoading());
            })
    }
}
