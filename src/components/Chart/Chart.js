import React, {useState} from "react";
import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {
    const dataValues = props.dataPoint.map(dp => dp.value);
    const totalMaximum = Math.max(...dataValues);

    return (
        <div className="chart">
            {props.dataPoint.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />))
            }
        </div>
    )
}

export default Chart;