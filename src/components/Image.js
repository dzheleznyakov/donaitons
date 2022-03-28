import React, { useState } from 'react';
import Backdrop from './Backdrop';

import classes from './Image.module.css';

export const SIZE = 400;

const Image = ({ src, alt = 'img', size = SIZE, clickable = true }) => {
    const [expanded, setExpanded] = useState(false);

    if (!expanded || !clickable) 
        return (
            <img 
                className={clickable ? classes.Image : null}
                src={src} 
                alt={alt} 
                style={{
                    maxHeight: size,
                }}
                onClick={() => setExpanded(true)}
            />
        );

    const backdrop = <Backdrop onClick={() => setExpanded(false)} show={expanded}>
        <img
            src={src} 
            alt={alt}
        />
    </Backdrop>;
    return backdrop;
};

export default Image;
