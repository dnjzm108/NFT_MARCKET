import { CheckBoxContainer,CheckBoxItem,CheckBoxImageItem } from "./CheckBoxex.css";
import {BsCheckCircle} from 'react-icons/bs'

const CheckBoxes = ({list,result,onCheck,useImage}) => {

  const renderItem = () => { 
    return list.map((v,i)=>{
        return (
         <CheckBoxItem key={i}>
           <input id={`${v.name}${i}`} className='checkbox' type="checkbox"  onCheck={()=>{onCheck(v.code)}}/>
            <label htmlFor={`${v.name}${i}`}>{v.name}</label>
         </CheckBoxItem>
       )
    })
  }

  const renderIcon = (x) =>{
    if(typeof result == 'string'){
      if(result==x.name){
        return <i><BsCheckCircle size={32} color={'#1E73FA'}/></i>
      }else{
        return <i><img src={x.img} alt="" /></i>
      }
    }else if(typeof result == 'object'){
      if(result.includes(x.name)){
        return <i><BsCheckCircle size={32} color={'#1E73FA'}/></i>
      }else{
        return <i><img src={x.img} alt="" /></i>
      }
    }else{
      return <i><img src={x.img} alt="" /></i>
    }
  }

  const renderImageItem = () =>{    
    return list.map((v,i)=>{
      return (
        <CheckBoxImageItem key={i}>
            <input id={`${v}${i}`} className='checkbox' type="checkbox" onChange={()=>{onCheck(v.name)}}/>
            <label htmlFor={`${v}${i}`}>
              {renderIcon(v)}
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

export default CheckBoxes;