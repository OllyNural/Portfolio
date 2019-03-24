import React from 'react'

import { HorizontalBarSeries, XYPlot, XAxis, YAxis, VerticalGridLines } from 'react-vis';

const getDataCountryLog = ({ data }) => {
    let sigsByCountry = data.attributes.signatures_by_country
    sigsByCountry = sigsByCountry.map(({name, code, signature_count}) => {
        return {y: name, x: Math.log(signature_count), desc: name}
    })
    sigsByCountry.sort((obj1, obj2) => {
        return obj2.x - obj1.x
    })
    // console.log(sigsByCountry.slice(0, 20))
    return sigsByCountry.slice(0, 40).reverse();
}

const VerticalBarComponent = ({data, width, height}) => {
    const countryDataLog = getDataCountryLog(data)
    console.table(countryDataLog)
    return (
        <XYPlot
        xType="linear"
        yType="ordinal"
        width={window.innerWidth * 0.85} 
        margin={{left: 150}}
        height={500}>
        <VerticalGridLines />
        <HorizontalBarSeries
                data={countryDataLog}
                width={width}
                height={height} 
                />
        <XAxis />
        <YAxis />
        </XYPlot>
    )
}

export default VerticalBarComponent
