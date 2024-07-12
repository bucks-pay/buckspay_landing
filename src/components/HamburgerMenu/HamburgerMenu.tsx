import React from 'react';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
    onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
    return (
        <div className={styles.hamburger} onClick={onClick}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </div>
    );
};

export default HamburgerMenu;
