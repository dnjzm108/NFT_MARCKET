import { Product_Wrap, Middle_container, Seller_contain, Explain, Slide_container,Styled_Slide ,Price_contain,Auction_contain} from './Product_Detail.css'
import Footter from '../../component/Footter'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navigation from '../Navigation';
import Button from '../Button'
import { useState } from 'react';
import { Auction,Auction_History } from './Auction_Box';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";


const Product_detail = () => {
const [auction,setAuction] = useState(true)

const changeAuction = ()=>{
    setAuction(true)
}
const changeAuctionHist = () =>{
    setAuction(false)
}
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Styled_Slide>
                    </div>


                    <Middle_container>
                        <div>
                            <h1>오늘도 이렇게 코딩을</h1>
                            <h3>#123719y847190309</h3>

                        </div>
                        <div>
                            <button><FavoriteBorderIcon /></button>

                        </div>
                    </Middle_container>


                    <Seller_contain>
                        <div>
                            <img src="" alt="" />
                            <h3>Created By</h3>
                            <h3>jin</h3>
                        </div>
                    </Seller_contain>

                    <Price_contain>
                        <h4> <img src="/klay.png" alt="" /> 100</h4>
                        <Button value="즉시 구매" color="sky"/>
                    </Price_contain>

                    <Auction_contain>
                        <ul>
                            {auction ? <li onClick={changeAuction} style={{color:"blue"}}>경매 하기</li> :   <li onClick={changeAuction}>경매 하기</li>}
                          {!auction ?   <li onClick={changeAuctionHist} style={{color:"blue"}}>경매 히스토리</li>: <li onClick={changeAuctionHist}>경매 히스토리</li>}
                           
                        </ul>

                        <div>
                        {auction ?   <Auction/>: <Auction_History/>}

                        </div>
                    </Auction_contain>

                    <Explain>
                        <h2>삼품 상세</h2>
                        <h4>이것은 NFT 입니다. </h4>
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

