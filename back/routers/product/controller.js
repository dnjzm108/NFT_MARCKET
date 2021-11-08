const { query,execute } = require("../../pool")
const {product_img,show_product_detail} =require("../../sql/product")

let product_detail = async (req,res) =>{
let {product_no} = req.body
console.log("++++++++++",req.body);
let params=[product_no]
 
let img = await execute(product_img(),params)
// let product = await execute(show_product_detail(),params)
console.log(img);
let data={img}
res.json(data)

}

module.exports ={
    product_detail
}