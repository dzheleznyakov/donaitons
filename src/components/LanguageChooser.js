import React from 'react';
import { LANGUAGES } from '../App';
import classes from './LanguageChooser.module.css';

const GROUP_NAME = 'languages';

const LanguageChooser = ({ lang, setLang }) => (
    <div className={classes.LanguageChooser }>
        {Object.keys(LANGUAGES).map(key => ({ key, value: LANGUAGES[key]}))
            .map(({ key, value}) => (
                <div key={value}>
                    <input 
                        type={"radio"} 
                        id={value} 
                        name={GROUP_NAME} 
                        checked={value === lang} 
                        onChange={() => setLang(value)}
                    />
                    <label htmlFor={value}>{key}</label>
                </div>
            ))
        }
    </div>
);

export default LanguageChooser;
