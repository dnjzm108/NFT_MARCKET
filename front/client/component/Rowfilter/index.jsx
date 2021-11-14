import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import { useState } from "react";
import { ExploreRequest } from '../../reducers/explore';
import OptionBox from "../OptionBox/OptionBox";
import {BiSearch} from 'react-icons/bi'
import {StyledRowFilter} from './Rowfilter.css'
import SearchView from "../SearchView";
const sortList = [
  {name:'최신 순',code:'new'},
  {name:'오래된 순',code:'old'},
  {name:'낮은 가격 순',code:'low'},
  {name:'높은 가격 순',code:'high'},
  {name:'좋아요 순',code:'like'}
]




const Rowfilter = () => {
  const dispatch= useDispatch()
  const router = useRouter()
  const [search, setSearch] = useState()

    //정렬기준이 바뀔때.
    const handleSort = (code) => {
      let data = {...router.query}
      if(data["sort"]==code || code==null){
        delete data.sort; 
      }else{
          data["sort"]=code
      }
  
      router.push({
        pathname: '/',
        query: data,
      })
      dispatch(ExploreRequest({...router.query}));
    }

    //검색할때. 
    const handleSearch = (e) => {
      const temp = e.target.value;
      setSearch(temp)
    }
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {...router.query}
        data["search"]=search; 
      
      router.replace({
        pathname: '/',
        query: data,
      })
    }

    const renderTitle = () =>{
      switch(router.query.type){
        case 'buy':
          return <h3>즉시 구매 상품</h3>
        case 'auction':
          return <h3>경매 상품</h3>
        default:
          return <h3>전체 상품</h3>
        }
    }






  return (
    <StyledRowFilter>
        <div className='add-box'>
        <div>{renderTitle()}</div>
           <form className='search-box' onSubmit={(e) => handleSubmit(e)}>
              <BiSearch size={24} color={'#888'}/>
             <input id='search-input' type="text" placeholder='상품명/디자이너 검색' onChange={(e) => handleSearch(e)} />
           </form>
          <div>
            <OptionBox list={sortList}  onClick={handleSort} now={router.query.sort==undefined? 'new' : router.query.sort }/>
          </div>
        </div>
       <SearchView/>
    </StyledRowFilter>
  );
}

export default Rowfilter;