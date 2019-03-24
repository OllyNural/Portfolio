import React from 'react'
import chartCSS from './chart-css.module.css'

import { Hint } from 'react-vis';

function hintRow({label, value}) {
    return (
    <div style={{position: 'relative', height: '15px', width: '100%'}}>
      <div style={{position: 'absolute'}}>{label}</div>
      <div style={{position: 'absolute', right: 0}}>{value}</div>
    </div>
    )
}

const HintComponent = (value) => (
    <div>
        {value}
    </div>
)

export default HintComponent
