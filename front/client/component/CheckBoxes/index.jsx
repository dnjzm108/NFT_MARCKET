import { CheckBoxContainer,CheckBoxItem,CheckBoxImageItem } from "./CheckBoxex.css";
import {BsCheckCircle} from 'react-icons/bs'

const index = ({list,value,onCheck,useImage}) => {
  

  const renderItem = () => { 
    return list.map((v,i)=>{
        return (
         <CheckBoxItem key={i}>
           <input id={`check${i}`} className='checkbox' type="checkbox" />
            <label htmlFor={`check${i}`}>{v}</label>
         </CheckBoxItem>
       )
    })
  }

  const renderImageItem = () =>{    
    return list.map((v,i)=>{
      return (
        <CheckBoxImageItem key={i}>
            <input id={`check${i}`} className='checkbox' type="checkbox" onChange={()=>{onCheck(i)}}/>
            <label htmlFor={`check${i}`}>
              {value & (1<<i) ? <i><BsCheckCircle size={32} color={'#1E73FA'}/></i> : <i><img src={v.img} alt="" /></i>}
              <span>
              {v.name}
              </span>
           </label>
        </CheckBoxImageItem>
      )
    })
  }

  return (
    <CheckBoxContainer>
       {useImage ? renderImageItem():renderItem()}
    </CheckBoxContainer>
  );
}

export default index;