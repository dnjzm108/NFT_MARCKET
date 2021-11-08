
// 상품상세 보여주기
// 수정해야함~!!!!!!!!! 좋아요를 따로 불러와야 될듯
const show_product_detail = () => {
    return (
        `SELECT * FROM product_detail as A
LEFT JOIN product as B
ON B.product_no = A.product_no
WHERE B.product_no = ?`
    )
}

const product_img = () =>{
    return(
        `SELECT img from img WHERE product_no = ?`
    )
}

module.exports = {
    show_product_detail,
    product_img
}