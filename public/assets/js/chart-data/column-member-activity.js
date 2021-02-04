var data = {
    Exit: [
        ['Jan', 100],
        ['Feb', 90],
        ['Mar', 60],
        ['Apr', 17],
        ['May', 19],
        ['Jun', 26],
        ['Jul', 27],
        ['Aug', 46],
        ['Sep', 38],
        ['Oct', 75],
        ['Nov', 80],
        ['Dec', 95]
    ],
    Entry: [
        ['Jan', 13],
        ['Feb', 70],
        ['Mar', 80],
        ['Apr', 110],
        ['May', 24],
        ['Jun', 38],
        ['Jul', 29],
        ['Aug', 46],
        ['Sep', 46],
        ['Oct', 60],
        ['Nov', 50],
        ['Dec', 38]
    ],

};

var chart = Highcharts.chart('members-activity', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Member Activity Summary',
		style: {
            color: '#12263f'
        }
    },
    subtitle: {
        text: 'Comparisons between member exits and entry.',
		style: {
            color: '#12263f'
        }
    },
    plotOptions: {
        series: {
            grouping: false,
            borderWidth: 0
        }
    },

    legend: {
        enabled: true,
        backgroundColor: 'transparent',
		 color: '#12263f',
		  itemStyle: {
//                 fontSize:'35px',
//                 font: '35pt Trebuchet MS, Verdana, sans-serif',
                 color: '#12263f'
              },
              itemHoverStyle: {
                 color: 'white'
              },
              itemHiddenStyle: {
                 color: '#444'
              },
        style: {
            color: '#12263f',

        }
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    xAxis: {
        type: 'category',
    },
    yAxis: [{
        gridLineColor: '#95aac9',
        gridLineDashStyle: 'ShortDot',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Member Activity'
        },
    }],
    series: [{
        name: 'Exits',
        color: '#efa36b',
        pointPlacement: -0.2,
        data: data["Exit"].slice(),
    }, {
        name: 'Entries',
        id: 'main',
        color: '#f67615',
        data: data["Entry"].slice()
    }],
    exporting: {
        allowHTML: true
    }
});

