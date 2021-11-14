
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

const error400 = ({code,message})=>{
  return{
    success:false,
    response:null,
    error:{
      code:'400',
      message:'Bad Request	이 응답은 잘못된 문법으로 인하여 서버가 요청을 이해할 수 없음.'
    }
  }
}
const error403 = ({code,message})=>{
  return{
    success:false,
    response:null,
    error:{
      code:'403',
      message:'클라이언트가 콘텐츠에 접근할 권리를 가지고 있지 않습니다.'
    }
  }
}
const error404 = ({code,message})=>{
  return{
    success:false,
    response:null,
    error:{
      code:'404',
      message:'요청받은 리소스를 찾을 수 없습니다.'
    }
  }
}
const error500 = ({code,message})=>{
  return{
    success:false,
    response:null,
    error:{
      code:'500',
      message:'서버가 처리 방법을 모르는 상황이 발생했습니다.'
    }
  }
}



module.exports={
  successData,
  errorData,
  error400,
  error403,
  error404,
  error500,
}