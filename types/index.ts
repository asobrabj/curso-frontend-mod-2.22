export interface ScaleString {
  scale: 'xsmall' | 'small' | 'medium' | 'larger' | 'xlarger' | 'none';
}

export interface GlobalProps {
  fs?: 'xsmall' | 'small' | 'medium' | 'larger' | string;
  fStyle?: 'normal' | 'italic';
  fw?: 'medium' | 'larger';
  fFamily?: string;
  tAlign?: 'start' | 'end' | 'justify' | 'center';
  tTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  color?: string;
  bgColor?: string;
  pd?: ScaleString['scale'];
  pdTop?: string;
  pdBottom?: string;
  pdRigth?: string;
  pdLeft?: string;
  mg?: ScaleString['scale'];
  mgTop?: string;
  mgBottom?: string;
  mgRigth?: string;
  mgLeft?: string;
  className?: string;
  width?: string;
  height?: string;
  bdColor?: string;
}

export interface FormFields {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value?: string;
  type?:
    | 'text'
    | 'tel'
    | 'password'
    | 'email'
    | 'time'
    | 'date'
    | 'radio'
    | 'checkbox'
    | 'file'
    | 'hidden'
    | 'number';
  required: boolean;
  label?: string;
  id: string;
}
