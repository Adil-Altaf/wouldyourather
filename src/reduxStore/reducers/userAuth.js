import { SET_USER_AUTH } from '../actions/userAuth';

export default function userAuth (state = null, action) {
    switch(action.type){
        case SET_USER_AUTH :
            return action.userid
        default :
            return state;
    }
}
