import { StyledFilter } from "./Filter.css";
import {RiFilter3Line, RiArrowLeftLine, RiArrowRightLine} from 'react-icons/Ri'
import Button from "../Button";
import Panal from "../Panal";
import { useState } from "react";
import SelectBox from "../SelectBox";
import Input from '../Input'
import useChangeValue from "../../hook/useChangeValue";
import useInput from '../../hook/useInput';
import CheckBoxes from '../CheckBoxes'
import useCheckBox from "../../hook/useCheckbox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getDesignerRequest} from '../../reducers/filter'
import router from "next/router";
const tempCurrency = [ {"name":'KLAY','img':'/klay.png'},{'name':'KRW','img':'/krw.png'}]

const Filter = () => {
  const {category,designer,status,price} = useSelector(state=>state.filter);
  const dispatch = useDispatch()
  const currency = useChangeValue(tempCurrency);
  const _category = useCheckBox(category);
  const _designer = useCheckBox(designer);
  const _status = useCheckBox(status);
  const [open,setOpen] = useState(true);
  const Min = useInput(); 
  const Max = useInput(); 

  useEffect(()=>{
    if(open){
      dispatch(getDesignerRequest())
    }
  },[open])

  
  
  useEffect(()=>{
    const data ={
      category:category.result,
      status:status.result,
      price,
      designer:_designer.result
    }


  },[_designer.value])
  
  const handlePrice = ()=>{
    router.push({
      pathname:'/explore',
      query:{...data}
    })
  }
  return (
    <StyledFilter>
      {open
        ?
        <div className='filter_open'>
        <div className='filter_header'  onClick={()=>{setOpen(false)}}>
        <div>
          <i><RiFilter3Line size={24} /></i>
          <span>필터</span>
        </div>
        <div >
          <i className='arrow'><RiArrowLeftLine size={24}/></i>
        </div>
      </div>
      <Panal value='상태' >
        <CheckBoxes {..._status}/>
      </Panal>

      <Panal value='가격'>
        <SelectBox {...currency} useImg={true} width='100%'/>
        <div className='price_input'>
          <Input {...Min} type='number' width='124px' placeholder='Min'/>
          <span>to</span>
          <Input {...Max} type='number' width='124px' placeholder='Max'/>
        </div>
          {(Min.value>Max.value && Max.value>0 )&& <span className='price_warning'>Minimum must be less than Maximum</span>}
        <div className='price_button'>
          <Button value='Apply' func={handlePrice} color='sky' size='small'/>
        </div>
      </Panal>

      <Panal value='디자이너' scroll={true} >
        <CheckBoxes {..._designer} useImage={true}/>
      </Panal>

      <Panal value='카테고리' scroll={true}>
        <CheckBoxes {..._category} useImage={true}/>
      </Panal>
      </div>

        :
        
        <div className="filter_close" >
          <div className='filter_header'  onClick={()=>{setOpen(true)}}>
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