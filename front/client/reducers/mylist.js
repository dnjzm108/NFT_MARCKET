const initialState = {
  isLoading:true,
  type: null,
  status:'all',
  search: null,
  page: 1,
  rows: 10,
  pageblock: [1],
  endpage: 1,
  list: [],
}



const LIST_UPDATE_REQUEST = 'LIST_UPDATE_REQUEST'; 
const LIST_UPDATE_SUCCESS = 'LIST_UPDATE_SUCCESS'; 
const LIST_UPDATE_ERROR = 'LIST_UPDATE_ERROR'; 



export const ListUpdateRequest = data => {
  return{
    type:LIST_UPDATE_REQUEST,
    data
  }
}


const reducer = (state = initialState,action) => {
  switch (action.type) {
    case LIST_UPDATE_REQUEST:
        const type = action.data.type || state.type
          return {
              ...state,
              isLoading:true,
              type:type,
              status:action.data.status,
              page:action.data.page,
              rows:action.data.rows,
          }

      case LIST_UPDATE_SUCCESS:
          return{
              ...state,
              list:action.data.list,
              page:action.data.page,
              totalpage:action.data.totalpage,
              pageblock:action.data.pageblock,
              isLoading:false
          }

      case LIST_UPDATE_ERROR:
          return{
              ...state,
              isLoading:false,
          }
      default:
          return state
  }
}

export default reducer