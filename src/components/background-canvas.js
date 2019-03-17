import React, { Component } from "react"
import backgroundCanvas from './background-canvas.module.css'

class BackgroundCanvas extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            seed: 0.2,
            width: 0, 
            height: 0,
            squareNumber: 15
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }
    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    componentDidUpdate() {
        this.createBackground()
    }

    updateWindowDimensions() {
        let squareNumber = Math.ceil(((window.innerWidth / 25) + 5))
        this.setState({ 
            width: window.innerWidth, 
            height: window.innerHeight,
            squareNumber: squareNumber
        })
    }
    // From these answers: https://stackoverflow.com/a/29852144 & https://stackoverflow.com/a/9493060/129032
    getColourFromVal(h, s = 0.7, l = 0.7) {    
        let r, g, b;
        if (s == 0) {
        r = g = b = l; // achromatic
        } else {
            let hue2rgb = hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }
        
            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
    
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    getBrightnessFromVal(h) {
        return [Math.round(h * 255), Math.round(h * 255), Math.round(h * 255)];
    }
    // createBackground(seed = (Math.random() * (0.0100 - 0.0200) + 0.0200).toFixed(4)) {
    createBackground(seed = 0.0003) {
        const ctx = this.refs.canvas.getContext('2d')
        ctx.canvas.width  = this.state.width
        ctx.canvas.height = this.state.height
        ctx.clearRect(0, 0, this.state.width, this.state.height)
        let squareSizeFloored = Math.floor(this.state.width/this.state.squareNumber)
        let squareSize = this.state.width/this.state.squareNumber
        let simplex = this.props.noise
        // console.time('bigloop')
        for (let i = 0; i <= this.state.width; i+=squareSizeFloored) {
            // console.time('innerloop')
            for (let j = 0; j <= this.state.height; j+=squareSizeFloored) {
                let value2d = simplex.noise2D((i/squareSizeFloored/squareSizeFloored)/seed, ((j/squareSizeFloored)/squareSizeFloored)/seed)
                let color = this.getColourFromVal(Math.abs(value2d) % 16777215)
                // let color = this.getBrightnessFromVal(Math.abs(value2d) % 16777215)
                shapes.rect({
                    ctx, 
                    x: i, 
                    y: j, 
                    width: squareSizeFloored, 
                    height: squareSizeFloored, 
                    color: color 
                })
            }
            // console.timeEnd('innerloop')
        }
        // console.timeEnd('bigloop')
    }
    render() {
        const children = this.props.children
        setInterval(() => {
            this.setState({
                seed: this.state.seed + 0.001
            }, () => {
                // this.createBackground(this.props.noise.noise2D(this.state.seed, 0))
                this.createBackground(this.state.seed, 0)
            })
        }, 67)
        return (
            <canvas ref="canvas" style={{width: this.state.width, height: this.state.height}} className={backgroundCanvas.canvas} > 
                {children} 
            </canvas>
        )
    }
}

const shapes = {
    rect: (props) =>  {
        const {ctx, x, y, width, height, color} = props
        ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        ctx.fillRect(x, y, width, height)
    }
}

export default BackgroundCanvas
