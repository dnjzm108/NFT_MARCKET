import { NFTListContainer,Header,Sorting } from "./NFTList css";



const NFTList = ({type}) => {

  const renderHeader = ()=>{
    switch(type){
      case 'sell':
        return '나의 판매 목록'
      case 'buy':
        return '나의 구매 목록'
      case 'auction':
        return '나의 경매 목록'
      default:
        return 'ERROR:404'
    }
  }

  return (
    <NFTListContainer>
      <Header>
        {renderHeader()}
      </Header>
      <Sorting>

      </Sorting>
     
    </NFTListContainer>
  );
}

export default NFTList;