const initalState = {
  isLoading:false,
  result:{
    category:null,
    designer:[],
    price_min:null,
    price_max:null,
    type:"immy",
    search:null,
    sort:null,
    skip:0,
  }
}


const UPDATE_FILTER = 'UPDATE_FILTER'

export const UpdateFilter = (data) =>{
  return{
    type:UPDATE_FILTER,
    data,
  }
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
      case UPDATE_FILTER :
        return{
          ...state,
          result: {
            ...action.data        
          }
        }

        default:
            return state
    }
}

export default reducer



