import classes from './ImageCarousel.module.css';

const ImageCarousel = ({ children, style }) => {
    return (
        <div className={classes.ImageCarousel} style={style}>
            {children}
        </div>
    );
};

export default ImageCarousel;