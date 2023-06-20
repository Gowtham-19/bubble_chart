import { AfterViewInit, Component,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  date={
    year:new Date().getFullYear(),
    month:new Date().getMonth(),
    date:new Date().getDate(),
  }
  ngOnInit(): void {
    // this.generateData();
    this.renderChart();
  }
  chart_data:any=[]
  // generateData(){
  //   this.chart_data=[]
  //   for(let i=0;i<=23;i++){
  //     for(let j=10;j<=60;j=j+10){
  //       this.chart_data.push([
  //        Date.UTC(2023,6,i,j),
  //         1,
  //         Number((Math.random()*j).toFixed(0))
  //       ])
  //     }
  //   }
  //   this.renderChart()
  //   console.log("data of chart",this.chart_data)
  // }
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bubble'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date'
      }
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    title: {
      text: 'Bubble Chart Example'
    },
    series: [{
      type: 'bubble',
      data:[]
    }]
  };


  renderChart(): void {
    let startTime:any = new Date(new Date().setHours(0,0,0));
    const data = [];

    for (let hour = 0; hour < 24; hour++) {
      for(let i=1;i<=6;i++){
        
        const size = Math.random() * 50; // Generate a random bubble size
        data.push([Date.UTC(this.date['year'],this.date['month'],this.date['date'],hour,i*10), 1, size]);
      }
    }
   this.chartOptions  = {
      chart: {
        type: 'bubble',
        
      },
      title: {
        text: '24-Hour Bubble Chart'
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Time'
        },
        min: Date.UTC(this.date['year'], this.date['month'], this.date['date'], 0, 0, 0), // Start time
        max: Date.UTC(this.date['year'], this.date['month'], this.date['date'], 23, 59, 59) // End time
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      plotOptions: {
        bubble: {
          minSize:'5%',
          maxSize: '10%'
        }
      },
      series: [{
        type: 'bubble',
        name: 'Bubble Data',
        data:data
        // data: [
        //   [Date.UTC(2023, 0, 1, 1, 0, 0), 1, 10], // [x, y, z]
        //   [Date.UTC(2023, 0, 1, 1, 10, 0), 1, 10], // [x, y, z]
        //   [Date.UTC(2023, 0, 1, 1, 20, 0), 1, 10], // [x, y, z]
        //   [Date.UTC(2023, 0, 1, 1, 30, 0), 1, 10], // [x, y, z]
        //   [Date.UTC(2023, 0, 1, 4, 30, 0), 1, 20],
        //   // [Date.UTC(2023, 0, 1, 10, 15, 0), 1, 0],
        //   [Date.UTC(2023, 0, 1, 14, 45, 0), 4, 40],
        //   // [Date.UTC(2023, 0, 1, 20, 30, 0), 5, 50],
        //   // Add more data points here
        // ]
      }]
    };
    console.log("data of chsrt options",this.chartOptions)
    console.log("data of chsrt options",this.chart_data)
    Highcharts.chart('chartContainer', this.chartOptions);
  }
}
