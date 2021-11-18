let auctions = []; 


function startAuction({auction_id,deadline}){

  let deadTime = new Date(deadline);
  const newdeadline = new Date(deadline).setMinutes(deadTime.getMinutes()+5);
  const x = deadTime.getTime();
  const y = new Date(newdeadline).getTime();
   
  const now = new Date().getTime();

  console.log(now-y)
  const remain = 1
  const timeout  = setTimeout(()=>{
    console.log(new Date().getTime())
  },1000)


}

startAuction({auction_id:1,deadline:'2021-11-17 15:38:05'});