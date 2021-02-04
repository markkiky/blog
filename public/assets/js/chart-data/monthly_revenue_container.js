 // Create the chart
//Highcharts.setOptions({
//    colors: ['#67ff6b']
//});
Highcharts.chart('monthly_revenue_container', {
    chart: {
        backgroundColor: 'transparent',
        type: 'column'
    },
    title: {
        text: null,
        style: {
            color: '#a5a8ad'
        }
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            borderColor: '#67ff6b'
        }
    },

    xAxis: {
        type: 'category',
        lineColor: '#a5a8ad',
        lineWidth: 1,
        labels: {
            style: {
                color: '#a5a8ad'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Total Collections',
            gridLineColor: '#2e3134',
            labels: {
                style: {
                    color: '#a5a8ad'
                }
            }
        }

    },
    legend: {
        enabled: true,
        backgroundColor: 'transparent',
		 color: '#a5a8ad',
		  itemStyle: {
//                 fontSize:'35px',
//                 font: '35pt Trebuchet MS, Verdana, sans-serif',
                 color: '#a5a8ad'
              },
              itemHoverStyle: {
                 color: 'white'
              },
              itemHiddenStyle: {
                 color: '#444'
              },
        style: {
            color: '#a5a8ad',

        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:16px; font-weight:800;">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:{point.color}>' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + '' + '<br/></p>';
            if (point.drilldown) {
                s += '<p><br/> Click to view <b>' + point.name + '</b> Collections </p>';
            }
            return s;
        },
        crosshairs: true


    },
    lang: {
        thousandsSep: ','
    },

    series: [{
        name: "Monthly Transactions",
        colorByPoint: false,
		color: '#ffc721', // blue
        data: [{
                name: "Jan",
                y: 2000000,
                drilldown: "january"
            },
            {
                name: "Feb",
                y: 300000,
                drilldown: "february"
            },
            {
                name: "Mar",
                y: 2536000,
                drilldown: "march"
            },
            {
                name: "Apr",
                y: 3258023,
                drilldown: "april"
            },
            {
                name: "May",
                y: 2225895,
                drilldown: "may"
            },
            {
                name: "Jun",
                y: 1956895,
                drilldown: "june"
            },
            {
                name: "jul",
                y: 2356987,
                drilldown: "july"
            },
            {
                name: "Aug",
                y: 2758956,
                drilldown: "august"
            },
            {
                name: "Sep",
                y: 3569263,
                drilldown: "september"
            },
            {
                name: "Oct",
                y: 2658956,
                drilldown: "october"
            },
            {
                name: "Nov",
                y: 3258596,
                drilldown: "november"
            },
            {
                name: "Dec",
                y: 3256968,
                drilldown: "dec"
            }
        ]
    }],
    drilldown: {
        series: [{
            name: 'january',
            id: 'january',
            data: [{
                    name: '1st',
                    y: 22,
                    drilldown: 'jan1'
                },
                {
                    name: '2nd',
                    y: 22,
                    drilldown: 'jan2'
                },
                {
                    name: '3rd',
                    y: 224,
                    drilldown: 'jan3'
                },
                {
                    name: '4th',
                    y: 202,
                    drilldown: 'jan3'
                },
                {
                    name: '5th',
                    y: 272,
                    drilldown: 'jan5'
                },
                {
                    name: '6th',
                    y: 172,
                    drilldown: 'jan6'
                }, {
                    name: '7th',
                    y: 122,
                    drilldown: 'jan6'
                }, {
                    name: '8th',
                    y: 172,
                    drilldown: 'jan8'
                }, {
                    name: '9th',
                    y: 105,
                    drilldown: 'jan9'
                }, {
                    name: '10th',
                    y: 272,
                    drilldown: 'jan10'
                }, {
                    name: '11th',
                    y: 272,
                    drilldown: 'jan11'
                }, {
                    name: '12th',
                    y: 572,
                    drilldown: 'jan12'
                }, {
                    name: '13th',
                    y: 72,
                    drilldown: 'jan13'
                }, {
                    name: '13th',
                    y: 292,
                    drilldown: 'jan13'
                }, {
                    name: '14th',
                    y: 472,
                    drilldown: 'jan14'
                }, {
                    name: '15th',
                    y: 272,
                    drilldown: 'jan15'
                }, {
                    name: '16th',
                    y: 394,
                    drilldown: 'jan16'
                }, {
                    name: '17th',
                    y: 27,
                    drilldown: 'jan17'
                }, {
                    name: '18th',
                    y: 372,
                    drilldown: 'jan18'
                }, {
                    name: '19th',
                    y: 524,
                    drilldown: 'jan19'
                }, {
                    name: '20th',
                    y: 564,
                    drilldown: 'jan20'
                }, {
                    name: '21st',
                    y: 272,
                    drilldown: 'jan21'
                }, {
                    name: '22nd',
                    y: 22,
                    drilldown: 'jan22'
                }, {
                    name: '23rd',
                    y: 272,
                    drilldown: 'jan23'
                }, {
                    name: '24th',
                    y: 272,
                    drilldown: 'jan24'
                }, {
                    name: '25th',
                    y: 172,
                    drilldown: 'jan25'
                }, {
                    name: '26th',
                    y: 272,
                    drilldown: 'jan26'
                }, {
                    name: '27th',
                    y: 272,
                    drilldown: 'jan27'
                }, {
                    name: '28th',
                    y: 452,
                    drilldown: 'jan28'
                }, {
                    name: '29th',
                    y: 458,
                    drilldown: 'jan29'
                }, {
                    name: '30th',
                    y: 226,
                    drilldown: 'jan30'
                }, {
                    name: '31st',
                    y: 152,
                    drilldown: 'jan31'
                }
            ]
        }, {
            name: 'Chrome',
            id: 'Chrome',
            data: [
                ['v40.0', 5],
                ['v50.0', 7],
                ['v60.0', 8],
                ['v70.0', 17],
                ['v80.0', 37],
                ['v89.0', 27]
            ]
        }, {
            name: '1st January',
            id: 'jan1',
			type: 'spline',
            data: [
                ['12AM', 17.2],
                ['1AM', 25.2],
                ['2AM', 25.2],
                ['3AM', 5],
                ['4AM', 7],
                ['5AM', 8],
                ['6AM', 17],
                ['7AM', 37],
                ['8AM', 27],
                ['9AM', 17.2],
                ['10AM', 25.2],
                ['11AM', 5],
                ['12PM', 7],
                ['1PM', 8],
                ['2PM', 17],
                ['3PM', 37],
                ['4PM', 27],
                ['5PM', 27],
                ['5PM', 8],
                ['6PM', 17],
                ['7PM', 37],
                ['8PM', 27],
                ['9PM', 17.2],
                ['10PM', 25.2],
                ['11PM', 5],
            ]
        }, {
            name: '2nd January',
            id: 'jan2',
			type: 'spline',
            data: [
                ['12AM', 17.2],
                ['1AM', 25.2],
                ['2AM', 25.2],
                ['3AM', 5],
                ['4AM', 7],
                ['5AM', 8],
                ['6AM', 17],
                ['7AM', 37],
                ['8AM', 27],
                ['9AM', 17.2],
                ['10AM', 25.2],
                ['11AM', 5],
                ['12PM', 7],
                ['1PM', 8],
                ['2PM', 17],
                ['3PM', 37],
                ['4PM', 27],
                ['5PM', 27],
                ['5PM', 8],
                ['6PM', 17],
                ['7PM', 37],
                ['8PM', 27],
                ['9PM', 17.2],
                ['10PM', 25.2],
                ['11PM', 5],
            ]
        }]
    }
});
