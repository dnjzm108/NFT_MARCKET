const initalState = {
  isLoading:true,
  category:null,
  designer:[],
  price_min:null,
  price_max:null,
  type:"immy",
  search:null,
  skip:0,
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
          ...action.data        
        }

        default:
            return {
              ...state
            }
    }
}

export default reducer


