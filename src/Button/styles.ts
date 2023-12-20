import styled from 'styled-components';
import {
  IStyle,
  fontSize,
  fontWheigt,
  marginFn,
  paddingFn,
} from '../../types/styles';

export const Button = styled.button<IStyle>`
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
  width: ${(props) => (props.$width ? props.$width + 'px' : '150')};
  height: ${(props) => (props.$height ? props.$height + 'px' : '')};
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &.success,
  &.success-ligth,
  &.info,
  &.info-ligth,
  &.error,
  &.error-ligth,
  &.alert,
  &.alert-ligth {
    font-weight: ${(props) => (props.$fw ? fontWheigt(props.$fw) : 'bold')};
    text-align: ${(props) => props.$tAlign || 'center'};
    border-radius: 16px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    border: none;
  }

  &.success {
    color: #ffffff;
    background-color: #83d563;
  }

  &.info {
    color: #ffffff;
    background-color: #00abff;
  }

  &.error {
    color: #ffffff;
    background-color: #ff0000;
  }

  &.alert {
    color: #000000;
    background-color: #f1ea13;
  }

  &.success-ligth {
    color: #83d563;
    border: 2px solid #83d563;
  }

  &.info-ligth {
    color: #00abff;
    border: 2px solid #00abff;
  }

  &.error-ligth {
    color: #ff0000;
    border: 2px solid #ff0000;
  }

  &.alert-ligth {
    color: #f1ea13;
    border: 2px solid #f1ea13;
    background-color: #8d877a;
  }

  &.rounded {
    border-radius: 8px;
  }

  &.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    transform: translatey(2px);
  }
`;
