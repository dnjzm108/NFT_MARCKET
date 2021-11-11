import { useDispatch, useSelector } from "react-redux";
import {ListUpdateRequest} from '../../reducers/mylist'


export const Pageblock = () => {
  const dispatch = useDispatch();
  const { pageblock, endpage,page,type,status,sort,search } = useSelector(state=>state.mylist)
  
  const handlePage = (v) => {
      const data={
        status,
        type,
        sort,
        search,
        page:v,
        rows:10,
        nickname:'seong',
      }
      dispatch(ListUpdateRequest(data));
  }

  const renderPageBlock = () => {
    return pageblock.map((v, i) => {
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
    });
  };

  return (
    <>
      <button
        onClick={() => {
          handlePage(1);
        }}
      >
        처음
      </button>
      {renderPageBlock()}
      <button
        onClick={() => {
          handlePage(endpage);
        }}
      >
        끝
      </button>
    </>
  );
};



export default Pageblock;
