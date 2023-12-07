import styled from "styled-components";
import {
  IStyle,
  fontSize,
  fontWheigt,
  marginFn,
  paddingFn,
} from "../../types/styles";

interface IInputLabelStyle extends IStyle {}

export const Label = styled.label<IInputLabelStyle>`
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #ffffff;

  span {
    color: red;
    margin-right: 3px;
  }
`;

export const Input = styled.input<IInputLabelStyle>`
  padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : "8px")};
  border: 1px solid #00abff;
  margin: ${(props) => (props.$mg ? marginFn(props.$mg) : "1px")};
  border-color: ${(props) => props.$bdColor || ""};
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid #00abff;
    margin: 0;
  }
`;

export const InputLabel = styled.div<IInputLabelStyle>`
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
  height: ${(props) => (props.$height ? props.$height + "px" : "")};
  border-color: ${(props) => props.$bdColor || ""};
  position: relative;
  max-width: ${(props) => (props.$width ? props.$width + "px" : "200px")};
  width: 100%;

  &.primary {
    ${Input} {
      border-radius: 8px;
    }
  }
  &.secondary {
    ${Input} {
      border-radius: 8px 0;
    }
  }

  &.error {
    color: ${(props) => props.$color || "#ff0000"};
    ${Input} {
      border: 1px solid #ff0000;
      &:focus {
        border: 2px solid #ff0000;
      }
    }
  }
`;
