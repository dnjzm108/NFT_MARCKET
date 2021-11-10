const { query, execute } = require("../../pool")
const { product_img, show_product_detail, add_like_sql, delete_like_sql,check_like_sql,auction_detail_sql,other_product_sql,create_order } = require("../../sql/product")

let product_detail = async (req, res) => {
    let { product_no } = req.body
    let params = [product_no]

    let img = await execute(product_img(), params)
    let product = await execute(show_product_detail(), params)
    let data = { img, product }

    res.json(data)

}



let create_like = async (req, res) => {
   let {product_no,nickname} = req.body;
   let params = [product_no,nickname]

   let result = await execute(add_like_sql(), params)
   res.json(result)
}


let delete_like = async (req, res) => {
   let {product_no,nickname} = req.body;
   let params = [product_no,nickname]

   let result = await execute(delete_like_sql(), params)
   res.json(result)
}

let check_like = async (req,res) =>{
    let {product_no,nickname} = req.body;
   let params = [product_no,nickname]

   let result = await execute(check_like_sql(),params)

   if(result == ''){
    res.json(false)
   }else{
    res.json(true)
   }
}

let auction_info = async (req,res) =>{
    let {product_id} = req.body;
    let params = [product_id]
 
    let result = await execute(auction_detail_sql(),params)
 
    if(result == ''){
     res.json(false)
    }else{
     res.json(result)
    }
}

let other_product = async(req,res) =>{
    let {product_code,product_no} =req.body;
    let params = [product_no]

    let result = await execute(other_product_sql(product_code),params)
    if(result == ''){
        res.json(false)
       }else{
        res.json(result)
       }
}

let order = (req,res) =>{
    console.log(req.body);
    console.log(create_order());
}
module.exports = {
    product_detail,
    create_like,
    delete_like,
    check_like,
    auction_info,
    other_product,
    order
}