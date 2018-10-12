import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopulationChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                title: {
                    text: 'Bevölkerung Deutschlands im Dezember 2017 in Millionen',
                    align: 'center',
                    style: {
                        fontSize: '25'
                    }
                },
                xaxis: {
                    categories: [
                        'Nordrhein-Westfalen',
                        'Bayern',
                        'Baden-Württemberg',
                        'Niedersachsen',
                        'Hessen',
                        'Sachsen',
                        'Rheinland-Pfalz',
                        'Berlin',
                        'Schleswig-Holstein',
                        'Brandenburg',
                        'Sachsen-Anhalt',
                        'Thüringen',
                        'Hamburg',
                        'Mecklenburg-Vorpommern',
                        'Saarland',
                        'Bremen'
                    ]
                }
            },
            series: [{
                name: 'bar-chart',
                data: [
                    17912000,
                    12997000,
                    11023000,
                    7963000,
                    6243000,
                    4081000,
                    4074000,
                    3613000,
                    2890000,
                    2504000,
                    2223000,
                    2151000,
                    1831000,
                    1611000,
                    994000,
                    681000
                ]
            }]
        };
    }

    render() {
        return <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="100%"
            height="800"
        />
    }
}

export default PopulationChart;