import React from 'react'
import chartCSS from './chart-css.module.css'

import { RadialChart } from 'react-vis';

const getDataCountry = (votes) => {
    const { data } = votes
    let sigsByCountry = data.attributes.signatures_by_country
    sigsByCountry = sigsByCountry.map(({name, code, signature_count}) => {
        return {padAngle: 1, label: name, subLabel: code, angle: signature_count}
    })
    return sigsByCountry;
}

const RadialChartComponent = ({data, width, height}) => (
    <RadialChart
        data={getDataCountry(data)}
        width={width}
        height={height} 
        />
)

export default RadialChartComponent
