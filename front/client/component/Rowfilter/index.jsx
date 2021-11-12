import { useDispatch, useSelector } from "react-redux";
import {ImCancelCircle} from 'react-icons/im'
import SelectBox from "../SelectBox";
import { UpdateFilter } from "../../reducers/filter";

const type_kor={
  'buy':"즉시구매",
  'auction':"경매",
}



const icon = () =>{
  return <ImCancelCircle size={12}/>
}





const Rowfilter = () => {
  const sortList = [
    {name:'최신 순',code:'new'},
    {name:'오래된 순',code:'old'},
    {name:'낮은 가격 순',code:'low'},
    {name:'높은 가격 순',code:'high'},
    {name:'좋아요 순',code:'like'}
  ]
  
  const dispatch= useDispatch()
  const {result} = useSelector(state=>state.filter);

  const handleChange = (code)=>{
    const selected = sortList.filter(v=>v.code==code).map(w=>w.code)[0]
    const data = {
      ...result,
      sort:selected
    }
    dispatch(UpdateFilter(data))
  }



  return (
    <div>
      <div>
        <div>{type_kor[result.type]}</div>
        <div>검색창</div>
        <div>
            <SelectBox list={sortList} onChangeValue={handleChange} now={result.sort}/>
        </div>
      </div>
    </div>
  );
}

export default Rowfilter;