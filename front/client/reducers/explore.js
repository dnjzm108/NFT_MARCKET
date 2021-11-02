const initalState = {
  isLoading:false,
  isError:false,
  nft:[],
  skip:0,
}

const EXPLORE_REQUEST='EXPLORE_REQUEST';
const EXPLORE_SUCCESS='EXPLORE_SUCCESS';
const EXPLORE_ERROR='EXPLORE_ERROR';


export const ExploreRequest = (data)=>{
  return {
    type:EXPLORE_REQUEST,
    data,
  }
}



const reducer = (state = initalState, action) => {
  switch (action.type) {
    case EXPLORE_REQUEST:
      return{
        ...state,
        isLoading:true,
      }
    case EXPLORE_SUCCESS:
      let newSkip=20
      let newNFT=[];
      if(action.data.skip>0){
        newNFT=[...state.nft]
        newSkip = action.data.skip+20
      }
        return{
          ...state,
          isLoading:false,
          nft:[...newNFT,...action.data.nft],
          skip:newSkip
          // skip:action.data.skip+20,
        }
    case EXPLORE_ERROR:
      return{
        ...state,
        isLoading:false,
        isError:true,
      }


      default:
          return state
  }
}

export default reducer



const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};