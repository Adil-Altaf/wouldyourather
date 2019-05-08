import { addQuestion, addQuestionAnswer  } from "../../utilities/api";
import { addQuestionForUser, addAnswerForUser } from "./users";
import { showLoading, hideLoading  } from "react-redux-loading";

export const GET_INITIAL_QUESTIONS = "GET_INITIAL_QUESTIONS";
export const NEW_QUESTION = "NEW_QUESTION";
export const ADD_ANSWER_FOR_QUESTION = "ADD_ANSWER_FOR_QUESTION";

function newQuestion (question){
    return {
        type: NEW_QUESTION,
        question
    }
}

function addAnswerForQuestion (answer){
    return {
        type: ADD_ANSWER_FOR_QUESTION,
        answer
    }
}

export function handleAddAnswer(questionId, answer){
    return (dispatch, getState) => {
        const { userAuth } = getState();
        dispatch(showLoading());
        const info = {
            userAuth,
            qid:questionId,
            answer
        }
        return addQuestionAnswer(info)
        .then(() => {
            dispatch(addAnswerForQuestion(info));
            dispatch(addAnswerForUser(info));
            dispatch(hideLoading());
        })
    }
}


export function handleAddQuesiton(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { userAuth } = getState();

        dispatch(showLoading());
        return addQuestion({
            optionOneText,
            optionTwoText,
            author: userAuth
        })
        .then ((question) => {
            dispatch(newQuestion(question))
            dispatch(addQuestionForUser(userAuth, question.id))
        })
        .then (() => dispatch(hideLoading()));
    }
}

export function getInitialQuestions(questions) {
    return {
        type: GET_INITIAL_QUESTIONS,
        questions
    }
}
