import React from "react";
import cx from "classnames";

import "./style.css";

export default function({ className, ...rest }) {
    return (
        <svg
            {...rest}
            className={cx("panel-svg", className)}
            viewBox="0 0 24 24"
        >
            <path
                fill="white"
                d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
            />
        </svg>
    );
}
