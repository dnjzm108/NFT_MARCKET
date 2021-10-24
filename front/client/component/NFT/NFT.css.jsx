import styled from "styled-components";

export const StyledNFT = styled.div`
  margin-bottom: 1vw;
  box-sizing: content-box;
  position: relative;
  z-index: 1;
  width: 286px;
  height: 407px;
  border: 1px solid rgb(229, 232, 235);
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    -webkit-box-shadow: 0px 7px 12px 2px rgba(119, 119, 119, 0.3);
    box-shadow: 0px 7px 12px 2px rgba(119, 119, 119, 0.3);
    /* box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px; */
    transition: all 0.1s ease 0s;
    transform: translateY(-1px);

    .buynow {
      color: #186887;
    }
  }

  .img_container > img {
    display: block;
    width: 286px;
    height: 286px;
    overflow: hidden;
  }

  .content_top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid rgb(229, 232, 235);
    height: 79px;
    padding: 12px;
  }

  .content_top_left {
    width: 170px;
    height: 55px;
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .content_name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
  }

  .content_creater {
    display: block;
    font-size: 12px;
  }

  .content_top_right {
    position: relative;
    height: 55px;
    font-size: 12;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    & > div:nth-child(1) {
      font-size: 12px;
    }
  }

  .content_price {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    font-weight: 600;

    img {
      width: 14px;
      height: 14px;
    }

    & > span,
    img {
      margin-left: 4px;
    }
  }

  .content_offer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 120px;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 11px;
    font-weight: 400;

    img {
      width: 11px;
      height: 11px;
    }

    & > span,
    img {
      margin-left: 3px;
    }
  }

  .content_bottom {
    position: relative;
    z-index: 1;
    height: 42px;
    padding: 12px;
    line-height: 14px;
  }

  .buynow {
    position: absolute;
    left: 12px;
    color: transparent;
    font-size: 14px;
    font-weight: 600;
  }

  .like_box {
    position: relative;
    float: right;
    display: flex;
    align-items: center;

    & > span {
      margin-left: 5px;
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
