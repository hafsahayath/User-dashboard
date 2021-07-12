import React from 'react'
import { GoogleCharts } from 'google-charts';
import '../styles/PieChart-style.css'

const PieChart = ({newObj}) => {

    GoogleCharts.load(drawChart);

    let pieData = Object.entries(newObj)
    console.log(...pieData)

    function drawChart() {

        // Standard google charts functionality is available as GoogleCharts.api after load
        const data = GoogleCharts.api.visualization.arrayToDataTable([
            ['Chart thing', 'Chart amount'],
            ...pieData
        ]);

        const options = {
            backgroundColor: 'grey'
        }

        const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('piechart'));
        pie_1_chart.draw(data, options);
    }

    return (
        <div>
            <div id="piechart" style={{height:'350px', width:'350px'}}></div>
        </div>
    )
}

export default PieChart;