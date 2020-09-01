import React from "react"
import classes from "./WorkPlace.module.css"

import RightWork from "../RightWorkPlace/RightWork"
import LeftWork from "../LeftWorkPlace/LeftWork"

const WorkPlace = () => {
    return (

        <div className={classes.WorkPlaceContainer}>
            <LeftWork />
            <RightWork />
        </div>

    )
}

export default WorkPlace