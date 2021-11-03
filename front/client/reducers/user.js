const initalState = {
    loadding: false,
    IsLogin: false,
    user_info:{},
    name_check:''
}

const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"
const USER_LOGOUT = "USER_LOGOUT"

const USER_JOIN_REQUEST = "USER_JOIN_REQUEST"
const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS"
const USER_JOIN_ERROR = "USER_JOIN_ERROR"

export const User_Join_Check = (data) =>{
    return{
        type: USER_JOIN_CHECK,
        data
    }
}

export const User_Logout = () => {
    return {
        type: USER_LOGOUT
    }
}

export const UserLogin_REQUEST = data => {
    return {
        type: USER_LOGIN_REQUEST,
        data,
    }
}

export const UserJoin_REQUEST = data => {
    return {
        type: USER_JOIN_REQUEST,
        data
    }
}

const reducer = (state = initalState,action) => {
    switch (action.type) {

        case USER_LOGIN_REQUEST:
            console.log(action);
            return {
                ...state,
                user_info:action.data,
                loadding: true,
            }
            


        case USER_LOGIN_SUCCESS:
            console.log(action);
            return {
                ...state,
                IsLogin: true,
                loadding: false,
                data: action.data,
                user_info: action.user_info,
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                loadding: false,
                data: action.data,
            }

        case USER_JOIN_REQUEST:
            console.log("reducer");
            return {
                ...state,
                user_info:action.user_info
            }

        case USER_JOIN_SUCCESS:
            return {
                ...state,
                loadding: false,
                user_info: action.user_info
            }

        case USER_JOIN_ERROR:
            return {
                ...state,
                loadding: false,
            }
        case USER_LOGOUT:
            return {
                ...state,
                IsLogin: false,
                user_info: {},
                data: 'logout'

            }

        default:
            return state
    }
}

export default reducer