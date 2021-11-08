const initalState = {
  isLoading: false,
  isError: false,
  category:[],
  designer:[],
  nft: [],
  skip: 0,
}

const EXPLORE_REQUEST = 'EXPLORE_REQUEST';
const EXPLORE_SUCCESS = 'EXPLORE_SUCCESS';
const EXPLORE_ERROR = 'EXPLORE_ERROR';

const GET_FILTER_DATA_REQUEST = 'GET_FILTER_DATA_REQUEST';
const GET_FILTER_DATA_SUCCESS = 'GET_FILTER_DATA_SUCCESS';
const GET_FILTER_DATA_ERROR = 'GET_FILTER_DATA_ERROR';

export const ExploreRequest = (data) => {
  return {
    type: EXPLORE_REQUEST,
    data,
  }
}

export const GetFilterData = ()=>{
  return{
    type:GET_FILTER_DATA_REQUEST,
  }
}



const reducer = (state = initalState, action) => {
  switch (action.type) {
    case EXPLORE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case EXPLORE_SUCCESS:
      let newSkip = 10
      let newNFT = [];
      if (action.data.skip > 0) {
        newNFT = [...state.nft]
        newSkip = +action.data.skip + 10
      }

      return {
        ...state,
        isLoading: false,
        nft: [...newNFT, ...action.data.nft],
        skip: newSkip,
      }
    case EXPLORE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case GET_FILTER_DATA_REQUEST:
      return {
        ...state
      }
    case GET_FILTER_DATA_SUCCESS:
      return {
        ...state,
        category:action.data.category,
        designer:action.data.designer,
      }
    case GET_FILTER_DATA_ERROR:
      return {
        ...state
      }


    default:
      return {
      ...state
      }
  }
}

export default reducer



const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

