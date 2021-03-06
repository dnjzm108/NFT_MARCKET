const initalState = {
    loadding: false,
    IsLogin: false,
    user_info:{
        nickname:null,
        wallet:null,
        email:null,
        picture:null,
        seller:null,
        status:null
    }
}

const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"

const USER_LOGOUT = "USER_LOGOUT"

const USER_JOIN_REQUEST = "USER_JOIN_REQUEST"
const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS"
const USER_JOIN_ERROR = "USER_JOIN_ERROR"

const SELLER_APPLY = "SELLER_APPLY"
const SELLER_APPLY_SUCCESS = "SELLER_APPLY_SUCCESS"
const SELLER_APPLY_ERROR = "SELLER_APPLY_ERROR"

const PROFILE_UPDATE = "PROFILE_UPDATE"
const PROFILE_UPDATE_SUCCESS = "PROFILE_UPDATE_SUCCESS"
const PROFILE_UPDATE_ERROR = "PROFILE_UPDATE_ERROR"



export const UserUpdate_REQUEST = (data) =>{
    return{
        type:PROFILE_UPDATE,
        data
    }
 }

export const Seller_Apply_Request = (data) =>{
    return{
        type:SELLER_APPLY,
        data
    }
 }
 
export const User_Logout = () =>{
    return{
        type:USER_LOGOUT
    }
 }
 

export const User_Join_Check = (data) =>{
    return{
        type: USER_JOIN_CHECK,
        data
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
            return {
                ...state,
                loadding:true
            }

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                IsLogin: true,
                loadding: false,
                data: action.data,
                user_info: action.user_info
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                loadding:false,
                user_info:{
                    nickname:null,
                    wallet:null,
                    email:null,
                    seller:null,
                    status:null
                }
            }

        case USER_JOIN_REQUEST:
            return {
                ...state,
                user_info:action.user_info
            }

        case USER_JOIN_SUCCESS:
            return {
                ...state,
                loadding: false,
                IsLogin: true,
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
                    user_info:{
                        nickname:null,
                        wallet:null,
                        email:null,
                        seller:null,
                        status:null
                    }
                } 
                
                case SELLER_APPLY:
                    return {
                        ...state,
                        loadding: true,
                    }
                case SELLER_APPLY_SUCCESS:
                    return {
                        ...state,
                        loadding: false,
                        user_info:action.info
                    }
                case SELLER_APPLY_ERROR:
                    return {
                        ...state,
                        loadding: false
                    }


                case PROFILE_UPDATE:
                    return {
                        ...state,
                        loadding: true
                    }
                case PROFILE_UPDATE_SUCCESS:
                    return {
                        ...state,
                        loadding: false,
                        user_info:action.info
                    }
                case PROFILE_UPDATE_ERROR:
                    return {
                        ...state,
                        loadding: false
                    }

        default:
            return state
    }
}

export default reducer