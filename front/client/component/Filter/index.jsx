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



const tempdesigner = [{'name':'이재명','img':'/이재명.png'},{'name':'윤석열','img':'/윤석열.png'},{'name':'홍준표','img':'/홍준표.png'},{'name':'심상정','img':'/심상정.png'},{'name':'안철수','img':'/안철수.png'}];
const tempCurrency = [ {"name":'KLAY','img':'/klay.png'},{'name':'KRW','img':'/krw.png'}]
const tempCategory = [
  {name:'Top', img:'/top.png'},
  {name:'Outer', img:'outer.png'},
  {name:'Pants', img:'/pants.png'},
  {name:'Onpiece', img:'/onepiece.png'},
  {name:'Skirt', img:'/skirt.png'},
  {name:'Sneakers', img:'/sneakers.png'},
  {name:'Shoes', img:'/shoes.png'},
  {name:'Bag', img:'/bag.jpg'},
  {name:'Women`s bag', img:'/womenbag.png'},
  {name:'Sports/Goods', img:'/sports.png'},
  {name:'Headwear', img:'/headwear.png'},
  {name:'Socks/Legwear', img:'/socks.png'},
  {name:'Underwear', img:'/underwear.png'},
  {name:'Eyewear', img:'/eyewear.png'},
  {name:'Accessory', img:'/accessory.png'},
]

const Filter = () => {
  const [open,setOpen] = useState(false)
  const designer = useCheckBox(tempdesigner); 
  const currency = useChangeValue(tempCurrency)
  const category = useCheckBox(tempCategory);
  const Min = useInput(); 
  const Max = useInput(); 
  const test = useInput();

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

      <Input {...test} placeholder='테스트입니다.' width='100pw' msg='' />


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
        <CheckBoxes {...designer} useImage={true}/>
      </Panal>

      <Panal value='카테고리' scroll={true}>
        <CheckBoxes {...category} useImage={true}/>
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