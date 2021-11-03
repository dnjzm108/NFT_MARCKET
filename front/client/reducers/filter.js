const initalState = {
  isLoading:true,
  designer:{
      list:[],
      result:[]
  },
  category : {
      list:[
          {name:'Top', img:'/top.png'},
          {name:'Outer', img:'outer.png'},
          {name:'Pants', img:'/pants.png'},
          {name:'Onpiece', img:'/onepiece.png'},
          {name:'Skirt', img:'/skirt.png'},
          {name:'Sneakers', img:'/sneakers.png'},
          {name:'Shoes', img:'/shoes.png'},
          {name:'Bag', img:'/bag.jpg'},
          {name:'Women`s bag', img:'/womenbag.png'},
          {name:'Sports/Goods', img:'/sports.png'},
          {name:'Headwear', img:'/headwear.png'},
          {name:'Socks/Legwear', img:'/socks.png'},
          {name:'Underwear', img:'/underwear.png'},
          {name:'Eyewear', img:'/eyewear.png'},
          {name:'Accessory', img:'/accessory.png'},
      ],
      result:[],
  },
  price:{
    min:null,
    max:null,
  },
  status:{
    list:['판매 중','경매 중','판매 완료'],
    result:[],
  }


}


const GET_DESIGNER_REQUEST = 'GET_DESIGNER_REQUEST'
const GET_DESIGNER_SUCCESS = 'GET_DESIGNER_SUCCESS'
const GET_DESIGNER_ERROR = 'GET_DESIGNER_ERROR'

export const getDesignerRequest = ()=>{
  return{
    type:GET_DESIGNER_REQUEST,
  }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
      case GET_DESIGNER_REQUEST:
        return{
          ...state,
          isLoading:true,
        }
      case GET_DESIGNER_SUCCESS:
        return{
          ...state,
          isLoading:false,
          designer:{
            ...state.designer,
            list:action.data
          }
        }

      case GET_DESIGNER_ERROR:
        alert('디자이너 정보를 불러오는데 실패했습니다.')
        return{
          ...state,
          isLoading:false,
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