const initalState = {

    

    designer:{
        list:[{'name':'이재명','img':'/이재명.png'},{'name':'윤석열','img':'/윤석열.png'},{'name':'홍준표','img':'/홍준표.png'},{'name':'심상정','img':'/심상정.png'},{'name':'안철수','img':'/안철수.png'}],
        value:0
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

        value:0,
    }    
}





const reducer = (state = initalState, action) => {
    switch (action.type) {


        default:
            return state
    }
}

export default reducer