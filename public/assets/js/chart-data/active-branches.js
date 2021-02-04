
			Highcharts.chart('active-branches', {
                chart: {
                    type: 'bar',
                    backgroundColor: 'transparent'
                },
                title: {
                    text: 'RevenueStreams',
                    style: {
                        color: '#12263f'
                    }
                },
                xAxis: {
                    categories: ['Rooming', 'Amenities', 'Restaurant/Bar', 'Grounds', 'Conference']
                },
                yAxis: {
                    gridLineColor: '#95aac9',
                    gridLineDashStyle: 'ShortDot',
                    gridLineWidth: 0.3,
                    min: 0,
                    title: {
                        text: 'Revenue from various streams'
                    }
                },
                legend: {
                    reversed: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                series: [{
                    name: 'Kiambu',
                    data: [52132, 33212, 41213, 72321, 21312],
                    color:'#06af00'
                }, {
                    name: 'Nairobi',
                    data: [25654, 24353, 33454, 34532, 64571],
                    color: '#0000FF'
                }, {
                    name: 'Nakuru',
                    data: [45654, 34353, 32454, 37532, 40571],
                    color: '#f67615'
                },{
                    name: 'Kisumu',
                    data: [50654, 20353, 30454, 37532, 66571],
                    color: '#fc1909'
                },
            ]
            });
            