export const SET_USER_AUTH = "SET_USER_AUTH";

export function setUserAuth(userid) {
    return {
        type: SET_USER_AUTH,
        userid,
    }
}
