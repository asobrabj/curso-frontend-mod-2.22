import { GlobalProps } from '../../types';
import * as S from './styles';

export interface IButton extends GlobalProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button(props: IButton) {
  return (
    <S.Button
      onClick={props.onClick}
      type="submit"
      className={props.className}
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
      {props.children}
    </S.Button>
  );
}
