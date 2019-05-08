import { GET_INITIAL_QUESTIONS, NEW_QUESTION, ADD_ANSWER_FOR_QUESTION } from '../actions/questions';


export default function questions (state = {}, action) {
    switch(action.type){
        case GET_INITIAL_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case NEW_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id] : question,
            }
        case ADD_ANSWER_FOR_QUESTION:
            const { answer } = action;
            return {
                ...state,
                [answer.questionId] : {
                    ...state[answer.questionId],
                    [answer.answer] : {
                        ...state[answer.questionId][answer.answer],
                        votes : state[answer.questionId][answer.answer].votes.concat([answer.userAuth])
                    }
                }
            }
        default :
            return state;
    }
}
