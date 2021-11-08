const initalState = {
  isLoading:true,
  result:{
    category:null,
    designer:[],
    price_min:null,
    price_max:null,
    type:"immy",
    search:null,
    skip:0,
  }
}


const UPDATE_SEARCH = 'UPDATE_SEARCH'


const reducer = (state = initalState, action) => {
    switch (action.type) {
      case UPDATE_SEARCH :
      return{
        ...state,
        result:action.data
      }

        default:
            return {
              ...state
            }
    }
}

export default reducer


