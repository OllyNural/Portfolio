import React, { Component } from 'react'
import chartCSS from './chart-css.module.css'

import { RadialChart, Hint } from 'react-vis';

export default class RadialChartComponent extends Component {
    state = {
        hoverValue: false
    };
    render() {
        const {hoverValue} = this.state;
        return (
            <div className={chartCSS.chartLegendContainer}>

                    <RadialChart
                        data={this.getDataCountry(this.props.data)}
                        width={this.props.width}
                        height={this.props.height} 
                        innerRadius={100}
                        radius={140}
                        onValueMouseOver={v => this.setState({hoverValue: {Country: v.label, Votes: v.votes,"Percentage Votes": `${v.ratio.toFixed(2)}%`}})}
                        onSeriesMouseOut={v => this.setState({hoverValue: false})}
                        className={chartCSS.chartContainer}
                        >
                            {hoverValue !== false && (<Hint value={hoverValue}></Hint>) }
                        </RadialChart>
            </div>
            )
    }

    getDataCountry = ({ data }) => {
        let sigsByCountry = data.attributes.signatures_by_country
        sigsByCountry = sigsByCountry.map(({name, code, signature_count}) => {
            return {label: name, votes: signature_count, angle: signature_count, ratio: (signature_count/data.attributes.signature_count * 100)}
        })
        return sigsByCountry;
    }
}