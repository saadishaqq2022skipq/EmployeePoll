export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS"
export const ADD_QUESTIONS = "ADD_QUESTIONS"
export const SAVE_ANSWER_QUESTION = "SAVE_ANSWER_QUESTION"


export function recieveQuestions(questions){
    return{
    type: RECIEVE_QUESTIONS,
    questions,
    }
}

export function addQuestion(question){
    return{
        type:ADD_QUESTIONS,
        question
    }
}

export function saveAnswerQuestion({authedUser, questionId,answer}){
    return{
        type: SAVE_ANSWER_QUESTION,
        authedUser,
        questionId,
        answer
    }
}