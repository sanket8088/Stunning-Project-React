import React from "react"
import classes from "./RightWork.module.css"

import landingImage from "../assets/landing-section-image.png"

const RightWork = () => {
    return (
        <div className={classes.RightPlaceContainer}>
            <img className={classes.RightImage} src={landingImage} alt="Landing_image" />
        </div>

    )
}

export default RightWork