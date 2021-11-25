
const initialState = {
  isLoading:true,
  isError:false,
  error:{
    code:null,
    message:null,
  },
  pageblock: [1],
  endpage: 1,
  list: [],
  invoiceLoading:false,
  shipLoading:false,
  completeLoading:false,
  transactionLoading:false,
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

export const UPDATE_SHIP_REQUEST = 'UPDATE_SHIP_REQUEST'; 
export const UPDATE_SHIP_SUCCESS = 'UPDATE_SHIP_SUCCESS'; 
export const UPDATE_SHIP_ERROR = 'UPDATE_SHIP_ERROR'; 

export const UPDATE_INVOICE_REQUEST = 'UPDATE_INVOICE_REQUEST'; 
export const UPDATE_INVOICE_SUCCESS = 'UPDATE_INVOICE_SUCCESS'; 
export const UPDATE_INVOICE_ERROR = 'UPDATE_INVOICE_ERROR'; 

export const TRANSACTION_REQUEST = 'TRANSACTION_REQUEST'; 

export const UPDATE_DELIVERY_REQUEST = 'UPDATE_COMPLETE_REQUEST'; 
export const UPDATE_DELIVERY_SUCCESS = 'UPDATE_COMPLETE_SUCCESS'; 
export const UPDATE_DELIVERY_ERROR = 'UPDATE_COMPLETE_ERROR'; 




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



export const UpdateInvoiceRequest = data =>{
  return{
    type:UPDATE_INVOICE_REQUEST,
    data,
  }
}

export const TransactionRequest = ()=>{
  return{
    type:TRANSACTION_REQUEST,
  }
}

export const UpdateDeliveryRequest = data =>{
  return{
    type:UPDATE_DELIVERY_REQUEST,
    data,
  }
}

const reducer = (state = initialState,action) => {
  switch (action.type) {

    case LIST_UPDATE_REQUEST:
      console.log(action.data)
          return {
              ...state,
              isLoading:true,
              searchData:{
                ...state.searchData,
                type:action.data.params.type,
                status:action.data.params.status,
                search:action.data.params.search,
                sort:action.data.params.sort,
                page:action.data.params.page,
                rows:action.data.params.rows,
              },
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
              isError:true,
              error:{
                ...action.data,
              }
          }
      
      case UPDATE_SHIP_REQUEST:
        return{
          ...state,
          shipLoading:true,
        }
      case UPDATE_SHIP_SUCCESS:{

        alert('배송지 입력이 완료되었습니다.')
        const order_id=action.data.order_id;
        const newList = [...state.list].map((v)=>{
          if(v.order_id==order_id){
            let target = {...v};
            target.dlvy_status='ready'
            return target;
          }
          return v;
        });
        return{
          ...state,
          shipLoading:false,
          list:newList,
        }
      }
      case UPDATE_SHIP_ERROR:
        alert('배송지 입력 실패')
        return{
          ...state,
          shipLoading:false,
        }
        case UPDATE_INVOICE_REQUEST:
          return{
            ...state,
            invoiceLoading:true,

          }
        case UPDATE_INVOICE_SUCCESS:{

          alert('송장 입력이 완료되었습니다.')
          const order_id=action.data.order_id;
          const newList = [...state.list].map((v)=>{
            if(v.order_id==order_id){
              let target = {...v};
              target.dlvy_status='delivery'
              return target;
            }
            return v;
          });
          return{
            ...state,
            invoiceLoading:false,
            list:newList,
          }
        }
        case UPDATE_INVOICE_ERROR :
          alert('송장입력 실패')
          return{
            ...state,
            invoiceLoading:false,
          }

        case TRANSACTION_REQUEST:
          return{
            ...state,
            transactionLoading:true,
          }

          case UPDATE_DELIVERY_REQUEST:
            return{
              ...state,
            }
          case UPDATE_DELIVERY_SUCCESS:{
            alert('구매 확정되었습니다.')
            const order_id=action.data.order_id;
            const newList = [...state.list].map((v)=>{
              if(v.order_id==order_id){
                let target = {...v};
                target.dlvy_status='completed'
                return target;
              }
              return v;
            });
            return{
              ...state,
              list:newList,
              transactionLoading:false
            }
          }
          case UPDATE_DELIVERY_ERROR :
          alert('구매확정 실패')
            return{
                ...state,
                transactionLoading:false,
            }
      default:
          return state
  }
}

export default reducer