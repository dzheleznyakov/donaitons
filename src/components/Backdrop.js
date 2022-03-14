import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = ({
    show,
    children,
    onClick,
}) => {
    const cssClasses = [classes.Backdrop];
    if (show) cssClasses.push(classes.show);
    return (
        <div 
            className={cssClasses.join(' ')} 
            onClick={onClick} 
        >
            {children}
        </div>
    );
};

export default Backdrop;
