import React, {Component} from 'react'
import chartCSS from './chart-css.module.css'

import { RadialChart, DiscreteColorLegend, Hint } from 'react-vis';

import constants from './constants.js'

let sigs = [
    {
        location: "England",
        area: "E",
        votes: 0,
        constituencies: 0,
        color: constants.colours["E"]
    },
    {
        location: "Scotland",
        area: "S",
        votes: 0,
        constituencies: 0,
        color: constants.colours["S"]
    },
    {
        location: "Northern Ireland",
        area: "N",
        votes: 0,
        constituencies: 0,
        color: constants.colours["N"]
    },
    {
        location: "Wales",
        area: "W",
        votes: 0,
        constituencies: 0,
        color: constants.colours["W"]
    }
]

const legend = [
    {
        title: "England",
        color: constants.colours["E"]
    },
    {
        title: "Scotland",
        color: constants.colours["S"]
    },
    {
        title: "Wales",
        color: constants.colours["W"]
    },
    {
        title: "Northern Ireland",
        color: constants.colours["N"]
    },
]

export default class RadialChartComponent extends Component {
    state = {
        hoverValue: false
    };
    render() {
        const {hoverValue} = this.state;
        return (
            <div className={chartCSS.chartLegendContainer}>
                <RadialChart
                    data={this.getDataLocale(this.props.data)}
                    width={this.props.width}
                    height={this.props.height} 
                    innerRadius={100}
                    radius={140}
                    padAngle={0.04}
                    onValueMouseOver={v => this.setState({hoverValue: {Location: v.location, LocationCode: v.area, Votes: v.votes, "Percentage Votes": `${v.ratio.toFixed(2)}%`}})}
                    onSeriesMouseOut={v => this.setState({hoverValue: false})}
                    className={chartCSS.chartContainer}
                    colorType="literal"
                    >
                        {hoverValue !== false && (<Hint value={hoverValue}></Hint>) }
                    </RadialChart>
                <DiscreteColorLegend items={legend}> </DiscreteColorLegend >
            </div>
            )
    }

    getDataLocale = ({ data }) => {
        const sigsByLocale = data.attributes.signatures_by_constituency
    
        let filteredSigs = sigs.map(sig => {
            let constituencies = sigsByLocale.filter(d => d.ons_code.startsWith(sig.area))
            sig.constituencies = constituencies.length
            sig.votes = constituencies.reduce((acc, d) => acc + parseInt(d.signature_count), 0)
            sig.ratio = sig.votes / data.attributes.signature_count * 100
            return {...sig, angle: sig.votes}
        })
        return filteredSigs
    }
}
