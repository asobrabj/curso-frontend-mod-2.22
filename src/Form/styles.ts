import styled from 'styled-components';
import {
  IStyle,
  fontSize,
  fontWheigt,
  marginFn,
  paddingFn,
} from '../../types/styles';

interface IFormStyle extends IStyle {}

export const Heading = styled.h1`
  padding: 24px 0;
`;

export const Form = styled.form<IFormStyle>`
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
  max-width: ${(props) => (props.$width ? props.$width + 'px' : '600px')};
  > div {
    &.grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }

    &.grid-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 24px;

      > .select,
      > .text-area {
        grid-column: span 2;
      }
    }

    &.block {
      > .input {
        margin-bottom: ${(props) =>
          props.$mgBottom ? props.$mgBottom + 'px' : '24px'};
      }

      > .select,
      > .text-area {
        margin-bottom: ${(props) =>
          props.$mgBottom ? props.$mgBottom + 'px' : '24px'};
      }
    }
  }
`;
