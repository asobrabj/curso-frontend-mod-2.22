import styled from 'styled-components';
import {
  IStyle,
  fontSize,
  fontWheigt,
  marginFn,
  paddingFn,
} from '../../types/styles';

interface ISelectLabelStyle extends IStyle {
  $visible: boolean;
}
export const Label = styled.label`
  position: absolute;
  top: -12px;
  left: 12px;
  background-color: #ffffff;

  span {
    font-size: 14px;
    color: red;
    margin-right: 3px;
  }
`;

export const Select = styled.div<ISelectLabelStyle>`
  font-size: ${(props) => (props.$fs ? fontSize(props.$fs) : '')};
  font-style: ${(props) => props.$fStyle || ''};
  font-weight: ${(props) => (props.$fw ? fontWheigt(props.$fw) : '')};
  font-family: ${(props) => props.$fFamily || ''};
  text-align: ${(props) => props.$tAlign || ''};
  text-transform: ${(props) => props.$tTransform || ''};
  color: ${(props) => props.$color || ''};
  background-color: ${(props) => props.$bgColor || ''};
  padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : '')};
  padding-top: ${(props) => (props.$pdTop ? props.$pdTop + 'px' : '')};
  padding-left: ${(props) => (props.$pdLeft ? props.$pdLeft + 'px' : '')};
  padding-right: ${(props) => (props.$pdRigth ? props.$pdRigth + 'px' : '')};
  padding-bottom: ${(props) => (props.$pdBottom ? props.$pdBottom + 'px' : '')};
  margin: ${(props) => (props.$mg ? marginFn(props.$mg) : '')};
  margin-top: ${(props) => (props.$mgTop ? props.$mgTop + 'px' : '')};
  margin-left: ${(props) => (props.$mgLeft ? props.$mgLeft + 'px' : '')};
  margin-right: ${(props) => (props.$mgRigth ? props.$mgRigth + 'px' : '')};
  margin-bottom: ${(props) => (props.$mgBottom ? props.$mgBottom + 'px' : '')};
  width: ${(props) => (props.$width ? props.$width + 'px' : '')};
  height: ${(props) => (props.$height ? props.$height + 'px' : '')};
  border: 1px solid #00abff;
  border-color: ${(props) => props.$bdColor || ''};
  position: relative;

  &.primary {
    width: ${(props) => (props.$width ? props.$width + 'px' : '200px')};
    padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : '8px')};
    margin: 1px;
    border-radius: 8px;
    border-color: ${(props) => props.$bdColor || ''};
  }

  &.secondary {
    width: ${(props) => (props.$width ? props.$width + 'px' : '200px')};
    padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : '8px')};
    margin: 1px;
    border-radius: 8px 0;
    border-color: ${(props) => props.$bdColor || ''};
  }

  &.error {
    border: 1px solid #ff0000;
    color: ${(props) => props.$color || '#ff0000'};
    &:focus {
      border: 2px solid #ff0000;
    }
  }
  &:active {
    border-color: ${(props) => props.$bdColor || ''};
  }

  & select {
    display: none;
  }

  &.custom-select {
    /* position: relative; */
    display: inline-block;
    width: 100%;
  }

  .custom-select-trigger {
    width: 100%;
    cursor: pointer;
  }

  .custom-options {
    display: ${(props) => (props.$visible ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0px;
    right: 0;
    background-color: #fff;
    border: 1px solid #00abff;
    max-width: ${(props) => (props.$width ? props.$width + 'px' : '215px')};
    width: 100%;
    max-height: 114px;
    overflow-y: auto;
    z-index: 1;

    &.primary {
      border-radius: 8px;
      border-color: ${(props) => props.$bdColor || ''};
    }
    &.secondary {
      border-radius: 8px 0;
      border-color: ${(props) => props.$bdColor || ''};
    }
  }

  .custom-option {
    padding: 10px;
    cursor: pointer;
    border-radius: 8px;
  }

  .custom-option:hover {
    background-color: #f0f0f0;
    color: ${(props) => props.$color || '#00abff'};
  }
`;
