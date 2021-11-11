const initalState={
    loadding: false,
    product_info:{} 
}

const PRODUCT_PAGE_REQUEST = "PRODUCT_PAGE_REQUEST"
const PRODUCT_PAGE_SUCCESS = "PRODUCT_PAGE_SUCCESS"
const PRODUCT_PAGE_ERROR = "PRODUCT_PAGE_ERROR"

export const Product_Page_Request = (data) =>{
    return{
        type:PRODUCT_PAGE_REQUEST,
        data
    }
}

const reducer = (state = initalState,action) =>{
    switch(action.type){

        case PRODUCT_PAGE_REQUEST:
            return{
                ...state,
                loadding: true
            }
        case PRODUCT_PAGE_SUCCESS:
            return{
                ...state,
                product_info:action.data,
                loadding: false
            }
        case PRODUCT_PAGE_ERROR:
            return{
                ...state,
                loadding: false
            }

        default:
            return state
    }
}

export default reducer