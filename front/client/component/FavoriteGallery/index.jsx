import {StyledFavoriteGalley,Header} from './FavoriteGallery.css'
import NFT from "../NFT";
import {useSelector,useDispatch} from 'react-redux'
import {UpdateLike} from "../../reducers/explore"
import { useRouter } from "next/router";
import Router from "next/router";
import { BiSearch } from 'react-icons/bi'
import OptionBox from '../OptionBox/OptionBox'
import {statusList,sortList,typeList} from '../MyNFT/NFTList/list'
import {ListUpdateRequest,ListAddRequest} from '../../reducers/mylist'
import {useState,useEffect} from 'react'
import {DeleteFavorite} from '../../reducers/mylist'
const FavoriteGallery = () => {
  const dispatch = useDispatch()
  const {list,searchData} = useSelector((state)=>state.mylist);
  const {user_info,IsLogin} = useSelector(state=>state.user)
  const [input,setInput] = useState(''); 
  const router = useRouter()
  const {type} = router.query
  const [fetch,setFetch] = useState(false);


  const fetchMoreNFT = async () => {
    setFetch(true);
    const data = {
      nickname:user_info.nickname,
      auth:user_info.auth,
      params:{
        ...searchData,
        nickname:user_info.nickname,
        page:searchData.page+1,
      }
    };
    dispatch(ListAddRequest(data))
    setFetch(false);
  };
  
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (
      scrollTop + clientHeight >= scrollHeight &&
      fetch === false) {
        fetchMoreNFT();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  

  const handleClick = (event,product_no,isLike) => {
    if (
      event.target.className == "like_btn" ||
      event.target.parentNode.className == "like_btn" ||
      event.target.parentNode.parentNode.className == "like_btn"
    ) {
        const nickname = user_info.nickname;
        if(nickname==null || nickname==undefined)return;
        const data = {
          product_no,
          nickname,
          isLike,
          auth:user_info.auth
        }
        dispatch(DeleteFavorite(data))
    } else {
      Router.push(`/nft/${product_no}`)
    }
  };

  const handleSort = (code)=>{
    const data = {
      nickname:user_info.nickname,
      auth:user_info.auth,
      params:{
        ...searchData,
        nickname:user_info.nickname,
        sort:code
      }
    };
    dispatch(ListUpdateRequest(data))
  }






  const handleStatus = (code)=>{
    const data = {
      nickname:user_info.nickname,
      auth:user_info.auth,
      params:{
        ...searchData,
        nickname:user_info.nickname,
        status:code
      }
    };
    dispatch(ListUpdateRequest(data))
  }



  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
      nickname:user_info.nickname,
      auth:user_info.auth,
      params:{
        ...searchData,
        search:input,
        nickname:user_info.nickname,
        
      }
    };
    dispatch(ListUpdateRequest(data))
  }

  const handleSearchInPut = (e)=>{
    setInput(e.target.value)
  }

  const renderNFTItem = ()=>{
    if(list.length==0){
      return (
        <div>조건을 만족하는 검색 결과가 없습니다.</div>
      )
    }

    return list.map((v,i)=>{
      return <NFT 
        key={v.product_no}
        type={v.type}
        product_no={v.product_no}
        name={v.name}
        price={v.price}
        creater = {v.creater}
        likes = {v.likes}
        img = {v.img}
        isLike = {user_info.nickname}
        handleClick={handleClick}
      />
    })
  }
  return (
    <StyledFavoriteGalley>
       <Header>
            <h3>{typeList[type]}</h3>
            <form className='search-box' onSubmit={(e) => handleSubmit(e)}>
              <BiSearch size={24} color={'#888'} />
              <input id='search-input' type="text" placeholder={'상품명/상품번호/디자이너 검색'} onChange={(e) => handleSearchInPut(e)} />
            </form>
            <div className='absolute'>
              <OptionBox list={statusList[type]} onClick={handleStatus} now={searchData.status}/>
              <OptionBox list={sortList[type]} onClick={handleSort} now={searchData.sort}/>
            </div>
          </Header>
    {renderNFTItem()}
    </StyledFavoriteGalley>
  );
}

export default FavoriteGallery;