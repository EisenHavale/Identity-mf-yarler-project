import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { SvgIcon } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ITitleProps {
    text: string;
    fontSize?: number;
    color?: ColorType;
}

type ColorType = 'primary' | 'secondary' | 'info' | 'warning' | 'inherit' | 'success';
type ButtonType = 'contained' | 'outlined';
type Icon = ReactJSXElement;

export interface IButtonProps {
    label: string;
    disabled?: boolean;
    color: ColorType;
    icon?:Icon;
    type?: ButtonType;
    onClick?: () => void;
}

export interface IInputProps {
    label: string;
    onChange?: (value: string) => void;
    icon?: ReactJSXElement;

}
