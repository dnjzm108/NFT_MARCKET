
const initialState = {
  isLoading:true,
  pageblock: [1],
  endpage: 1,
  list: [],
  invoice:{
    invoice_num:null,
    delivery_company:null,
    ship_date:null,
  },
  ship_address:{
    reciever:null,
    address:null,
    request:null,
    recieve_type:null,
    phone_number:null,
    ready_date:null,
  },
  order:{
    isLoading:false,
    color:null,
    creater:null,
    name:null,
    order_date:null,
    order_id:null,
    order_price:null,
    product_no:null,
    qty:null,
    price:null,
    size:null,
    buyer:null,
  },
  receipt:{

  },
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

export const UPDATE_ORDER = `UPDATE_ORDER`;

export const UPDATE_SHIP_REQUEST = 'UPDATE_SHIP_REQUEST'; 
export const UPDATE_SHIP_SUCCESS = 'UPDATE_SHIP_SUCCESS'; 
export const UPDATE_SHIP_ERROR = 'UPDATE_SHIP_ERROR'; 

export const ListUpdateRequest = data => {
  return{
    type:LIST_UPDATE_REQUEST,
    data
  }
}

export const UpdateShipRequest = data =>{
  return{
    type:UPDATE_SHIP_REQUEST,
    data
  }
}


export const UpdateOrder = data =>{
  return{
    type:UPDATE_ORDER,
    data,
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
      
      case UPDATE_ORDER:
        return {
          ...state,
          order:{
            ...state.order,
            ...action.data
          }
        }
      case UPDATE_SHIP_REQUEST:
        return{
          ...state,
          order: {
            ...state.order,
            isLoading:true,
          }
        }
      case UPDATE_SHIP_SUCCESS:
        alert('배송지 입력이 완료되었습니다.')
        const order_id=action.data.order_id;
        const updateShipList = [...state.list].map((v)=>{
          if(v.order_id==order_id){
            let target = {...v};
            target.dlvy_status='ready'
            return target;
          }
          return v;
        });
        return{
          ...state,
          order: {
            ...state.order,
            isLoading:false,
          },
          list:updateShipList,
        }
      case UPDATE_SHIP_ERROR:
        return{
          ...state,
          order: {
            ...state.order,
            isLoading:false,
          }
        }
      default:
          return state
  }
}

export default reducer