const initalState = {
    isLoading: false,
    category:[],
    bid:{},
    mintSuccess:false,
    extension:false,
    product_code:"",
}

export const MINT_REQUEST = "MINT_REQUEST"
export const MINT_SUCCESS = "MINT_SUCCESS"
export const AUCTION_REQUEST = "AUCTION_REQUEST"
export const AUCTION_SUCCESS = "AUCTION_SUCCESS"

export const GET_CATEGORY_REQUEST ="GET_CATEGORY_REQUEST"
export const GET_CATEGORY_SUCCESS ="GET_CATEGORY_SUCCESS"
export const GET_CATEGORY_ERROR ="GET_CATEGORY_ERROR"

export const PRODUCT_OPTIONS_REQUEST = "PRODUCT_OPTIONS_REQUEST"
export const PRODUCT_OPTIONS_SUCCESS = "PRODUCT_OPTIONS_SUCCESS"
export const PRODUCT_OPTIONS_ERROR = "PRODUCT_OPTIONS_ERROR"



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


export const Product_options_REQUEST= data =>{
    return{
        type: PRODUCT_OPTIONS_REQUEST,
        data,
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
        case PRODUCT_OPTIONS_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case PRODUCT_OPTIONS_SUCCESS:
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
                mintSuccess:true,
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