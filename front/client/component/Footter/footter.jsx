import styled from 'styled-components'
// import logo from "../../img/logo.png

export const Footter = () => {
    return (
        <>
            <Footter_Wrap>
                <div>
                    <img src="../../public/logo.png" />
                    <div>
                        <button>의견 남기기</button>
                        <button>문의하기</button>
                    </div>
                </div>
                <div>
                    <span>Copyright © 2021 GroundX. All rights reserved.</span>
                    <div>|</div>
                    <a href="">개인정보 처리 방침</a>
                    <div>|</div>
                    <a href="">서비스 이용 약관</a>
                    <div>|</div>
                    <a href="">서비스 운영 정책</a>
                </div>
                <div>
                    <span>NFT_MARCKET 사업자등록번호 : 000-00-00000</span>
                    <div>|</div>
                    <span>대표:NFT_MARCKET</span>
                    <div>|</div>
                    <span>서울특별시 강남구 테헤란로98길(대치동)  NFT_MARCKET 빌딩</span>
                </div>
            </Footter_Wrap>

        </>
    )

}


const Footter_Wrap = styled.div`
   &{
   position: relative;
    bottom: 0;
    width: 100%;
    height: 244px;
    padding: 58px 80px;
    background: #141E28;
    box-sizing: border-box;
   }
   & > div:nth-child(1){
       height: 70px;
   }
   & > div:nth-child(1) > div{
       float: right;
   }
   & > div:nth-child(1) > div > button{
       width: 125px;
       height: 48px;
       color: #ffffff;
       padding: 10px 24px;
       background: #141E28;
       box-sizing: border-box;
       border: 1px solid #ffffff;
       border-radius: 5px;
       margin: 0 5px;
   }
   & > div:nth-child(1) > div > button:hover{
       background: #46505A;
   }
   & > div{
    color: #FFFFFF66;
    margin: 10px 0;
   } 
   & > div > div{
       display: inline-block;
       margin: 0 12px;
   }
   & > div > a{
    color: #FFFFFF66;
   }
`