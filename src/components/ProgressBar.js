import classes from './ProgressBar.module.css'

const ProgressBar = ({current, goal}) => {
    // const goal = 2000;
    // const current = 39.72 + 160 + 219.13 + 91.31 
        // + 14.6 + 16 + 200 + 100 + 100 + 73.05 + 21.91 + 218.39 + 363.98 + 100
        // + 145.59 + 218.39 + 72.79;
        // 2,910.09
        // 3,346.86
    // const current = 3128.47;

    const ratio = current / goal;

    return (
        <div>
            {<div className={classes.Bar}>
                <div className={classes.Progress} style={{width: `${ratio * 100}%`}} />
</div>}
        </div>
    );
};

export default ProgressBar;