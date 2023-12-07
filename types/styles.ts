interface IStyle {
  $fs?: 'xsmall' | 'small' | 'medium' | 'larger' | string;
  $fStyle?: 'normal' | 'italic';
  $fw?: 'medium' | 'larger';
  $fFamily?: string;
  $tAlign?: 'start' | 'end' | 'justify' | 'center';
  $tTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  $color?: string;
  $bgColor?: string;
  $pd?: 'xsmall' | 'small' | 'medium' | 'larger' | 'xlarger' | 'none';
  $pdTop?: string;
  $pdBottom?: string;
  $pdRigth?: string;
  $pdLeft?: string;
  $mg?: 'xsmall' | 'small' | 'medium' | 'larger' | 'xlarger' | 'none';
  $mgTop?: string;
  $mgBottom?: string;
  $mgRigth?: string;
  $mgLeft?: string;
  $width?: string;
  $height?: string;
  $bdColor?: string;
}

interface Defaults {
  [key: string]: string;
}

const fontSize = (fs: string): string => {
  const defaults: Defaults = {
    xsmall: '14',
    small: '16',
    medium: '24',
    larger: '32',
  };
  const value = defaults[`${fs}`] || fs;
  return `${value}px`;
};

const fontWheigt = (fw: string): string => {
  const defaults: Defaults = {
    medium: '400',
    larger: 'bold',
  };
  const value = defaults[`${fw}`];
  return value;
};

const paddingFn = (pd: string): string => {
  const defaults: Defaults = {
    xsmall: '5',
    small: '8',
    medium: '16',
    larger: '24',
    xlarger: '32',
  };
  const value = defaults[`${pd}`] ? `${defaults[`${pd}`]}px` : '';
  return value;
};

const marginFn = (mg: string): string => {
  const defaults: Defaults = {
    xsmall: '5',
    small: '8',
    medium: '16',
    larger: '24',
    xlarger: '32',
  };
  const value = defaults[`${mg}`] ? `${defaults[`${mg}`]}px` : '';
  return value;
};

export { fontSize, fontWheigt, marginFn, paddingFn };
export type { Defaults, IStyle };
