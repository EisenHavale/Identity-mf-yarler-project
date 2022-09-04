export interface ITitleProps {
    text: string;
    fontSize?: number;
    color?: ColorType;
}

type ColorType = 'primary' | 'secondary' | 'info' | 'warning' | 'danger' | 'success';
