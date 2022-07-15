import {_getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer} from './_DATA'

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions])=>({
        users,
        questions,
    }))
}

export function saveQuestion(k){
    return _saveQuestion(k)
}

export function saveQuestionAnswer(k){
    return _saveQuestionAnswer(k)
}