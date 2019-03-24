import React from 'react'
import chartCSS from './chart-css.module.css'

import { RadialChart, Hint } from 'react-vis';

let sigs = [
    {
        "area": "S",
        "constCount": 0,
        "votes": 0
    },
    {
        "area": "E",
        "constCount": 0,
        "votes": 0
    },
    {
        "area": "N",
        "constCount": 0,
        "votes": 0
    },
    {
        "area": "W",
        "constCount": 0,
        "votes": 0
    }
]

const getDataLocale = (votes) => {
    const { data } = votes
    const sigsByLocale = data.attributes.signatures_by_constituency

    let filteredSigs = sigs.map(sig => {
        let constCount = sigsByLocale.filter(d => d.ons_code.startsWith(sig.area))
        sig.constCount = constCount.length
        sig.votes = constCount.reduce((acc, d) => acc + parseInt(d.signature_count), 0)
        return {...sig, angle: sig.votes}
    })
    console.table(filteredSigs)
    return filteredSigs
}

const RadialChartComponent = ({data, width, height}) => {
    let isHover = false
    return (
        <RadialChart
            data={getDataLocale(data)}
            width={width}
            height={height} 
            onValueMouseOver={v => {
                console.log(v)
                isHover = v
            }}
            onSeriesMouseOut={v => isHover = false}

            // showLabels='true'
            // className={chartCSS.chartContainer} 
        >
            {isHover !== false && <Hint isHover={isHover} />}
        </RadialChart>
    )
}

export default RadialChartComponent
