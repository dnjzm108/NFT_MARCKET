import { MyNFT } from "./MyNFT css";

const MyNFT = () => {

  const sample = () =>{
    alert('함수 샘플')
  }

  return (
    <li>
      <div className='MyNFT_img'><img src="/green.png" alt="" /></div>
      <div className='MyNFT_info'>
        <ul>
          <li><strong className='MyNFT_name'>제품명</strong></li>
          <li><span className='MyNFT_price'>가격</span><span className='MyNFT_date'>날짜</span></li>
        </ul>
        <dl>
          <dt className='MyNFT_state'>상태</dt>
          <dd className='MyNFT_state_detail'><p>상태설명</p></dd>
        </dl>
      </div>
      <div className='MyNFT_designer'>
        <img src="/홍준표.png" alt="" />
        <span>홍준표</span>
      </div>
      <div className='MyNFT_action'>
        <Button func={sample} value={버튼}/>
      </div>
    </li>
  );
}

export default MyNFT;