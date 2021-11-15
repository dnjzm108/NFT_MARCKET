const initalState = {
  isLoading: false,
  isError: false,
  category:[],
  designer:[],
  list: [],
  skip: 0,
}

export const INIT_EXPLORE_REQUEST = 'INIT_EXPLORE_REQUEST';
export const INIT_EXPLORE_SUCCESS = 'INIT_EXPLORE_SUCCESS'

export const GET_EXPLORE_REQUEST = 'GET_EXPLORE_REQUEST';
export const GET_EXPLORE_SUCCESS = 'GET_EXPLORE_SUCCESS';
export const GET_EXPLORE_ERROR = 'GET_EXPLORE_ERROR';

export const UPDATE_LIKE_REQUEST = 'UPDATE_LIKE_REQUEST';
export const UPDATE_LIKE_SUCCESS = 'UPDATE_LIKE_SUCCESS';
export const UPDATE_LIKE_ERROR = 'UPDATE_LIKE_ERROR';




export const MainPageInit = (data) =>{
  return {
    type:INIT_EXPLORE_REQUEST,
    data,
  }
}



export const ExploreRequest = (data) => {
  return {
    type: GET_EXPLORE_REQUEST,
    data,
  }
}

export const UpdateLike = (data)=>{
  return{
    type:UPDATE_LIKE_REQUEST,
    data,
  }
}


const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_EXPLORE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case INIT_EXPLORE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
      case INIT_EXPLORE_SUCCESS:
        return{
          ...state,
          isLoading:false,
          category:action.data.category,
          designer:action.data.designer,
          list:action.data.list,
          skip:action.data.skip,
        }
      

    case GET_EXPLORE_SUCCESS:
      let newList = [];
      if(action.data.skip==16){
      newList = [...action.data.list];
      }else{
      newList = [...state.list,...action.data.list]
      }
      return{
        ...state,
        list:newList,
        skip:action.data.skip,
        isLoading: false,
      }
    
      //에러처리 할 것
    case GET_EXPLORE_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
        }
    
    case UPDATE_LIKE_REQUEST:
      return state
    case UPDATE_LIKE_SUCCESS:
      const product_no = action.data.product_no;
      const type = action.data.type;
      let likeUpdateList = [...state.list];
      likeUpdateList.forEach((v,i)=>{
        if(v.product_no==product_no){
          if(type=='insert'){
            likeUpdateList[i].likes++;
            likeUpdateList[i].isLike=1;
          }else{
            likeUpdateList[i].likes--;
            likeUpdateList[i].isLike=0;
          }
        }
      })

      return {
        ...state,
        list:likeUpdateList
      }
    case UPDATE_LIKE_ERROR:
      return {
        ...state,
        isError:true,
      }


    default:
      return state
      
  }
}

export default reducer