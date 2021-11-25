const initialState = {
    isLoading: false,
}

// const TOKEN_TRANSFER_REQUEST = "TOKEN_TRANSFER_REQUEST"
const TOKEN_TRANSFER_SUCCESS = "TOKEN_TRANSFER_SUCCESS"
// const TOKEN_TRANSFER_ERROR = "TOKEN_TRANSFER_ERROR"

const TOKEN_SWAP_REQUEST = "TOKEN_SWAP_REQUEST"
const TOKEN_SWAP_SUCCESS = "TOKEN_SWAP_SUCCESS"
const TOKEN_SWAP_ERROR = "TOKEN_SWAP_ERROR"

export const TRANSFER_SUCCESS = () => {
    return{
        type:TOKEN_TRANSFER_SUCCESS,
    }
}

export const Swap_REQUEST = (data) =>{
    return{
        type:TOKEN_SWAP_REQUEST,
        data
    }
}


const reducer = (state = initialState,action) => {
    switch (action.type) {

        case TOKEN_TRANSFER_SUCCESS:
            return {
                ...state,
            }

        case TOKEN_SWAP_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case TOKEN_SWAP_SUCCESS: 
            alert('토큰스왑 성공!')
        return{
            ...state,
            isLoading:false
        }

        case TOKEN_SWAP_ERROR:
            alert('토큰스왑실패')
        return{
            ...state,
            isLoading:false
        }

        default:
            return state;
    }
}

export default reducer