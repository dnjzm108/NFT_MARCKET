const initalState = {
    loadding: false,
    product_info: [],
    other_product: [],
    auction_info: [],
    product_img:[],
    auctions:false
}

const PRODUCT_PAGE_REQUEST = "PRODUCT_PAGE_REQUEST"
const PRODUCT_PAGE_SUCCESS = "PRODUCT_PAGE_SUCCESS"
const PRODUCT_PAGE_ERROR = "PRODUCT_PAGE_ERROR"

const APPLY_AUCTION = "APPLY_AUCTION"
const AUCTION_SUCCEESS = "AUCTION_SUCCEESS"
const AUCTION_ERROR = "AUCTION_ERROR"

const APPLY_IMMY = "APPLY_IMMY"
const IMMY_SUCCEESS = "IMMY_SUCCEESS"
const IMMY_ERROR = "IMMY_ERROR"



export const Apply_Immy = (data) => {
    return {
        type: APPLY_IMMY,
        data
    }
}
export const Apply_Auction = (data) => {
    return {
        type: APPLY_AUCTION,
        data
    }
}
export const Product_Page_Request = (data) => {
    return {
        type: PRODUCT_PAGE_REQUEST,
        data
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {

        case PRODUCT_PAGE_REQUEST:
            return {
                ...state,
                loadding: true
            }
        case PRODUCT_PAGE_SUCCESS:
            let { product_info } = action
            if (product_info.length == 4) {

                return {
                    ...state,
                    product_img :product_info[0],
                    product_info: product_info[1],
                    other_product: product_info[2],
                    auction_info: product_info[3],
                    loadding: false
                }
            } else {
                return {
                    ...state,
                    product_img:product_info[0],
                    product_info: product_info[1],
                    other_product: product_info[2],
                    loadding: false
                }
            }

        case PRODUCT_PAGE_ERROR:
            return {
                ...state,
                loadding: false
            }
        case APPLY_AUCTION:
            return{
                ...state,
                loadding:true,
                auctions:true
            }
        case AUCTION_SUCCEESS:
            return{
                ...state,
                loadding:false,
                auctions:false
            }
        case AUCTION_ERROR:
            return{
                ...state,
                loadding:false,
                auctions:false
            }
        default:
            return state
    }
}

export default reducer