import styled from "styled-components";
import {
  IStyle,
  fontSize,
  fontWheigt,
  marginFn,
  paddingFn,
} from "../../types/styles";

interface ITextAreaLabelStyle extends IStyle {
  $resize?: "both" | "none" | "vertical" | "horizontal";
}

export const TextArea = styled.textarea<ITextAreaLabelStyle>`
  padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : "8px")};
  border: 1px solid #00abff;
  border-color: ${(props) => props.$bdColor || ""};
  margin: 1px;
  resize: ${(props) => props.$resize};
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
    border: 2px solid #00abff;
    margin: 0;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 12px;
  background-color: #ffffff;

  span {
    font-size: 14px;
    color: red;
    margin-right: 3px;
  }
`;

export const Conteiner = styled.div<ITextAreaLabelStyle>`
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
  max-width: ${(props) => (props.$width ? props.$width + "px" : "250px")};
  height: ${(props) => (props.$height ? props.$height + "px" : "120px")};
  position: relative;

  &.primary {
    ${TextArea} {
      border-radius: 8px;
    }
  }

  &.secondary {
    ${TextArea} {
      border-radius: 8px 0;
    }
  }

  &.error {
    color: ${(props) => props.$color || "#ff0000"};
    ${TextArea} {
      border: 1px solid #ff0000;
      &:focus {
        border: 2px solid #ff0000;
      }
    }
  }
`;
