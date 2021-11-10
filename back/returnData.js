
const successData = (result)=>{
  return{
    success:true,
    response:result,
    error:null
  }
}

const errorData = ({code,message})=>{
  return{
    success:false,
    response:null,
    error:{
      code:code,
      message:message,
    }
  }
}


module.exports={
  successData,
  errorData,
}