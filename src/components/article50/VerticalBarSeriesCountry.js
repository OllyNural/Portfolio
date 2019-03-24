import React, {Component} from 'react'

import { HorizontalBarSeries, XYPlot, XAxis, YAxis, VerticalGridLines } from 'react-vis';

export default class VerticalBarComponentCountry extends Component {
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
        const countryDataLog = this.getDataCountryLog(this.props.data)
        return (
            <XYPlot
            xType="linear"
            yType="ordinal"
            width={this.state.windowWidth * 0.85} 
            margin={{left: 150}}
            height={500}>
            <VerticalGridLines />
            <HorizontalBarSeries
                    data={countryDataLog}
                    width={this.props.width}
                    height={this.props.height} 
                    />
            <XAxis />
            <YAxis />
            </XYPlot>
        )
    }
    getDataCountryLog = ({ data }) => {
        let sigsByCountry = data.attributes.signatures_by_country
        sigsByCountry = sigsByCountry.map(({name, code, signature_count}) => {
            return {y: name, x: Math.log(signature_count), desc: name}
        })
        sigsByCountry.sort((obj1, obj2) => {
            return obj2.x - obj1.x
        })
        return sigsByCountry.slice(0, 40).reverse();
    }
}
