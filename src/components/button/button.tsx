import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ButtonColor, ButtonSize, ButtonVariant } from "./button.styles";
import { BUTTON_BASE_CLASS, BUTTON_ICON_SIZE_CLASS, BUTTON_SIZE_CLASS, BUTTON_VARIANT_CLASS } from "./button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // #  text displayed inside the button
    children?: ReactNode;
    // # optional icon displayed before text
    left_icon?: ReactNode;
    // # optional ucon displayed after text
    right_icon?: ReactNode;
    // # this determines the style of the button
    variant?: ButtonVariant;
    // # determines the button color
    color?: ButtonColor;
    // # determines the button size
    size?: ButtonSize;
    // # to know if the button only contians an icon
    icon_only?: boolean
};

const Button = ({children, left_icon, right_icon, variant = "solid", color = "primary", size = "md", icon_only = false, className = "", type = "button", ...props} : ButtonProps) => {

    // # get the style based on the given variant and color
    const variant_class = BUTTON_VARIANT_CLASS[variant][color];

    // # icon-only buttons used square dimentsions
    const size_class = icon_only ? BUTTON_ICON_SIZE_CLASS[size] : BUTTON_SIZE_CLASS[size];

    // # build the actual button class
    const button_class = `${BUTTON_BASE_CLASS} ${variant_class} ${size_class} ${className}`;

    return(
        <button type={type} className={button_class} {...props}>
            
            {left_icon}

            { children && ( <span>{children}</span>) }

            { right_icon }
        </button>
    );

}

export default Button;