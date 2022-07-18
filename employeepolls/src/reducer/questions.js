import { RECIEVE_QUESTIONS, SAVE_ANSWER_QUESTION, ADD_QUESTIONS } from "../action/questions"

export function questions(state = {}, action){
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return{
                ...state,
                ...action.questions,
            }

        case ADD_QUESTIONS:
            return{
                ...state,
                [action.question.id]: action.question
            }

        case SAVE_ANSWER_QUESTION:
            console.log("The action", action)
            return{
                ...state,
                [action.qid]:{
                    ...state[action.qid],
                    [action.answer]:{
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }

                }
            }
        default:
            return state
    }
}