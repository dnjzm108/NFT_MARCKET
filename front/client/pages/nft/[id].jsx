import Product_Detail_Component from "../../component/Product_Detail"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { url } from "../../saga/url"

const Product_Detail = () => {
    const router = useRouter()
    const { id } = router.query
    const [Img,setImg] = useState([])

    useEffect(async () => {
        if(id!=undefined){
            let data = {
                    product_no : id
                }
                let result = await axios.post(`${url}/product/product_detail`,data)
                console.log(result.data.img);
                result.data.img.map((v)=>{
                     setImg( v.img)  
                     console.log(v.img);
                    })
                }
    }, [id])

    return (
        <>
        {id 
        ?   <Product_Detail_Component Img={Img} />
        : <span>로딩중</span>
        }
        </>
    )
}




export default Product_Detail

