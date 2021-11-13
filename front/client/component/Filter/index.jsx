import { StyledFilter } from "./Filter.css";
import { RiFilter3Line, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/Ri'
import Button from "../Button";
import Panal from "../Panal";
import { useState } from "react";
import SelectBox from "../SelectBox";
import Input from '../Input'
import useChangeValue from "../../hook/useChangeValue";
import useInput from '../../hook/useInput';
import CheckBoxes from '../CheckBoxes'
import SelectBtnBox from '../SelectBtnBox';
import useCheckBox from "../../hook/useCheckbox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const tempCurrency = [{ "name": 'KLAY', 'img': '/klay.png' }, { 'name': 'KRW', 'img': '/krw.png' }]
import { ExploreRequest } from '../../reducers/explore';
import { useRouter } from "next/router";
import OptionBox from "../OptionBox/OptionBox";


const Filter = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {category,designer } = useSelector(state => state.explore);
  const currency = useChangeValue(tempCurrency);
  const [open, setOpen] = useState(true);
  const typeList = [
    {name:'즉시구매',code:'buy'},
    {name:'경매',code:'auction'}
  ]
  const sortList = [
    {name:'최신 순',code:'new'},
    {name:'오래된 순',code:'old'},
    {name:'낮은 가격 순',code:'low'},
    {name:'높은 가격 순',code:'high'},
    {name:'좋아요 순',code:'like'}
]
  



  const Min = useInput();
  const Max = useInput();

 ///가격이 바뀔때.
  const handlePrice = () => {
    if (Min.value == null || Max.value == null) {
      alert('값을 입력해주세요')
      return;
    }
    let data = {...router.query}
    data["price_min"] =Min.value; 
    data["price_max"] =Max.value; 
    router.push({
      pathname: '/',
      query: data,
    })
    dispatch(ExploreRequest({...router.query}));
  }

  //카테고리가 바뀔때.
  const handleCategory = (code) => {
    let data = {...router.query}
    if(data["category"]==code){
      delete data.category; 
    }else{
        data["category"]=code
    }
    router.push({
      pathname: '/',
      query: data,
    })
    dispatch(ExploreRequest({...router.query}));
  }
  
  // 판매유형 바뀔때. 
  const handleType = (code) => {
    let data = {...router.query}
    if(data["type"]==code || code==null){
      delete data.type; 
    }else{
        data["type"]=code
    }
    router.push({
      pathname: '/',
      query: data,
    })
    dispatch(ExploreRequest({...router.query}));
  }
 
  //정렬기준이 바뀔때.
  const handleSort = (code) => {
    console.log(code)
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

  
  //디자이너가 바뀔때.
  const handleDesigner = (name) => {
      let data = {...router.query};
      if(data['designer']==undefined){
        data['designer']=name
      }else if(typeof data['designer'] == "string"){
        if(data['designer']==name){
          delete data.designer
        }else{
          data['designer']=[data['designer'],name]
        }
      }else{
        if(data['designer'].includes(name)){
          data['designer']=data['designer'].filter(v=>v!=name);
        }else{
          data['designer']=[...data['designer'],name]
        }
      }

      router.push({
        pathname: '/',
        query: data,
      })
      dispatch(ExploreRequest({...router.query}));
  }

  return (
    <StyledFilter>
      {open
        ?
        <div className='filter_open'>
          <div className='filter_header' onClick={() => { setOpen(false) }}>
            <div>
              <i><RiFilter3Line size={24} /></i>
              <span>필터</span>
            </div>
            <div >
              <i className='arrow'><RiArrowLeftLine size={24} /></i>
            </div>
          </div>
          <Panal value='판매유형' >
            <SelectBtnBox list={typeList} title='판매유형' onClick={handleType} now={router.query.type} />
          </Panal>
          <Panal value='정렬유형' >
          <OptionBox list={sortList}  onClick={handleSort} now={router.query.sort==undefined? 'new' : router.query.sort }/>
          </Panal>
          <Panal value='카테고리' >
            {category.map((v, i) => {
              return <SelectBtnBox list={v.list} title={v.name} key={v.name + i} onClick={handleCategory} now={router.query.category} />
            })}
          </Panal>
          <Panal value='디자이너' >
        <CheckBoxes list={designer} result={router.query.designer} onCheck={handleDesigner} useImage={true}/>
      </Panal>  

          <Panal value='가격'>
            <SelectBox {...currency} useImg={true} width='100%' />
            <div className='price_input'>
              <Input {...Min} type='number' width='124px' placeholder='Min' />
              <span>to</span>
              <Input {...Max} type='number' width='124px' placeholder='Max' />
            </div>
            {(+Min.value > +Max.value && Max.value > 0) && <span className='price_warning'>Minimum must be less than Maximum</span>}
            <div className='price_button'>
              <Button value='Apply' func={handlePrice} color='sky' size='small' />
            </div>
          </Panal>



        </div>

        :

        <div className="filter_close" >
          <div className='filter_header' onClick={() => { setOpen(true) }}>
            <div>
              <i className='arrow'><RiArrowRightLine size={24} /></i>
            </div>
          </div>
        </div>
      }


    </StyledFilter>
  );
}

export default Filter;