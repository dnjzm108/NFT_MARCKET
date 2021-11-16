const initalState = {
    isLoading: false,
    category:[],
    bid:{},
    deadline:{},
    extension:false,
}

export const MINT_REQUEST = "MINT_REQUEST"
export const MINT_SUCCESS = "MINT_SUCCESS"
export const AUCTION_REQUEST = "AUCTION_REQUEST"
export const AUCTION_SUCCESS = "AUCTION_SUCCESS"

export const GET_CATEGORY_REQUEST ="GET_CATEGORY_REQUEST"
export const GET_CATEGORY_SUCCESS ="GET_CATEGORY_SUCCESS"
export const GET_CATEGORY_ERROR ="GET_CATEGORY_ERROR"




export const Mint_REQUEST = data => {
    return {
        type: MINT_REQUEST,
        data,
    }
}

export const Auction_REQUEST = data =>{
    return{
        type: AUCTION_REQUEST,
        data,
    }
}

export const Getcategory_REQUEST =()=>{
    return{
        type: GET_CATEGORY_REQUEST,
    }
}

const reducer = (state = initalState,action) => {
    
    switch (action.type) {
        case GET_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                category:action.data.category,
                isLoading:false,
            }
        case GET_CATEGORY_ERROR:
            return {
                ...state,
                isLoading:false,
            }
        case MINT_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case MINT_SUCCESS:
            return{
                ...state,
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