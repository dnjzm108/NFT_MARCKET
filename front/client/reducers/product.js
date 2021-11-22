const initalState = {
    loadding: false,
    product_info: [{
        product_id: null,
        product_no: null,
        color: null,
        size: null,
        qty: null,
        rest: null,
        price: null,
        name: null,
        explain: null,
        creater: null,
        date: null,
        likes: null,
        type: null,
        total_qty: null,
        leftover: null
    }],
    other_product: [{
        product_no:null,
        img:null
    }],
    auction_info:{
        auction_id: null,
        product_id: null,
        deadline: null,
        option: null
    },
    auction_history:[],
    product_img: [
        {img:null}
    ],
    auctions: false,
    notice_page: '',
    notice_info: {
        price:null,
        buyer:null,
        qty:null,
        dlvy_id:null,
        status:null,
        reciever:null,
        address:null,
        invoice:null,
        delivery_company:null,
        phone_number:null,
        request:null,
        color:null,
        size:null,
        name:null,
    },
    name_check:'',
    error_msg:null
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

const USER_NAME_CHECK = "USER_NAME_CHECK"
const USER_NAME_ERROR = "USER_NAME_ERROR"
const USER_NAME_SUCCESS = "USER_NAME_SUCCESS"

const UPDATE_BID = 'UPDATE_BID'
const UPDATE_REST = 'UPDATE_REST'

export const Name_Check = (data) =>{
    return{
        type:USER_NAME_CHECK,
        data
    }
 }

export const Notice_Info = (data) => {
    return {
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

export const UpdateBid = (data)=>{
    return{
        type: UPDATE_BID,
        data
    }
}

export const UpdateRest = (data)=>{
    return{
        type: UPDATE_REST,
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
            if (product_info.length == 5) {
                return {
                    ...state,
                    product_img: product_info[0],
                    product_info: product_info[1],
                    other_product: product_info[2],
                    auction_info: product_info[3],
                    auction_history:product_info[4],
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
                auctions: false,
                error_msg:action.msg
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
                notice_page: action.data
            }
        case IMMY_ERROR:
            return {
                ...state,
                loadding: false,
                notice_page: ''

            }

        case NOTICE_INFO:
            return {
                ...state,
                loadding: true,
                notice_page: ''
            }
        case NOTICE_INFO_SUCCESS:
            return {
                ...state,
                loadding: false,
                notice_info: action.data

            }
        case NOTICE_INFO_ERROR:
            return {
                ...state,
                loadding: false
            }

            case USER_NAME_CHECK:
                return{
                    ...state,
                    loadding: true
                }

            case USER_NAME_ERROR:
                return{
                    ...state,
                    loadding: false,
                    name_check:''
                }
                
            case USER_NAME_SUCCESS:
                return{
                    ...state,
                    loadding: false,
                    name_check:action.check
                }

        case UPDATE_REST:{
            let newProducts = [...state.product_info];
            newProducts.forEach((v,i)=>{
                if(v.product_no==action.data.product_no){
                    newProducts[i].rest  = action.data.rest
                }
            })
            return{
                ...state, 
                product_info:newProducts
            }
        }
        case UPDATE_BID:

            const prevHistory = [...state.auction_history].map(v=>{v.status='burial'; return v})
            const newBid = {
                auction_history_id: action.data.auction_history_id,
                bider: action.data.bider,
                bid: action.data.bid,
                status: 'bid',
                date: action.data.bid_date,
            }
            return{
                ...state,
                auction_info:{
                    ...state.auction_info,
                    deadline:action.data.deadline,
                },
                auction_history:[newBid,...prevHistory]
            }

        default:
            return state
    }
}

export default reducer