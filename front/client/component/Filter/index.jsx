import { StyledFilter } from "./Filter.css";
import { RiFilter3Line, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/Ri'
import Button from "../Button";
import Panal from "../Panal";
import { useState } from "react";
import SelectBox from "../SelectBox";
import CustomInput from '../CustomInput'
import useInput from '../../hook/useInput';
import CheckBoxes from '../CheckBoxes'
import SelectBtnBox from '../SelectBtnBox';
import { useDispatch, useSelector } from "react-redux";
const tempCurrency = [{ "name": 'KLAY', 'img': '/klay.png' }, { 'name': 'KRW', 'img': '/krw.png' }]
import { useRouter } from "next/router";
import OptionBox from "../OptionBox/OptionBox";


const Filter = () => {
  const router = useRouter()
  const {category,designer } = useSelector(state => state.explore);
  const [open, setOpen] = useState(true);
  const typeList = [
    {name:'즉시구매',code:'buy'},
    {name:'경매',code:'auction'}
  ]

  const Min = useInput('');
  const Max = useInput('');




 ///가격이 바뀔때.
  const handlePrice = () => {
    if (Min.value == "" && Max.value == "") {
      alert('값을 입력해주세요')
      return;
    }

    if(Max.value!='' && ( +Min.value>+Max.value) ){
      alert('Max 값은 Min 값보다 크거나 같아야 합니다.')
      return;
    }
    let data = {...router.query}

    if(Min.value>0 && Max.value==''){
      data["priceMin"] =Min.value; 
    }else if(Min.value=='' && Max.value>0){
      data["priceMax"] =Max.value; 
    }else{
      data["priceMin"] =Min.value; 
      data["priceMax"] =Max.value; 
    }
    
    console.log(data)
    router.push({
      pathname: '/',
      query: data,
    })
  }

  //카테고리가 바뀔때.
  const handleCategory = (code) => {
    let data = {...router.query}
    if(data["category"]==code|| code==null){
      delete data.category; 
    }else{
        data["category"]=code
    }
    router.push({
      pathname: '/',
      query: data,

    })
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
          <Panal value='카테고리' >
            {category.map((v, i) => {
              return <SelectBtnBox header={true} list={v.list} title={v.name} key={v.name + i} onClick={handleCategory} now={router.query.category} />
            })}
          </Panal>
          <Panal value='디자이너' >
            <CheckBoxes list={designer} result={router.query.designer} onCheck={handleDesigner} useImage={true}/>
         </Panal>  

          <Panal value='가격'>
            <div className='klay'>
            <img src='./klay.png' alt="" />
            <span>Klay</span>
            </div>
            
            <div className='price_input'>
              <CustomInput {...Min} type='number' width='124px' placeholder='Min' />
              <span>to</span>
              <CustomInput {...Max} type='number' width='124px' placeholder='Max' />
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