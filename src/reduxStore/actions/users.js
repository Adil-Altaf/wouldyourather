export const GET_INITIAL_USERS = "GET_INITIAL_USERS";
export const ADD_QUESTION_FOR_USER = "ADD_QUESTION_FOR_USER";
export const ADD_ANSWER_FOR_USER = "ADD_ANSWER_FOR_USER";

export function addAnswerForUser({userAuth, questionId, answer}){
    return {
        type: ADD_ANSWER_FOR_USER,
        userAuth,
        questionId,
        answer
    }
}

export function addQuestionForUser(userAuth, questionId){
    return {
        type: ADD_QUESTION_FOR_USER,
        userAuth,
        questionId
    }
}

export function getInitialUsers(users) {
    return {
        type: GET_INITIAL_USERS,
        users
    }
}
