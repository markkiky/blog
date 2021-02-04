// Make monochrome colors
var pieColors = ['#09AF00', '#1aadce', '#808080', '#FFFF00', '#FC1808'];

// Create the chart
Highcharts.chart('BookingSummary', {
  chart: {
      type: 'pie',
      backgroundColor: 'transparent'
  },
  title: {
      text: 'Loaning summary statuses'
  },
  

  accessibility: {
      announceNewData: {
          enabled: true
      },
      /* point: {
          valueSuffix: '%'
      } */
  },

  plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        startAngle: 90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '75%'
    },
      series: {
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }
  },

  tooltip: {
      headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
      pointFormat: `<span style="color:{point.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> of all hotels<br/> 
    <span style="color:{point.color}; font-size:11px"">{point.name} Revenue</span>: <b>KES {point.y:,.0f}</b><br/>`
  },

  series: [
      {
          name: "Hotel Occupancy",
          innerSize: '50%',
          colorByPoint: true,
          data: [
              {
                  name: "Kiambu",
                  y: 2335895,
                  drilldown: "kiambu"
              },
              {
                  name: "Nairobi",
                  y: 1045643,
                  drilldown: "nairobi"
              },
              {
                  name: "Kisumu",
                  y: 4561223,
                  drilldown: "kisumu"
              },
              {
                  name: "Nakuru",
                  y: 2315312,
                  drilldown: "nakuru"
              },
              
          ]
      }
  ],
  drilldown: {
      series: [
          {
              name: "Accomodation in Kiambu",
              id: "kiambu",
              data: [
                  [
                      "Rooming",
                      3123
                  ],
                  [
                      "Restaurant/Bar",
                      45643
                  ],
                  [
                      "Amenities",
                      45623
                  ],
                  [
                      "Grounds",
                      52365
                  ],
                  [
                      "Conference",
                      4526
                  ]
              ]
          },
          {
              name: "Watch",
              id: "watch",
              data: [
                  [
                      "Rooming",
                      3123
                  ],
                  [
                      "Restaurant/Bar",
                      45643
                  ],
                  [
                      "Amenities",
                      45623
                  ],
                  [
                      "Restaurant/Bar",
                      52365
                  ],
                  [
                      "Grounds",
                      4526
                  ],
                  [
                      "Conference",
                      12365
                  ],
                 
              ]
          },
          {
              name: "nairobi",
              id: "nairobi",
              data: [
                  [
                      "Rooming",
                      3123
                  ],
                  [
                      "Restaurant/Bar",
                      45643
                  ],
                  [
                      "Amenities",
                      45623
                  ],
                  [
                      "Restaurant/Bar",
                      52365
                  ],
                  [
                      "Grounds",
                      4526
                  ],
                  [
                      "Conference",
                      12365
                  ],
                 
              ]
          },
          {
              name: "Kisumu",
              id: "kisumu",
               data: [
                  [
                      "Rooming",
                      3123
                  ],
                  [
                      "Restaurant/Bar",
                      45643
                  ],
                  [
                      "Amenities",
                      45623
                  ],
                  [
                      "Restaurant/Bar",
                      52365
                  ],
                  [
                      "Grounds",
                      4526
                  ],
                  [
                      "Conference",
                      12365
                  ],
                 
              ]
          },
          {
              name: "Nakuru",
              id: "nakuru",
               data: [
                  [
                      "Rooming",
                      3123
                  ],
                  [
                      "Restaurant/Bar",
                      45643
                  ],
                  [
                      "Amenities",
                      45623
                  ],
                  [
                      "Restaurant/Bar",
                      52365
                  ],
                  [
                      "Grounds",
                      4526
                  ],
                  [
                      "Conference",
                      12365
                  ],
                 
              ]
          }
      ]
  }
});