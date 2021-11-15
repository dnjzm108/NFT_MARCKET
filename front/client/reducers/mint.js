const initalState = {
    isLoading: false,
    maincate:[],
    middlecate:[],
}

const MINT_REQUEST = "MINT_REQUEST"
const MINT_SUCCESS = "MINT_SUCCESS"
export const MINT_MAIN_CATE_REQUEST = "MINT_MAIN_CATE_REQUEST"
export const MINT_MAIN_CATE_SUCCESS = "MINT_MAIN_CATE_SUCCESS"
export const MINT_MAIN_CATE_ERROR =  "MINT_MAIN_CATE_ERROR"
export const MINT_MIDDLE_CATE_REQUEST = "MINT_MIDDLE_CATE_REQUEST"
export const MINT_MIDDLE_CATE_SUCCESS = "MINT_MIDDLE_CATE_SUCCESS"
// const MINT_ERROR = "MINT_ERROR"
export const AUCTION_REQUEST = "AUCTION_REQUEST"
export const AUCTION_SUCCESS = "AUCTION_SUCCESS"



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

export const Mint_MiddleCate_Request =()=>{
    return{
        type: MINT_MIDDLE_CATE_REQUEST,
    }
}

export const Auction_REQUEST = data =>{
    return{
        type: AUCTION_REQUEST,
        data,
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
        case MINT_MIDDLE_CATE_REQUEST:
            return{
                ...state,
                isLoading:true,
            }
        case MINT_MIDDLE_CATE_SUCCESS:
            return{
                ...state,
                middlecate:action.data,
                isLoading:false,
            }
        case AUCTION_REQUEST:
            return{
                ...state,
                isLoading:true,
            }
        case AUCTION_SUCCESS:
            return{
                ...state,
                isLoading:false,
            }
            
        default:
            return state
    }
}

export default reducer