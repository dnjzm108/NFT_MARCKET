import { Product_Wrap, Middle_container, Seller_contain, Explain, Slide_container, Styled_Slide, Price_contain, Auction_contain, Center_contain } from './Product_Detail.css'
import Footter from '../../component/Footter'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navigation from '../Navigation';
import Button from '../Button'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Auction, Auction_History } from './Auction_Box';
import NowPopup from "./NowPopup"
import AucPopup from "./AucPopup"
import { useRouter } from 'next/router'
import axios from 'axios'
import { url } from "../../saga/url"
import SelectBox from '../SelectBox';
import useChangeValue from '../../hook/useChangeValue';
import Deleivery_address from '../Delivery_Address'


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";


const Product_detail = () => {
    const state_data = useSelector(state => state.user)
    const router = useRouter()
    const { id } = router.query

    const [auction, setAuction] = useState(true)
    const [ispopup, setIsPopup] = useState(false)
    const [isAuc, setIsAuc] = useState(false)
    const [ProductImg, setProductImg] = useState([])
    const [product_de, setProduct_de] = useState([])
    const [auction_data, setAuction_info] = useState([])
    const [other_product_data, setOther_product_data] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [option, setOption] = useState(0)
    const [select_qty, setSelect_qty] = useState(0)
    const [likes, setLikes] = useState(false)

    const data = {
        product_no: id
    }
    const info = {
        product_no: id,
        nickname: state_data.user_info.nickname,
    }

    useEffect(async () => {
        if (id != undefined) {
            let result = await axios.post(`${url}/product/product_detail`, data)
            setProductImg(result.data.img)
            setProduct_de(result.data.product)
            setIsLoading(false)
            let { type } = result.data.product[0]
            let { product_id } = result.data.product[0]
            let {product_no} = result.data.product[0]
            if (type == "auction") {
                let autcion_info = {
                    product_id
                }
                console.log(product_id);
                let result = await axios.post(`${url}/product/auction_info`, autcion_info)
                setAuction_info(result.data)
            }
            if (state_data.user_info.nickname !== undefined) {
                let checking_like = await axios.post(`${url}/product/check_like`, info)
                if (checking_like.data == false) {
                    setLikes(false)
                } else {
                    setLikes(true)
                }
            }
            let code_data = {
                product_code :product_no.substr(0,4),
                product_no
            }
            let other_product = await axios.post(`${url}/product/other_product`, code_data)
            setOther_product_data(other_product.data);
        }
    }, [id])

    const list = []
    product_de.map((v, i) => {
        return (
            list.push(`${v.color}(${v.size})(${product_de[i].price - product_de[0].price})`)
        )
    })
    const category = useChangeValue(list)
    useEffect(() => {
        // console.log("list+++++",category.list[category.value])
        // console.log("value+++++",category.value) 
        // console.log("result+++++",category.result) 
        setOption(category.value)
    }, [category])

    const qty_list = []
    if(product_de.length !== 0){
       for(let i=0; i <product_de[option].rest; i++){
           qty_list.push( i + 1)
       }
    }

    const qty = useChangeValue(qty_list)
    useEffect(() => {
        // console.log("list+++++",category.list[category.value])
        // console.log("value+++++",category.value) 
        // console.log("result+++++",category.result) 
        setSelect_qty(qty.result)
    }, [qty])

    const handlePopupImmy = () => {
        
        if(ispopup == false){
            if(state_data.user_info.nickname !==undefined){
                setIsPopup(!ispopup)
            }else{
                alert("로그인을 진행해주세요")
            }
        }else{
            setIsPopup(!ispopup)
        }
    }
    const handlePopupAuc = () => {

        if(isAuc == false){
            if(state_data.user_info.nickname !==undefined){
                setIsAuc(!isAuc)
            }else{
                alert("로그인을 진행해주세요")
            }
        }else{
            setIsAuc(!isAuc)
        }
    }

    const changeAuction = () => {
        setAuction(true)
    }
    const changeAuctionHist = () => {
        setAuction(false)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const onclickLike = async () => {
        let like_info = {
            product_no: id,
            nickname: state_data.user_info.nickname,
            likes :product_de[0].likes
        }
        if (state_data.user_info.nickname == undefined) {
            alert('로그인을 진행해 주세요')
        } else {
            if (likes == true) {
                let result = await axios.post(`${url}/product/delete_like`, like_info)
                setLikes(false)
            } else {
                let result = await axios.post(`${url}/product/create_like`, like_info)
                setLikes(true)
            }
        }

    }

    if (isLoading) {
        return (
            <span>로딩중</span>
        )
    }

    return (
        <>
            <Navigation />
            <Product_Wrap>
                <div>
                    <div>
                        <Button value="돌아가기" url="/" />
                    </div>

                    <div>
                        <Styled_Slide {...settings}>

                            {ProductImg.map((v, i) => {
                                return (
                                    <div key={i}>
                                        <h3><img src={v.img} /></h3>
                                    </div>
                                )
                            })}


                        </Styled_Slide>
                    </div>
                    <Middle_container>
                        <div>
                            <h1>{product_de[0].name}</h1>
                            <h3>{product_de[0].product_no}</h3>
                        </div>
                        <div>
                            <div>
                                <FavoriteBorderIcon />{product_de[0].likes}
                            </div>
                            {likes ?
                                <button style={{ background: "#6e0606" }} onClick={onclickLike}><FavoriteBorderIcon /></button>
                                :
                                <button onClick={onclickLike}><FavoriteBorderIcon /></button>
                            }

                        </div>
                    </Middle_container>

   
                        <Seller_contain>
                            <div>
                                <img src="" alt="" />
                                <h3>Created By</h3>
                                <h3>{product_de[0].creater}</h3>
                            </div>
                        </Seller_contain>
                    
                    <Center_contain >
                        {product_de[0].type !== "auction" ?
                        <>
                        <h1>남은수량 : {product_de[`${option}`].rest} 개</h1>
                        <SelectBox {...category} />
                        <SelectBox {...qty} />
                        </>
                    :
                    <div>
                    <h1>
                       color : {product_de[0].color}
                       </h1>
                       <h1>
                       size : {product_de[0].size}
                    </h1>
                    <h1>남은수량 : {product_de[`${option}`].rest} 개</h1>
                    </div>

                    }
                    </Center_contain>

                    {product_de[0].type !== "auction" ?
                        <Price_contain>
                            <h2> <img src="/klay.png" alt="" /> {product_de[`${option}`].price}</h2>
                            <Button value="즉시 구매" color="sky" func={handlePopupImmy} />
                        </Price_contain>
                        :
                        <Price_contain>
                            <h2>경매 시작가 - <img src="/klay.png" alt="" /> {product_de[`${option}`].price}</h2>

                        </Price_contain>}

                    {/* 팝업부분 */}

                    {ispopup ? 
                        <Deleivery_address  handlePopup={handlePopupImmy} option={option} select_qty={select_qty} product={product_de}/> : ""}
                    {isAuc ? <AucPopup handlePopup={handlePopupAuc} product={product_de} auction_data={auction_data}  /> : ""}

                    {product_de[0].type == "auction" ?
                        <Auction_contain>
                            <ul>
                                {auction ? <li onClick={changeAuction} style={{ color: "blue" }}>경매 하기</li> : <li onClick={changeAuction}>경매 하기</li>}
                                {!auction ? <li onClick={changeAuctionHist} style={{ color: "blue" }}>경매 히스토리</li> : <li onClick={changeAuctionHist}>경매 히스토리</li>}
                            </ul>

                            <div>
                                {auction ? <Auction handlePopup={handlePopupAuc} auction_data={auction_data} /> : <Auction_History auction_data={auction_data} />}

                            </div>
                        </Auction_contain>
                        : ''}

                    <Explain>
                        <h2>삼품 상세</h2>
                        <h4>{product_de[0].explain} </h4>
                    </Explain>

                    <Slide_container>
                        <div>
                            <h1>다른 NFT</h1>
                        </div>
                        <div>
                            <ul>
                               
                                  {  other_product_data !== undefined ?
                                  other_product_data.map((v,i)=>{
                                     let url =`/nft/${v.product_no}`;
                                    return(
                                    <Link href={url} key={i}><a><li><img src={v.img} /></li></a></Link>
                                    )
                                })
                                :<h1> 추천 상품이 없습니다</h1>
                            }
                             
                             
                            </ul>
                        </div>
                    </Slide_container>
                </div>
            </Product_Wrap>
            <Footter />

        </>
    )
}

export default Product_detail

