import {Product_Wrap,Middle_container,Seller_contain,Explain,Slide_container} from './Product_Detail.css'
import { Footter } from '../../component/Footter/Footter'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navigation from '../../component/NavBigation/index';

const Product_detail = () => {
    return (
        <>
            <Navigation />
            <Product_Wrap>
                <div>
                    <div>
                        <Link href="/">
                            <a><ArrowBackIcon />돌아가기</a>
                        </Link>
                        {/* <div>
                            <button><ShareIcon /></button>
                            <button><NewReleasesIcon /></button>
                        </div> */}
                    </div>

                    <div>
                        <div>사진들어갈곳</div>
                    </div>


                    <Middle_container>
                        <div>
                            <h1>오늘도 이렇게 코딩을</h1>
                            <h3>#123719y847190309</h3>
                        </div>
                        <div>
                            <button><FavoriteBorderIcon /></button>
                            <button>BUY</button>
                        </div>
                    </Middle_container>


                    <Seller_contain>
                        <div>
                            <img src="" alt="" />
                            <h3>Created By</h3>
                            <h3>jin</h3>
                        </div>
                    </Seller_contain>

                    <Explain>
                        <h2>삼품 상세</h2>
                        <h4>이것은 NFT 입니다. </h4>
                    </Explain>

                    <Slide_container>
                        <div>
                            <h1>다른 NFT</h1>
                            <button>프로필 보기</button>
                        </div>
                        <div>
                            <ul>
                                <li>사진</li>
                                <li>사진</li>
                                <li>사진</li>
                                <li>사진</li>
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

