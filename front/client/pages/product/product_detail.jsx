import styled from 'styled-components'
import { Footter } from '../../component/Footter/footter'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import ShareIcon from '@mui/icons-material/Share';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product_detail = () => {
    return (
        <>

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

const Product_Wrap = styled.div`
&{
   width: 100%;
   background: #fff;
}

& > div {
    width: 824px;
    padding: 0 12px;
    box-sizing: border-box;
    margin: 0 auto;

}

    & > div > div:nth-child(2){
        width: 800px;
        height: 800px;
        padding: 80px;
        box-sizing: border-box;
        background: #DCE6F0;
    }
    & > div > div:nth-child(2) > div{
        width: 640px;
        height: 640px;
        background: #ffffff;
    }
`

const Middle_container = styled.div`
& > div:nth-child(1){
    display: inline-block;
    width: 500px;
    height: 150px;
    padding: 30px 0;
    box-sizing: border-box;
}
& > div:nth-child(1) > h1{
   font-size: 48px;
}
& > div:nth-child(1) > h3{
   font-size: 28px;
   color: #2D374166;
   margin: 10px 0;
}
& > div:nth-child(2){
    display: inline-block;
    width: 250px;
    height: 150px;
    float: right;
    padding: 30px 0;
    box-sizing: border-box;
}
& > div:nth-child(2) > button{
    width: 200px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 10px;
    margin: 5px 0;
}
`

const Seller_contain = styled.div`
&{
    width: 100%;
    border-top: 1px solid rgba(20, 30, 40, 0.1);
    border-bottom: 1px solid rgba(20, 30, 40, 0.1);
    padding: 10px;
    box-sizing: border-box;

}

& > div {
    /* margin: 0 auto; */
    text-align:center;

}
`
const Explain = styled.div`
&{
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
}
& > h4{
    margin-top: 10px;
}
`
const Slide_container = styled.div`
&{
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
}
& > div:nth-child(1) > h1{
    display: inline-block;
}
& > div:nth-child(1) > button{
    display: inline-block;
    width: 110px;
    height: 40px;
    padding: 8px 16px;
    box-sizing: border-box;
    float: right;
    background: #ffffff;
    border-radius: 5px;
    color: #2D3741B3;
    font-weight: bold;
    font-size: 15px;

}
& > div:nth-child(2){
    margin-top: 30px;
}
& > div:nth-child(2)>ul{
    width: 100%;
    height: 200px;
    overflow: hidden;

}
& > div:nth-child(2)>ul>li{
    display: inline-block;
    width: 185px;
    height: 185px;
    border: 1px solid #000000;
    border-radius: 10px;
    margin: 0 5px;
    }
` 