//import { Link, useLocation } from "react-router-dom";

import styles from './Header.module.css'
import { SITE_NAME } from "../../constants.js";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='box'>
            <p>{SITE_NAME}</p>
            </div>
        </header>
    );
};

export default Header