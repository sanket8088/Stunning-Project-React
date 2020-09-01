import React from "react"
import classes from "./LeftWork.module.css"
import arrowDown from "../assets/arrow-down.png"
import greyTick from "../assets/tick-gray.png"
import blueTick from "../assets/tick-blue.png"
import blueUser from "../assets/user-blue.png"
import orangeUser from "../assets/user-orange.png"
import pinkUser from "../assets/user-pink.png"
import redUser from "../assets/user-red.png"

const LeftWork = () => {
    return (
        <div className={classes.LeftPlaceContainer}>
            <div className={classes.HeaderTitle}>
                Stunning Workplace.
            </div>
            <div className={classes.LeftPlaceContent}>
                With Stunning, remote teams can organize projects, manage shifting priorities, and get work done.
            </div>
            <div className={classes.NewAccountContainer}>
                <button className={classes.NewAccount}>New Account</button>
                <img className={classes.DropDown} src={arrowDown} alt="Arrow-Down" />
            </div>
            <div className={classes.Userlist}>
                <div className={classes.UserInfo}>
                    <img className={classes.TickSelection} src={greyTick} alt="Not-selected" />
                    <div className={classes.UsrName}>Dmm design</div>
                    <img src={pinkUser} alt="User-icon" />
                    <div className={classes.Date}>20 Dec</div>
                    <div className={classes.ColorPaletOne}></div>
                </div>

                <div className={classes.UserInfo}>
                    <img className={classes.TickSelection} src={blueTick} alt="Not-selected" />
                    <div className={classes.UsrName}>Blurr animation</div>
                    <img src={orangeUser} alt="User-icon" />
                    <div className={classes.Date}>22 Dec</div>
                    <div className={classes.ColorPaletTwo}></div>
                </div>

                <div className={classes.UserInfo}>
                    <img className={classes.TickSelection} src={greyTick} alt="Not-selected" />
                    <div className={classes.UsrName}>Illustration</div>
                    <img src={blueUser} alt="User-icon" />
                    <div className={classes.Date}>26 Dec</div>
                    <div className={classes.ColorPaletThree}></div>
                </div>

                <div className={classes.UserInfo}>
                    <img className={classes.TickSelection} src={greyTick} alt="Not-selected" />
                    <div className={classes.UsrName}>Refunds</div>
                    <img src={redUser} alt="User-icon" />
                    <div className={classes.Date}>28 Dec</div>
                    <div className={classes.ColorPaletFour}></div>
                </div>
            </div>

            <div></div>
        </div>

    )
}

export default LeftWork