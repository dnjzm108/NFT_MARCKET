import {StyledFavoriteList,Header} from './FavoriteList.csss'
import Gallery from '../../Gallery'
const FavoriteList = () => {
  return (
    <StyledFavoriteList>
      <Header>
        <h3>
        나의 관심 목록
        </h3>
      </Header>
      <FavoriteGallery/>
    </StyledFavoriteList>
  );
}

export default FavoriteList;