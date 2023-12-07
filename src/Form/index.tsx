import { GlobalProps } from '../../types';
import * as S from './styles';

export interface IForm extends GlobalProps {
  children: React.ReactNode;
  title: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form(props: IForm) {
  return (
    <S.Form
      onSubmit={props.onSubmit}
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
    >
      <S.Heading>{props.title}</S.Heading>
      <div className={props.className}>{props.children}</div>
    </S.Form>
  );
}
