import React, {useState} from "react";

import './ChartBar.css';

const ChartBar = (props) => {
    let fillHeight = '0%';

    if(props.maxValue > 0) {
        fillHeight = ~~((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <div className="chartBar">
            <div className="barInner">
                <div className="barFill" style={{height: fillHeight}}/>
            </div>
            <div className="barLabel">{props.label}</div>
        </div>
    )

}

export default ChartBar;