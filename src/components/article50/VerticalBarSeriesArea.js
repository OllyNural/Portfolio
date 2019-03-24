import React from 'react'

import { HorizontalBarSeries, XYPlot, XAxis, YAxis, VerticalGridLines } from 'react-vis';

import constants from './constants.js'

const getDataCountryLog = ({ data }, area) => {
    let sigsByCountry = data.attributes.signatures_by_constituency
    console.log(sigsByCountry)
    sigsByCountry = sigsByCountry.filter(s => s.ons_code[0] === area)
    console.log(sigsByCountry)
    sigsByCountry = sigsByCountry.map(({name, code, signature_count}) => {
        return {y: name, x: signature_count, desc: name}
    })
    sigsByCountry.sort((obj1, obj2) => {
        return obj2.x - obj1.x
    })
    // console.log(sigsByCountry.slice(0, 20))
    return sigsByCountry.slice(0, 25).reverse();
}

const VerticalBarComponent = ({data, height, area}) => {
    const countryDataLog = getDataCountryLog(data, area)
    console.table(countryDataLog)
    return (
        <XYPlot
        xType="linear"
        yType="ordinal"
        width={window.innerWidth * 0.85} 
        margin={{left: 200}}
        height={500}>
        <VerticalGridLines />
        <HorizontalBarSeries
                data={countryDataLog}
                height={height} 
                color={constants.colours[area]}
                />
        <XAxis />
        <YAxis />
        </XYPlot>
    )
}

export default VerticalBarComponent
