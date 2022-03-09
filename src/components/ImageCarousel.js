import imgBabyFood from '../photos/IMG_20220308_212007_505.jpg';
import imgFood from '../photos/IMG_20220308_212013_126.jpg';
import crib from '../photos/IMG_20220309_030805_049.jpg';
import pram from '../photos/IMG_20220309_042158_910.jpg';
import videoFood from '../photos/VID_138580927_185612_608.mp4';

import classes from './ImageCarousel.module.css';

const ImageCarousel = () => {
    const size = 400;
    return (
        <div className={classes.ImageCarousel}>
            <img src={imgBabyFood } width={size} height={size} />
            <img src={imgFood} width={size} height={size} />
            <video src={videoFood} itemType="video/mp4" autoPlay controls controlsList="nodownload" muted width={size} height={size} />
            <img src={pram} width={size} height={size} />
            <img src={crib} width={size} height={size} />
        </div>
    );
};

export default ImageCarousel;