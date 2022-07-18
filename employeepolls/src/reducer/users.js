import {RECIEVE_USERS, SAVE_ANSWER_USER, ADD_QUESTION_USER} from '../action/users'

export function users(state = {}, action){
    switch(action.type){
        case RECIEVE_USERS:
            return{
                ...state,
                ...action.users,
            }


        case SAVE_ANSWER_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.qid]:action.answer
                    }
                }
            }

        case ADD_QUESTION_USER:
            return{
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        default:
            return state
    }
}