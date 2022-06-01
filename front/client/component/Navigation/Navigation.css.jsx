import styled from "styled-components";

export const NavigationWrap = styled.div`
  position: sticky;
  z-index: 2;
  top:0;
  left:0;
  width: 100vw;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  border-bottom: 2px solid rgb(229, 232, 235);
`;

export const NavigationContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  letter-spacing: 1px;
  font-family: "ROKABold";
  font-size: 16px;
  color: #464646;
  font-weight: 600;
  text-transform: uppercase;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  a{
    width: 210px;
    height: 70px;
    overflow: hidden;
  }
  a > img{
    position: absolute;
    top: -30px;
    left: 0;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.div`
  margin-right: 1.5rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  padding: 1.625rem 1rem 1.375rem;
  color: ${(props) => (props.isClicked ? "#1e73fa" : "rgba(0,0,0,.6)")};
  border-bottom: ${(props) =>
    props.isClicked ? "4px solid #1e73fa" : "4px solid transparent"};
  &:hover {
    color: ${(props) => (props.isClicked ? "#1e73fa" : "rgba(0,0,0,.8)")};
  }
`;
