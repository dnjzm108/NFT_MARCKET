import { StyledButton, StyledAnchor } from "./Button.css";
import { useState } from "react";
import Link from "next/link";



const Button = (props) => {
  const { url, func, icon, value, type } = props;


 


  const bgColor = () => {
    switch (props.color) {
      case "sky":
        return "#E1F0FF";
      case "blue":
        return "#1E73FA";
      default:
        return "#ffffFF";
    }
  };

  const ftColor = () => {
    switch (props.color) {
      case "sky":
        return "#1E73FA";
      case "blue":
        return "#fff";
      default:
        return "#212529";
    }
  };

  const borderColor = () => {
    switch (props.color) {
      case "sky":
      case "blue":
        return "none";
      default:
        return "1px solid #aab4be";
    }
  };

  const padding = () => {
    switch (props.size) {
      case "small":
        return "10px 24px";
      case "medium":
        return "18px 24px";
      default:
        return "18px 24px";
    }
  };

  const mt = () => {
    if (props.mt) {
      return `${props.mt}px`;
    } else {
      return "0px";
    }
  };

  const hover = () => {
    switch (props.color) {
      case "sky":
      case "blue":
        return { bg: "#055fec", ft: "#ffffff", border: "none" };
      default:
        return { bg: "#f9fbfd", ft: "#aab4be", border: "1px solid #aab4be" };
    }
  };

  const hoverBg = () => {
    switch (props.color) {
      case "sky":
      case "blue":
        return "#055fec";
      default:
        return "#f9fbfd";
    }
  };

  const hoverFontColor = () => {
    switch (props.color) {
      case "sky":
      case "blue":
        return "#ffffff";
      default:
        return "#aab4be";
    }
  };

  const hoverBorder = () => {
    switch (props.color) {
      case "sky":
      case "blue":
        return "none";
      default:
        return "1px solid #aab4be";
    }
  };

  const mb = () => {
    if (props.mb) {
      return `${props.mb}px`;
    }
    return "0px";
  };

  const mr = () => {
    if (props.mr) {
      return `${props.mr}px`;
    }
    return "0px";
  };

  const ml = () => {
    if (props.ml) {
      return `${props.ml}px`;
    }
    return "0px";
  };

  if (url == undefined) {
    return (
      <StyledButton
        style={{
          marginTop: mt(),
          marginLeft: ml(),
          marginBottom: mb(),
          marginRight: mr(),
        }}
        onClick={() => func()}
        bgColor={bgColor()}
        ftColor={ftColor()}
        size={padding()}
        border={borderColor()}
        hoverBg={hoverBg()}
        hoverFontColor={hoverFontColor()}
        hoverBorder={hoverBorder()}
      >
        {icon && <i>{icon()}</i>}
        <span>{value}</span>
      </StyledButton>
    );
  } else {
    return (
      <Link href={url}>
        <StyledAnchor
          style={{
            marginTop: mt(),
            marginLeft: ml(),
            marginBottom: mb(),
            marginRight: mr(),
          }}
          bgColor={bgColor()}
          ftColor={ftColor()}
          size={padding()}
          border={borderColor()}
          hoverBg={hoverBg()}
          hoverFontColor={hoverFontColor()}
          hoverBorder={hoverBorder()}
        >
          {icon && <i>{icon()}</i>}
          <span>{value}</span>
        </StyledAnchor>
      </Link>
    );
  }
};

export default Button;
