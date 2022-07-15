import { RECIEVE_QUESTIONS, SAVE_ANSWER_QUESTION } from "../action/questions"

export function questions(state = {}, action){
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return{
                ...state,
                ...action.questions,
            }

        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id]: action.question
            }

        case SAVE_ANSWER_QUESTION:
            return{
                ...state,
                [action.questionId]:{
                    ...state[action.questionId],
                    [action.answer]:{
                        ...state[action.questionId][action.answer],
                        votes: state[action.questionId][action.answer].votes.concat([action.authedUser])
                    }

                }
            }
        default:
            return state
    }
}