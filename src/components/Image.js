import React, { useState } from 'react';
import Backdrop from './Backdrop';

export const SIZE = 400;

const Image = ({ src, alt = 'img', size = SIZE }) => {
    const [expanded, setExpanded] = useState(false);

    if (!expanded) 
        return (
            <img 
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
