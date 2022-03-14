import classes from './ImageCarousel.module.css';

const ImageCarousel = ({ children }) => {
    return (
        <div className={classes.ImageCarousel}>
            {children}
        </div>
    );
};

export default ImageCarousel;