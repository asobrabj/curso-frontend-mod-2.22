import styled from "styled-components";
import {
  IStyle,
  fontSize,
  fontWheigt,
  marginFn,
  paddingFn,
} from "../../types/styles";

interface IHeadingStyle extends IStyle {}

export const Heading = styled.h1<IHeadingStyle>`
  font-size: ${(props) => (props.$fs ? fontSize(props.$fs) : "")};
  font-style: ${(props) => props.$fStyle || ""};
  font-weight: ${(props) => (props.$fw ? fontWheigt(props.$fw) : "")};
  font-family: ${(props) => props.$fFamily || ""};
  text-align: ${(props) => props.$tAlign || ""};
  text-transform: ${(props) => props.$tTransform || ""};
  color: ${(props) => props.$color || ""};
  background-color: ${(props) => props.$bgColor || ""};
  padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : "")};
  padding-top: ${(props) => (props.$pdTop ? props.$pdTop + "px" : "")};
  padding-left: ${(props) => (props.$pdLeft ? props.$pdLeft + "px" : "")};
  padding-right: ${(props) => (props.$pdRigth ? props.$pdRigth + "px" : "")};
  padding-bottom: ${(props) => (props.$pdBottom ? props.$pdBottom + "px" : "")};
  margin: ${(props) => (props.$mg ? marginFn(props.$mg) : "")};
  margin-top: ${(props) => (props.$mgTop ? props.$mgTop + "px" : "")};
  margin-left: ${(props) => (props.$mgLeft ? props.$mgLeft + "px" : "")};
  margin-right: ${(props) => (props.$mgRigth ? props.$mgRigth + "px" : "")};
  margin-bottom: ${(props) => (props.$mgBottom ? props.$mgBottom + "px" : "")};

  &.success {
    color: #83d563;
  }

  &.info {
    color: #00abff;
  }

  &.error {
    color: #ff0000;
  }

  &.alert {
    color: #f1ea13;
  }
`;
