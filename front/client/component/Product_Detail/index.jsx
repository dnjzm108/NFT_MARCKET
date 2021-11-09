import { Product_Wrap, Middle_container, Seller_contain, Explain, Slide_container, Styled_Slide, Price_contain, Auction_contain } from './Product_Detail.css'
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
    const [isLoading, setIsLoading] = useState(true)
    const [option, setOption] = useState(0)
    const [likes, setLikes] = useState(false)

    const data = {
        product_no: id
    }
    const info = {
        product_no: id,
        nickname: state_data.user_info.nickname
    }

    useEffect(async () => {
        if (id != undefined) {
            let result = await axios.post(`${url}/product/product_detail`, data)
            setProductImg(result.data.img)
            setProduct_de(result.data.product)
            setIsLoading(false)
            let { type } = result.data.product[0]
            let { product_id } = result.data.product[0]

            if (type == "auction") {
               
                let autcion_info = {
                    product_id
                }
                let result = await axios.post(`${url}/product/auction_info`, autcion_info)
                console.log(result.data);
                setAuction_info(result.data)
               
            }
            if (state_data.user_info.nickname !== undefined) {

                let checking_like = await axios.post(`${url}/product/auction_info`, info)
                if (checking_like.data == false) {
                    setLikes(false)
                } else {
                    setLikes(true)
                }
            }

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

    const handlePopup = () => {
        return (
            setIsPopup(!ispopup),
            setIsAuc(!isAuc)
        )
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
        if (state_data.user_info.nickname == undefined) {
            alert('로그인을 진행해 주세요')
        } else {
            if (likes == true) {
                let result = await axios.post(`${url}/product/delete_like`, info)
                setLikes(false)
            } else {
                let result = await axios.post(`${url}/product/create_like`, info)
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
                    <SelectBox {...category} />
                    {product_de[0].auction_id == null ?
                        <Price_contain>
                            <h4> <img src="/klay.png" alt="" /> {product_de[`${option}`].price}</h4>
                            <Button value="즉시 구매" color="sky" func={handlePopup} />
                        </Price_contain>
                        : ''}

                    {/* 팝업부분 */}

                    {ispopup ? <NowPopup handlePopup={handlePopup} /> : ""}
                    {isAuc ? <AucPopup handlePopup={handlePopup} /> : ""}

                    {product_de[0].auction_id !== null ?
                        <Auction_contain>
                            <ul>
                                {auction ? <li onClick={changeAuction} style={{ color: "blue" }}>경매 하기</li> : <li onClick={changeAuction}>경매 하기</li>}
                                {!auction ? <li onClick={changeAuctionHist} style={{ color: "blue" }}>경매 히스토리</li> : <li onClick={changeAuctionHist}>경매 히스토리</li>}
                            </ul>

                            <div>
                                {auction ? <Auction handlePopup={handlePopup} auction_data={auction_data} /> : <Auction_History />}

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
                                <Link href="/"><a><li><img src="/logo.png" /></li></a></Link>
                                <Link href="/"><a><li><img src="/logo.png" /></li></a></Link>
                                <Link href="/"><a><li><img src="/logo.png" /></li></a></Link>
                                <Link href="/"><a><li><img src="/logo.png" /></li></a></Link>
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

