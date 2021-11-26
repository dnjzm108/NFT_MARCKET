function multipFloat(arr){
  let fixCnt=0;
  arr.forEach(v=>{
      if(!Number.isInteger(Number(v))){
          let tempCnt = String(v).split('.')[1].length;
          fixCnt+=tempCnt;
      }
  })

  const tempResult = arr.reduce((r,v)=>{return r*v},1)
  return tempResult.toFixed(fixCnt);
}

module.exports={
  multipFloat
}