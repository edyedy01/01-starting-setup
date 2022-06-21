import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const valueArray = props.data.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...valueArray);

    return (
        <div className="chart">
            {props.data.map(data => 
                <ChartBar 
                    key={data.label} 
                    value={data.value} 
                    maxValue={totalMaximum} 
                    label={data.label}/>
            )}
        </div>
    );
}

export default Chart;