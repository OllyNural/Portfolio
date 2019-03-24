import React, {Component} from 'react'

import { HorizontalBarSeries, XYPlot, XAxis, YAxis, VerticalGridLines } from 'react-vis';

import constants from './constants.js'

export default class VerticalBarComponentArea extends Component {
    state = {
        windowWidth: 960
    }
    handleResize() {
        this.setState({windowWidth: window.innerWidth});
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }
    render() {
        const countryDataLog = this.getDataCountryLog(this.props.data, this.props.area)
        return (
            <XYPlot
            xType="linear"
            yType="ordinal"
            width={this.state.windowWidth * 0.85} 
            margin={{left: 200}}
            height={600}>
            <VerticalGridLines />
            <HorizontalBarSeries
                    data={countryDataLog}
                    height={this.props.height} 
                    color={constants.colours[this.props.area]}
                    />
            <XAxis />
            <YAxis />
            </XYPlot>
        )
    }
    getDataCountryLog = ({ data }, area) => {
        let sigsByCountry = data.attributes.signatures_by_constituency
        sigsByCountry = sigsByCountry.filter(s => s.ons_code[0] === area)
        sigsByCountry = sigsByCountry.map(({name, code, signature_count}) => {
            return {y: name, x: signature_count, desc: name}
        })
        sigsByCountry.sort((obj1, obj2) => {
            return obj2.x - obj1.x
        })
        return sigsByCountry.slice(0, 30).reverse();
    }
}

