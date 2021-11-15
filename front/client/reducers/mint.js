const initalState = {
    isLoading: false,
    maincate:[],
}

const MINT_REQUEST = "MINT_REQUEST"
const MINT_SUCCESS = "MINT_SUCCESS"
export const MINT_MAIN_CATE_REQUEST = "MINT_MAIN_CATE_REQUEST"
export const MINT_MAIN_CATE_SUCCESS = "MINT_MAIN_CATE_SUCCESS"
export const MINT_MAIN_CATE_ERROR =  "MINT_MAIN_CATE_ERROR"
// const MINT_ERROR = "MINT_ERROR"


export const Mint_REQUEST = data => {
    return {
        type: MINT_REQUEST,
        data,
    }
}

export const Mint_MainCate_Request = () => {
    return {
        type: MINT_MAIN_CATE_REQUEST,
    }
}



const reducer = (state = initalState,action) => {
    switch (action.type) {
        
        case MINT_REQUEST:
            // console.log("mint_request",state)
            return {
                ...state,
                isLoading:true
            }

        case MINT_SUCCESS:
            return{
                ...state,
                isLoading:false,
            }

        case MINT_MAIN_CATE_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case MINT_MAIN_CATE_SUCCESS:
            return {
                ...state,
                maincate:action.data,
                isLoading:false,
            }
        case MINT_MAIN_CATE_ERROR:
            return {
                ...state,
                isLoading:false,
            }
        default:
            return state
    }
}

export default reducer