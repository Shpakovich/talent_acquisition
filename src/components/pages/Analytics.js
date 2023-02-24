import React, { Component } from 'react';
import './Analytics.css'
import ReactEcharts from "echarts-for-react"
import Typography from "@mui/material/Typography";

const barOptions = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', 'Прошли', 'Отклонено', 'Ушли'],
            ['Первая форма', 186, 0, 0],
            ['Вторая форма', 83, 0, 103],
            ['Тестирование', 50, 31, 2],
            ['Интервью', 26, 16, 8]
        ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar', color: '#4c4fff' }, { type: 'bar', color: 'red' }, { type: 'bar', color: 'gray' }]
};

const payData = [
    ////////////////////////////////////////
    [
        { name: 'VK', value: 56 },
        { name: 'База TA', value: 10 },
        { name: 'Рассылки', value: 8 },
        { name: 'Баннеры', value: 5 },
        { name: 'Яндекс', value: 5 },
        { name: 'Посты в соц. сетях', value: 38 }
    ]
];
const payOptions = {
    title: {
        text: 'Количество пришедших людей по каналам трафика',
        left: 'center',
        textStyle: {
            color: '#999',
            fontWeight: '400',
            fontSize: 20
        }
    },
    series: payData.map(function (data, idx) {
        return {
            type: 'pie',
            radius: [140, 200],
            top: '0',
            height: '100%',
            left: 'center',
            width: '100%',
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 4
            },
            label: {
                alignTo: 'edge',
                formatter: '{name|{b}}\n{time|{c} заявок}',
                minMargin: 5,
                edgeDistance: 20,
                lineHeight: 25,
                rich: {
                    time: {
                        fontSize: 15,
                        color: 'rgba(0, 0, 0, 0.54)'
                    }
                }
            },
            labelLine: {
                length: 15,
                length2: 0,
                maxSurfaceAngle: 80
            },
            labelLayout: function (params) {
                const isLeft = params.labelRect.x /*< myChart.getWidth() / 2*/;
                const points = params.labelLinePoints;
                // Update the end point.
                points[2][0] = isLeft
                    ? params.labelRect.x
                    : params.labelRect.x + params.labelRect.width;
                return {
                    labelLinePoints: points
                };
            },
            data: data
        };
    })
};

export default class Analytics extends Component {
    render() {
        return (
            <div className="Analytics">
                <p>Analytics</p>
                <div className="Analytics-wrap">
                    <div className="Analytics-charts">
                        <Typography variant="h6" align="center" color="text.secondary">
                            Статистика отсеивания кандидатов по этапам
                        </Typography>
                        <ReactEcharts
                            option={barOptions}
                            className="Analytics-chart"
                            style={{ width: "600px", height: "400px" }}
                        />
                    </div>
                    <div className="Analytics-charts">
                        <ReactEcharts
                            option={payOptions}
                            className="Analytics-chart"
                            style={{ width: "100%", height: "600px" }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}