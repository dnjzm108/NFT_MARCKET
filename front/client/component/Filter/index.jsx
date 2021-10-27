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

const tempCurrency = [ {"name":'KLAY','img':'/klay.png'},{'name':'KRW','img':'/krw.png'}]

const Filter = () => {
  const {category,designer} = useSelector(state=>state.filter);
  const currency = useChangeValue(tempCurrency);
  const _category = useCheckBox(category);
  const _designer = useCheckBox(designer);
  const [open,setOpen] = useState(false);
  const Min = useInput(); 
  const Max = useInput(); 

  const handlePrice = ()=>{
    alert('가격적용')
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
        <CheckBoxes list={['판매 중','경매 중','판매 완료']}/>
      </Panal>

      <Panal value='가격'>
        <SelectBox {...currency} useImg={true} width='100%'/>
        <div className='price_input'>
          <Input {...Min} type='number' width='124px' placeholder='Min'/>
          <span>to</span>
          <Input {...Max} type='number' width='124px' placeholder='Max'/>
        </div>
          {(Min.value>Max.value && Max.value>0 )&& <span className='price_warning'>Minimum must be less than maximum</span>}
        <div className='price_button'>
          <Button value='Apply' func={handlePrice} color='sky' size='small'/>
        </div>
      </Panal>

      <Panal value='디자이너' scroll={true}>
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