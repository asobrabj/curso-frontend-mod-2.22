import { useState } from 'react';
import { FormFields, GlobalProps } from '../../types';
import * as S from './styles';

export interface ISelectLabel extends GlobalProps, Omit<FormFields, 'type'> {
  listOptions: Array<string>;
}

export default function SelectLabel(props: ISelectLabel) {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState(
    props.placeholder || 'Escolha uma opção',
  );

  const changeVisible = () => {
    setVisible((v) => !v);
  };
  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setVisible(false);
  };
  return (
    <S.Select
      className={`primary ${props.className}`}
      $fs={props.fs}
      $fw={props.fw}
      $fStyle={props.fStyle}
      $fFamily={props.fFamily}
      $tAlign={props.tAlign}
      $tTransform={props.tTransform}
      $color={props.color}
      $bgColor={props.bgColor}
      $pd={props.pd}
      $pdTop={props.pdTop}
      $pdRigth={props.pdRigth}
      $pdLeft={props.pdLeft}
      $pdBottom={props.pdBottom}
      $mg={props.mg}
      $mgTop={props.mgTop}
      $mgRigth={props.mgRigth}
      $mgLeft={props.mgLeft}
      $mgBottom={props.mgBottom}
      $width={props.width}
      $height={props.height}
      placeholder={props.placeholder}
      $visible={visible}
      $bdColor={props.bdColor}
    >
      <div className="custom-select primary">
        <S.Label htmlFor={props.id}>
          {' '}
          {props.required && <span>*</span>}
          {props.label}
        </S.Label>
        <div
          className={`custom-select-trigger primary ${props.className}`}
          onClick={changeVisible}
          id={props.id}
        >
          {selectedValue}
        </div>
        <div className={`custom-options primary ${props.className}`}>
          {props.listOptions &&
            props.listOptions.map((option) => (
              <div
                key={option}
                className="custom-option"
                data-value={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
        </div>
        <select
          id="real-select"
          required={props.required}
          onChange={props.onChange}
          onClick={props.onClick}
          value={props.value}
          title="select"
        >
          {props.listOptions &&
            props.listOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
    </S.Select>
  );
}
