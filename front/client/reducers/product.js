const initalState = {
    loadding: false,
    product_info: [],
    other_product: [],
    auction_info: [],
    product_img: [],
    auctions: false,
    notice_page: '',
    notice_info:{}
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

const NOTICE_INFO = "NOTICE_INFO"
const NOTICE_INFO_SUCCESS = "NOTICE_INFO_SUCCESS"
const NOTICE_INFO_ERROR = "NOTICE_INFO_ERROR"

export const Notice_Info = (data) =>{
    return{
        type: NOTICE_INFO,
        data
    }
}

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
                    product_img: product_info[0],
                    product_info: product_info[1],
                    other_product: product_info[2],
                    auction_info: product_info[3],
                    loadding: false
                }
            } else {
                return {
                    ...state,
                    product_img: product_info[0],
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
            return {
                ...state,
                loadding: true,
                auctions: true
            }
        case AUCTION_SUCCEESS:
            return {
                ...state,
                loadding: false,
                auctions: false
            }
        case AUCTION_ERROR:
            return {
                ...state,
                loadding: false,
                auctions: false
            }

        case APPLY_IMMY:
            return {
                ...state,
                loadding: true,
                notice_page: ''
            }
        case IMMY_SUCCEESS:
            return {
                ...state,
                loadding: false,
                notice_page : action.data
            }
        case IMMY_ERROR:
            return {
                ...state,
                loadding: false,
                notice_page: ''

            }

            case NOTICE_INFO:
                return{
                    ...state,
                    loadding:true,
                    notice_page: ''
                }
            case NOTICE_INFO_SUCCESS:
                return{
                    ...state,
                    loadding:false,
                    notice_info:action.data
                   
                }
            case NOTICE_INFO_ERROR:
                return{
                    ...state,
                    loadding:false
                }




        default:
            return state
    }
}

export default reducer