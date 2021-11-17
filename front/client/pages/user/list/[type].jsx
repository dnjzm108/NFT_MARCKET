import Navigation from "../../../component/Navigation";
import Info from "../../../container/Info";
import SideMenu from "../../../component/SideMenu";
import NFTList from "../../../component/MyNFT/NFTList";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { Pageblock } from "../../../component/Pageblock";

const auction_list = ["전체", "입찰", "유찰", "낙찰"]
const auction_eng = ["all", "bid", "burial", "success"]

const buy_list = ["전체","배송지 미입력","상품준비중", "배송중", "구매완료"]
const buy_eng = ["all","wait","ready", "delivery", "completed"]

const immySell_list = ["전체","판매중", "매진","판매중단"]
const immySell_eng = ["all","sale","soldout", "stop"]

const auctionSell_list = ["전체","경매중", "경매종료","배송 요청 대기","배송 요청","배송중","구매완료"]
const auctionSell_eng = ["all","true", "false","wait","ready", "delivery", "completed"]


const List = () => {
  const state_data = useSelector(state => state.user)
  const router = useRouter()
  const { type } = router.query

  if(type==undefined){
    return <span>로딩중</span>
  }
  return (
    <>
    <Navigation/> 
    <Info>
        <SideMenu/>
        <div>
        {type=="buy" && <NFTList type={type} list={buy_list} eng={buy_eng}/>}
        {type=="auction" && <NFTList type={type} list={auction_list} eng={auction_eng}/>}
        {type=="immysell" && <NFTList type={type} list={immySell_list} eng={immySell_eng}/>}
        {type=="auctionsell" && <NFTList type={type} list={auctionSell_list} eng={auctionSell_eng}/>}
        <Pageblock/>
        </div>
    </Info>
    </>
  );
}

export default List;