import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex,
    flex_direction,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    align_items,
    justify_content,
    color,
    fontSize,
    float,
    border,
    borderRadius,
    textAlign,
    fontWeight,
    boxShadow,
    height,
    textOverflow,
    overflow,
    whiteSpace,
    cursor,
  } = props;

  const styles = {
      is_flex: is_flex,
      flex_direction:flex_direction,
      width: width,
      margin: margin,
      padding: padding,
      bg: bg,
      center: center,
      align_items: align_items,
      justify_content: justify_content,
      color: color,
      fontSize: fontSize,
      float: float,
      border: border,
      borderRadius: borderRadius,
      textAlign: textAlign,
      fontWeight: fontWeight,
      boxShadow: boxShadow,
      height:height,
      textOverflow:textOverflow,
      overflow:overflow,
      whiteSpace:whiteSpace,
      cursor:cursor,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  flex_direction:false,
  width: "1000px",
  padding: false,
  margin: "auto",
  bg: false,
  center: false,
  align_items:false,
  justify_content:false,
  color: "",
  fontSize: "20px",
  float: false,
  border: false,
  borderRadius: false,
  textAlign: false,
  fontWeight: "100",
  boxShadow: false,
  height:"100%",
  textOverflow:false,
  _onClick: () => {},
  overflow: "",
  whiteSpace: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.is_flex ? `display: flex; `: "")}
  ${(props) => (props.flex_direction ? `flex-direction: ${props.flex_direction}; `: "")}
  ${(props) => (props.center? `text-align: center;`: "")}
  ${(props) => (props.align_items? `align-items: ${props.align_items};`: "")}
  ${(props) => (props.justify_content? `justify-content: ${props.justify_content};`: "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : "")}
  ${(props) => (props.float ? `float: ${props.float};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : "")}
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
  ${(props) => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.textOverflow ? `text-overflow: ${props.textOverflow};` : "")}
  ${(props) => (props.whiteSpace ? `white-space: ${props.whiteSpace};` : "")}
  ${(props) => (props.overflow ? `overflow: ${props.overflow};` : "")}
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")}
`;

export default Grid;
