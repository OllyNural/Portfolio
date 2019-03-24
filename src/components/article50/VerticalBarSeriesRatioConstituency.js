import React, {Component} from 'react'

import { HorizontalBarSeries, XYPlot, XAxis, YAxis, VerticalGridLines } from 'react-vis';

import constants from './constants.js'
import { StaticQuery, graphql } from 'gatsby';

export default class VerticalBarComponentRatioConstituency extends Component {
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
            <StaticQuery
                query={graphql`
                query {
                    allVoteXlsxMid2017Persons {
                      edges {
                        node {
                          Contents
                          _xEMPTY
                          _xEMPTYx1
                        }
                      }
                    }
                  }
                `}
                render={({ allVoteXlsxMid2017Persons }) => {
                    const data = this.getDataConstRatio(countryDataLog, allVoteXlsxMid2017Persons) 
                    return (
                    <XYPlot
                        xType="linear"
                        yType="ordinal"
                        width={this.state.windowWidth * 0.85} 
                        margin={{left: 200}}
                        height={1000}>
                        <VerticalGridLines />
                        <HorizontalBarSeries
                                data={data}
                                height={this.props.height} 
                                color={constants.colours[this.props.area]}
                                />
                        <XAxis />
                        <YAxis />
                        </XYPlot>
                    )
                }}
            />
        )
                
        
    }
    getDataCountryLog = ({ data }, area) => {
        let sigsByCountry = data.attributes.signatures_by_constituency
        sigsByCountry = sigsByCountry.filter(s => s.ons_code[0] === area)
        sigsByCountry = sigsByCountry.map(({name, ons_code, signature_count}) => {
            return {y: name, x: signature_count, desc: name, code: ons_code}
        })
        return sigsByCountry
    }

    getDataConstRatio = (data, { edges }) => {
        data = data.map(d => {
            let e = edges.find(e => (e.node.Contents === d.code))
            return {...d, x: ((d.x / e.node['_xEMPTYx1']) * 100).toFixed(2)}
        })
        data.sort((obj1, obj2) => {
            return obj2.x - obj1.x
        })
        return data.slice(0, 50).reverse();
    }
}

