import { FormFields, GlobalProps } from '../../types';
import * as S from './styles';

export interface IInputLabel extends GlobalProps, FormFields {
  label: string;
}

export default function InputLabel(props: IInputLabel) {
  return (
    <S.InputLabel
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
      $bdColor={props.bdColor}
    >
      <S.Label htmlFor={`${props.id}_id`}>
        {props.required && <span>*</span>}
        {props.label}
      </S.Label>
      <S.Input
        onChange={props.onChange}
        onClick={props.onClick}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        id={`${props.id}_id`}
        required
        name={props.id}
        title={props.id}
      />
    </S.InputLabel>
  );
}
