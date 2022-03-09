import classes from './ProgressBar.module.css'

const ProgressBar = () => {
    const goal = 2000;
    const current = 39.72 + 160 + 219.13 + 91.31 + 14.6 + 16 + 200 + 100 + 100;

    const ratio = current / goal;

    return (
        <div>
            <p style={{fontSize: '24px', }}><strong>
                {`raised: £${current} / target: £${goal}`}
            </strong>
            <span style={{fontSize: '16px'}}>
                {' '}(to be confirmed: checking the situation regarding food supplies)
            </span></p>
            <div className={classes.Bar}>
                <div className={classes.Progress} style={{width: `${ratio * 100}%`}} />
            </div>
        </div>
    );
};

export default ProgressBar;