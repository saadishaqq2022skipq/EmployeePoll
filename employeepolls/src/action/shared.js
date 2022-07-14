import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./question";
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