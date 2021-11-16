const initalState = {
    logdding: false,
    IsLogin: false,
    seller_info: [
        {
            nickname: null,
            seller_no: null,
            email: null,
            status: null
        }
    ]
}

const ADMIN_LOGIN = "ADMIN_LOGIN"
const ADMIN_SUCCESS = "ADMIN_SUCCESS"
const ADMIN_ERROR = "ADMIN_ERROR"

const GET_SELLER_INFO = "GET_SELLER_INFO"
const SELLER_SUCCESS = "SELLER_SUCCESS"
const SELLER_ERROR = "SLLER_ERROR"

const CHANGE_SELLER = "CHANGE_SELLER"
const CHANGE_SELLER_SUCCESS = "CHANGE_SELLER_SUCCESS"
const CHANGE_SELLER_ERROR = "CHANGE_SELLER_ERROR"



export const Change_Seller_REQUEST  = (data) =>{
    return{
      type:CHANGE_SELLER,
      data
    }
}
export const Get_Seller_Info = (data) =>{
    return{
      type:GET_SELLER_INFO,
      data
    }
}

export const Admin_Login_REQUEST = (data) => {
    return {
        type: ADMIN_LOGIN,
        data
    }
}

export const Admin_Logout = () => {
    return {
        type: ADMIN_ERROR
    }
}


const reducer = (state = initalState, action) => {
    switch (action.type) {

        case ADMIN_LOGIN:
            return {
                ...state,
                loadding: true
            }
        case ADMIN_SUCCESS:
            return {
                ...state,
                IsLogin: true,
                loadding: false
            }
        case ADMIN_ERROR:
            return {
                ...state,
                IsLogin: false,
                loadding: false
            }

        case GET_SELLER_INFO:
            return{
                ...state,
                loadding:true
            }

        case SELLER_SUCCESS:
            return{
                ...state,
                loadding:false,
                seller_info:action.seller_info
            }

        case SELLER_ERROR:
            return{
                ...state,
                loadding:false
            }
        case CHANGE_SELLER:
            return{
                ...state,
                loadding:true
            }
        case CHANGE_SELLER_SUCCESS:
            return{
                ...state,
                loadding:false
            }
        case CHANGE_SELLER_ERROR:
            return{
                ...state,
                loadding:false
            }
        

        default:
            return state
    }
}

export default reducer