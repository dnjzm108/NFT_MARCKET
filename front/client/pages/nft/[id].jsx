import Product_Detail_Component from "../../component/Product_Detail"

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

const Product_Detail = () => {
   
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

