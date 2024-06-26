import React, { Component } from 'react'
import Plot from 'react-plotly.js'

export default class Roundbar extends Component {

    constructor(props){
        super(props)

        var trace1 = {
            x: ['South Korea', 'China', 'Canada'],
            y: [24, 10, 9],
            name: 'Gold',
            type: 'bar',
        };
        
        var trace2 = {
            x: ['South Korea', 'China', 'Canada'],
            y: [13, 15, 12],
            name: 'Silver',
            type: 'bar',
        };
        
        var trace3 = {
            x: ['South Korea', 'China', 'Canada'],
            y: [11, 8, 12],
            name: 'Bronze',
            type: 'bar',
        };
        
        var data = [trace1, trace2, trace3];
        
        var layout = {
            scattermode: 'group',
            title: 'Grouped by Country',
            xaxis: {title: 'Country'},
            yaxis: {title: 'Medals'},
            barcornerradius: 15,
        };
        this.state = {data: data,layout: layout}
    }

    render() {
        return (
            <div>
                <Plot
                    data={this.state.data} layout={this.state.layout}
                />
            </div>
        )
    }
}