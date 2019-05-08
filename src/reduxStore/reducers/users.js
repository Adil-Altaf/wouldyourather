import { GET_INITIAL_USERS, ADD_QUESTION_FOR_USER, ADD_ANSWER_FOR_USER } from '../actions/users';

export default function users (state = {}, action) {
    switch(action.type){
        case GET_INITIAL_USERS :
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_FOR_USER :
            return {
                ...state,
                [action.userAuth] : {
                    ...state[action.userAuth],
                    questions : state[action.userAuth].questions.concat([action.questionId])
                }
            }
        case ADD_ANSWER_FOR_USER:
            return {
                ...state,
                [action.userAuth] : {
                    ...state[action.userAuth],
                    answers : {
                        ...state[action.userAuth].answers,
                        [action.questionId]: action.answer
                    }
                }
            }
        default :
            return state;
    }
}
