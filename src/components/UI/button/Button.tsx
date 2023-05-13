import React from 'react';
import cl from "./Button.module.scss";

interface IButtonProps {
    children: React.ReactNode

    [propName: string]: any
}

const Button: React.FC<IButtonProps> = ({children, ...props}) => {
    return (
        <button
            className={cl.btn}
            {...props}
        >
            {children}
        </button>
    );
};

export default React.memo(Button);
