import { useDispatch, useSelector } from "react-redux";
import {ListUpdateRequest} from '../../reducers/mylist'
import {StyledPageBlock} from './Pageblock.css'

export const Pageblock = () => {
  const dispatch = useDispatch();
  const { pageblock, endpage,searchData } = useSelector(state=>state.mylist)
  const {user_info} = useSelector(state=>state.user)
  
  const handlePage = (v) => {
  
      const data={
        params:{
          ...searchData,
          page:v,
          rows:10,
          nickname:user_info.nickname,
        },
        nickname:user_info.nickname,
        auth:user_info.auth,
      }
      dispatch(ListUpdateRequest(data))
  }

  const renderPageBlock = () => {
    return pageblock.map((v, i) => {
      if(v==searchData.page){
        return (
          <button className='now'
            key={i}
          >
            {v}
          </button>
        ) 
      }else{  
        return (
          <button
            key={i}
            onClick={() => {
              handlePage(v);
            }}
          >
            {v}
          </button>
        );
      }

    });
    
  };

  return (
    <StyledPageBlock>
      <button
        onClick={() => {
          handlePage(1);
        }}
      >
        처음
      </button>
      {searchData.page>1 && <button
        onClick={() => {
          handlePage(searchData.page-1);
        }}
      >
        이전
      </button>}
      {renderPageBlock()}
      {searchData.page<endpage && <button
        onClick={() => {
          handlePage(searchData.page+1);
        }}
      >
        다음
      </button>}
      <button
        onClick={() => {
          handlePage(endpage);
        }}
      >
        끝
      </button>
    </StyledPageBlock>
  );
};



export default Pageblock;
