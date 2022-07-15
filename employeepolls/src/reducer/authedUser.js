import { SET_AUTHED_USER, LOGOUT } from "../action/authedUser"

export function authedUser(state = null, action){
    switch(action.type){
        case SET_AUTHED_USER:
            return action.id

        case LOGOUT:
            return null
        default:
            return state
    }
}
