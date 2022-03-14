import React from 'react';
import { SIZE } from './Image';

const Video = ({
    src,
    itemType,
    size = SIZE
}) => {
        return (
            <video 
                src={src} 
                itemType={itemType} 
                autoPlay 
                controls 
                controlsList="nodownload" 
                muted 
                width={size} 
                height={size} 
            />
        );
};

export default Video;
