import React, { useContext } from 'react';
import { LanguageContext, LANGUAGES } from '../App';


const MultiLanguageComponent = ({ en, ru }) => {
    const lang = useContext(LanguageContext);
    switch (lang) {
        case LANGUAGES.EN: return en;
        case LANGUAGES.RU: return en;
        // case LANGUAGES.RU: return ru;
        default: return <div />;
    }
};

MultiLanguageComponent.propTypes = {};

MultiLanguageComponent.defaultProps = {};

export default MultiLanguageComponent;
