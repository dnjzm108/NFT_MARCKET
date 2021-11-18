import { Product_Wrap, Middle_container, Seller_contain, Explain, Slide_container, Styled_Slide, Price_contain, Auction_contain, Center_contain } from './Product_Detail.css'
import Footter from '../../component/Footter'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navigation from '../Navigation';
import Button from '../Button'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Auction, Auction_History } from './Auction_Box';
// import NowPopup from "./NowPopup"
import AucPopup from "./AucPopup"
import { useRouter } from 'next/router'
import axios from 'axios'
import { url } from "../../saga/url"
import SelectBox from '../SelectBox';
import useChangeValue from '../../hook/useChangeValue';
import Deleivery_address from '../Delivery_Address'
import { useDispatch } from 'react-redux'
import { Product_Page_Request } from '../../reducers/product';
import Loadding from '../Loadding'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";


const product_detail = () => {
    const user_state = useSelector(state => state.user)
    const {user_info,IsLogin} = user_state
    const product_state = useSelector(state => state.product)
    const { loadding,auctions, product_img, product_info, auction_info, other_product } = product_state
    const dispatch = useDispatch();
    const router = useRouter()
    const { id } = router.query

    const[auction,setAuction] =useState(true)
    const [ispopup, setIsPopup] = useState(false)
    const [isAuc, setIsAuc] = useState(false)
    const [option, setOption] = useState(0)
    const [select_qty, setSelect_qty] = useState(0)
    const [likes, setLikes] = useState(false)

    const data = {
        product_no: id
    }
    const info = {
         product_no: id,
        nickname: user_info.nickname,
    }

    useEffect(async () => {
        if (id != undefined) {
            dispatch(Product_Page_Request(data))

            if (user_info.nickname !== undefined) {
                let checking_like = await axios.post(`${url}/product/check_like`, info)
                if (checking_like.data.response == false) {
                    setLikes(false)
                } else {
                    setLikes(true)
                }
            }else{
                setLikes(false)
            }
        }
    }, [id,likes,IsLogin,auctions])

    

    const list = []
    product_info.map((v, i) => {
        return (
            list.push(`${v.color}(${v.size})(${product_info[i].price - product_info.price})`)
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
    if (product_info.length !== 0) {
        for (let i = 0; i < product_info[option].rest; i++) {
            qty_list.push(i + 1)
        }
    }

    const qty = useChangeValue(qty_list)
    useEffect(() => {
        setSelect_qty(qty.result)
    }, [qty])

    const handlePopupImmy = () => {
        if (ispopup == false) {
            if (IsLogin == true) {
                setIsPopup(!ispopup)
            } else {
                alert("로그인을 진행해주세요")
            }
        } else {
            setIsPopup(!ispopup)
        }
    }
    const handlePopupAuc = () => {
        if (isAuc == false) {
            if (IsLogin == true) {
                setIsAuc(!isAuc)
            } else {
                alert("로그인을 진행해주세요")
            }
        } else {
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
            nickname: user_info.nickname,
            likes: product_info[0].likes
        }
        if (user_state.user_info.nickname == undefined) {
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

    if (product_info.length == 0) {
        return (
            <Loadding />
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

                            {product_img.map((v, i) => {
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
                            <h1>{product_info[0].name}</h1>
                            <h3>{product_info[0].product_no}</h3>
                        </div>
                        <div>
                            <div>
                                <FavoriteBorderIcon />{product_info[0].likes}
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
                            <h3>{product_info[0].creater}</h3>
                        </div>
                    </Seller_contain>

                    <Center_contain >
                        {product_info[0].type !== "auction" ?
                            <>
                                <h1>남은수량 : {product_info[`${option}`].rest} 개</h1>
                                <SelectBox {...category} />
                                <SelectBox {...qty} />
                            </>
                            :
                            <div>
                                <h1>
                                    color : {product_info[0].color}
                                </h1>
                                <h1>
                                    size : {product_info[0].size}
                                </h1>
                                <h1>남은수량 : {product_info[`${option}`].rest} 개</h1>
                            </div>

                        }
                    </Center_contain>

                    {product_info[0].type !== "auction" ?
                        <Price_contain>
                            <h2> <img src="/klay.png" alt="" /> {product_info[`${option}`].price}</h2>
                            <Button value="즉시 구매" color="sky" func={handlePopupImmy} />
                        </Price_contain>
                        :
                        <Price_contain>
                            <h2>경매 시작가 - <img src="/klay.png" alt="" /> {product_info[`${option}`].price}</h2>

                        </Price_contain>}

                    {/* 팝업부분 */}

                    {ispopup ?
                        <Deleivery_address handlePopup={handlePopupImmy} option={option} select_qty={select_qty}/> : ""}
                    {isAuc ? <AucPopup handlePopup={handlePopupAuc} product={product_info} auction_info={auction_info} /> : ""}

                    {product_info[0].type == "auction" ?
                        <Auction_contain>
                            <ul>
                                {auction ? <li onClick={changeAuction} style={{ color: "blue" }}>경매 하기</li> : <li onClick={changeAuction}>경매 하기</li>}
                                {!auction ? <li onClick={changeAuctionHist} style={{ color: "blue" }}>경매 히스토리</li> : <li onClick={changeAuctionHist}>경매 히스토리</li>}
                            </ul>

                            <div>
                                {auction ? <Auction handlePopup={handlePopupAuc} /> : <Auction_History />}

                            </div>
                        </Auction_contain>
                        : ''}

                    <Explain>
                        <h2>상품 상세</h2>
                        <h4>{product_info[0].explain} </h4>
                    </Explain>

                    <Slide_container>
                        <div>
                            <h1>다른 NFT</h1>
                        </div>
                        <div>
                            <ul>

                                {other_product !== false ?
                                    other_product.map((v, i) => {
                                        let url = `/nft/${v.product_no}`;
                                        return (
                                            <Link href={url} key={i}><a><li><img src={v.img} /></li></a></Link>
                                        )
                                    })
                                    : <h1> 추천 상품이 없습니다</h1>
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

export default product_detail

