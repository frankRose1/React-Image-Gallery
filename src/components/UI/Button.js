import React from 'react';

//a reusable button in case its needed in other parts of the app 
const Button = props => (
        <button type={props.btnType} className={props.styles}>
            {props.children}
        </button>
);

export default Button;