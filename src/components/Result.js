import React from 'react';

import classes from './Result.module.css';

const Result = ({ children }) => {
    return <div classes={classes.Result}>{children}</div>;
};

export default Result;
