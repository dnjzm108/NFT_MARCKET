
const initialState = {
  isLoading:true,
  pageblock: [1],
  endpage: 1,
  list: [],
  searchData:{
    type: null,
    status:'all',
    sort:'new',
    search: null,
    page: 1,
    rows: 10,
  },
}



export const LIST_UPDATE_REQUEST = 'LIST_UPDATE_REQUEST'; 
export const LIST_UPDATE_SUCCESS = 'LIST_UPDATE_SUCCESS'; 
export const LIST_UPDATE_ERROR = 'LIST_UPDATE_ERROR'; 



export const ListUpdateRequest = data => {
  return{
    type:LIST_UPDATE_REQUEST,
    data
  }
}


const reducer = (state = initialState,action) => {
  switch (action.type) {

    case LIST_UPDATE_REQUEST:
          return {
              ...state,
              isLoading:true,
              searchData:{
                ...state.searchData,
                type:action.data.type,
                status:action.data.status,
                search:action.data.search,
                sort:action.data.sort,
                page:action.data.page,
                rows:action.data.rows,
              }
          }

      case LIST_UPDATE_SUCCESS:
          return{
              ...state,
              list:action.data.list,
              searchData:{
                ...state.searchData,
                page:action.data.page,
              },
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