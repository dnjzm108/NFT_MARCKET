const initalState = {
    isLoading: false,
}

const MINT_REQUEST = "MINT_REQUEST"
const MINT_SUCCESS = "MINT_SUCCESS"
const MINT_ERROR = "MINT_ERROR"


export const Mint_REQUEST = data => {
    return {
        type: MINT_REQUEST,
        data,
    }
}




const reducer = (state = initalState,action) => {
    switch (action.type) {

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
        default:
            return state
    }
}

export default reducer