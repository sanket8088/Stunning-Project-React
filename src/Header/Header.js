import React from "react"
import classes from "./Header.module.css"
import companyLogo from "../assets/stunning-logo.png"
import hamburger from "../assets/hamburger-menu-512.webp"

const Header = () => {
    return (
        <header className={classes.HeaderContent}>
            <div className={classes.ComputerResponsive}>
                <div className={classes.Logo}>
                    <img className={classes.LogoImage} src={companyLogo} alt="Company logo" />
                </div>
                <div className={classes.HeaderMenu}>
                    <p className={classes.MenuOptionsOne}>Home</p>
                    <p className={classes.MenuOptions}>About</p>
                    <p className={classes.MenuOptions}>Blog</p>
                    <p className={classes.MenuOptions}>Jobs</p>
                </div>
                <div className={classes.YouAccount}>
                    <button className={classes.AccountButton}> Your Account</button>
                </div>
            </div>
            <div className={classes.MobileResponsive}>
                <img className={classes.HamburgerIcon} src={hamburger} alt="MobileIcon" />
            </div>
        </header>
    )
}


export default Header