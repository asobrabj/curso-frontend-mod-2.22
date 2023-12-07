import { FormFields, GlobalProps } from '../../types';
import * as S from './styles';

export interface ITextAreaLabel extends GlobalProps, Omit<FormFields, 'type'> {
  resize?: 'both' | 'none' | 'vertical' | 'horizontal';
}

export default function TextAreaLabel(props: ITextAreaLabel) {
  return (
    <S.Conteiner
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
    >
      <S.Label htmlFor={props.id}>
        {props.required && <span>*</span>}
        {props.label}
      </S.Label>

      <S.TextArea
        onClick={props.onClick}
        value={props.value}
        id={props.id}
        required={props.required}
        $resize={props.resize || 'none'}
        $bdColor={props.bdColor}
        placeholder={props.placeholder}
      />
    </S.Conteiner>
  );
}
