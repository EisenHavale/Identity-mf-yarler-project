import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export interface ITitleProps {
    text: string;
    fontSize?: number;
    color?: ColorType;
}

type ColorType = 'primary' | 'secondary' | 'info' | 'warning' | 'inherit' | 'success' | 'error';
type ButtonType = 'contained' | 'outlined';
type Icon = ReactJSXElement;
type InputType = 'text' | 'number' | 'password' | 'email';

export interface IButtonProps {
    label: string;
    disabled?: boolean;
    color?: ColorType;
    icon?:Icon;
    shape?: ButtonType;
    type?: 'submit' | 'button';
    onClick?: () => void;
}

export interface IInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e:React.ChangeEvent) => void;
    onBlur?: (e:React.FocusEvent) => void;
    error: boolean;
    type?: InputType;
    icon?: ReactJSXElement;
    id?: string;
    errorText?: string;
}

export interface ILinkProps {
    path:string;
    label:string;
    color?:string;
}

export interface ILoginFormValues {
    username:string;
    password:string;
}