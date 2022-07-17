import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { recieveUsers, saveAnswerUser, addQuestionUser } from "./users";
import { recieveQuestions, saveAnswerQuestion,addQuestion } from "./questions";
//import { Info } from "@mui/icons-material";
//import { setAuthedUser } from "./authedUser";



export function handleInitialData(){
    
    return (dispatch) => {
        return getInitialData().then(({users, questions})=>{
            dispatch(recieveUsers(users))
            dispatch(recieveQuestions(questions))
            
        })
    }
}

export function handleSaveAnswer(info){
    return (dispatch) =>{
        saveQuestionAnswer(info)
        .then(()=>{
            dispatch(saveAnswerQuestion(info))
            dispatch(saveAnswerUser(info))
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