import React from 'react';

import "./index.css";

type IButton = {
    children: React.ReactNode,
    type?: "submit" | "reset" | "button"
    disabled?: boolean
} & React.HTMLProps<HTMLButtonElement>

const Button: React.FC<IButton> = ({
    children,
    disabled,
    ...props
}) => {
    const {className, ...rest} = props; 
    return <button className={`
        btn 
        ${disabled ? 'btn-disabled' : ''}
        ${className}
    `} disabled={disabled} {...rest}>
        {children}
    </button>
}

export default Button;