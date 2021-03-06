import React from 'react';
import button from './MyButton.css'

const MyButton = ({children, action}) => {
    return (
        <button className={"button"} onClick={() => action()}>
            {children}
        </button>
    );
};

export default MyButton;