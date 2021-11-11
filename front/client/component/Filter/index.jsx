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
import { getDesignerRequest } from '../../reducers/filter'
import router from "next/router";
const tempCurrency = [{ "name": 'KLAY', 'img': '/klay.png' }, { 'name': 'KRW', 'img': '/krw.png' }]
import { GetFilterData, ExploreRequest } from '../../reducers/explore';
import { UpdateFilter } from "../../reducers/filter"

const Filter = () => {
  const dispatch = useDispatch()
  const { result } = useSelector(state => state.filter);
  const { category, designer } = useSelector(state => state.explore)
  const currency = useChangeValue(tempCurrency);
  const [open, setOpen] = useState(true);
  const typeList = [
    {name:'즉시구매',code:'buy'},
    {name:'경매',code:'auction'}
  ]

  



  const Min = useInput();
  const Max = useInput();
  useEffect(() => {

    dispatch(GetFilterData())
  }, [])

  const handlePrice = () => {
    if (Min.value == null || Max.value == null) {
      alert('값을 입력해주세요')
      return;
    }
    const data = {
      ...result,
      price_min: Min.value,
      price_max: Max.value,
    }
    dispatch(UpdateFilter(data));
  }

  const handleCategory = (code) => {
    const data = {
      ...result,
      category: code,
    }
    dispatch(UpdateFilter(data));
  }

  const handleType = (code) => {
    const data = {
      ...result,
      type:code,
    }
    dispatch(UpdateFilter(data));
  }

  const handleSort = (code) => {
    const data = {
      ...result,
      sort:code
    }
    dispatch(UpdateFilter(data));
  }

  const handleDesigner = (name) => {
    let designer;
    if (result.designer.includes(name)) {
      designer = result.designer.filter(v => v!= name);
    } else {
      designer = [...result.designer, name];
    }
    const data = {
      ...result,
      designer,
    }
    dispatch(UpdateFilter(data));
  }



  const renderBtnBox = () => {
    return category.map((v, i) => {
      return <SelectBtnBox list={v.list} title={v.name} key={v.name + i} onClick={handleCategory} now={result.category} />
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

            <SelectBtnBox list={typeList} title='판매유형' onClick={handleType} now={result.type} />


          <Panal value='카테고리' >
            {renderBtnBox()}
          </Panal>
          <Panal value='디자이너' >
        <CheckBoxes list={designer} result={result.designer} onCheck={handleDesigner} useImage={true}/>
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