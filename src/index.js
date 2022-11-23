import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import styles from './index.css';

import JobsList from "./components/jobslist";

const lang = navigator.language || navigator.userLanguage;

ReactDOM.render(
    <IntlProvider locale={lang.includes("en") ? "en" : "es-ES"} messages= {lang.includes("en") ? localeEnMessages : localeEsMessages}>
            <JobsList lang={lang} className={styles}/>
    </IntlProvider>, document.getElementById("root")
);