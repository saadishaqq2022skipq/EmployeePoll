import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { recieveUsers, saveAnswerUser, addQuestionUser } from "./users";
import { recieveQuestions, saveAnswerQuestion,addQuestion } from "./questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = 'sarahedo'

export function handleInitialData(){
    
    return(dispatch) => {
        return getInitialData().then(({users, questions})=>{
            dispatch(recieveUsers(users))
            dispatch(recieveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}

export function handleSaveAnswer(k){
    return (dispatch) =>{
        saveQuestionAnswer(k)
        .then(()=>{
            dispatch(saveAnswerQuestion(k))
            dispatch(saveAnswerUser(k))
        }).catch((e)=>{
            console.log("Error in saving answer: ", e)
        })
    }
}

export function handleAddQuestion(question){
    return (dispatch)=>{
        saveQuestion(question)
        .then((k)=>{
            dispatch(addQuestion(k))
            dispatch(addQuestionUser(k))
        }).catch((e)=>{
            console.log("Error in adding question", e)
        })
    }
}