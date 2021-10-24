import { StyledExplore } from "./Explore.css";
import Filter from "../../component/Filter";
import Gallery from "../../component/Gallery";
import Link from "next/link"
const Explore = () => {
  return (
    <div>
      <StyledExplore>
        <div>
          <Link href='/'>
            <a href="">메인</a>
          </Link>
          <Link href='/user/login'>
            <a href="">유저 로그인</a>
          </Link>
          <Link href='/user/join'>
            <a href="">유저 조인</a>
          </Link>
          <Link href='/user/delevery'>
            <a href="">유저 딜리버리</a>
          </Link>
          <Link href='/user/info'>
            <a href="">유저 인포</a>
          </Link>
          <Link href='/create'>
            <a href="">크리에이트</a>
          </Link>

        </div>
      {/* 헤더 만들면 여기 추가 */}
      <div>
        <Filter/>
        <Gallery/>
      </div>
      </StyledExplore>
    </div>
  );
}

export default Explore;