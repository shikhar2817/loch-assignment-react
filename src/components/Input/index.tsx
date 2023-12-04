import React from "react";
import "./index.css";

type IInput = {
    error?: string
} & React.HTMLProps<HTMLInputElement>;

const Input: React.FC<IInput> = ({
    error,
    ...props
}) => {
    const { className, ...rest } = props
    return <div className="input-full">
        <input className={`
            input 
            ${error ? 'input-error-border' : ''}
            ${className}
        `} {...rest} />
        {error && <p className="input-error">{error}</p>}
    </div>
}

export default Input;