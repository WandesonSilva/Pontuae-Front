import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GraphicService } from '../../../service/graphic.service';

declare var Chart: any;

@Component({
  selector: 'app-card-peak-day-week',
  templateUrl: './card-peak-day-week.component.html',
  styleUrls: ['./card-peak-day-week.component.css']
})
export class CardPeakDayWeekComponent implements AfterViewInit {
public data: any[] = [1,3,4,5,6,23,43,32,4,6,14,3];
  constructor(private service: GraphicService) { }
   title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  months: any[] = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: this.months,
          datasets: [{
              label: '# of janeiro',
              data: this.data,
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(224, 0, 234, 1)',
                ' rgba(224, 0, 162, 1)',
                'rgba(67, 79, 162, 1)',
              ],
              borderWidth: 2
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    });
  }

  /* render(){
    var el: any = document.getElementById('myChart');
    var ctx = el.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: this.data,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  } */
}


/* this.canvas = document.getElementById('myChart');
this.ctx = this.canvas.getContext('2d');
let myChart = new Chart(this.ctx, {
  type: 'pie',
  data: {
      labels: ["New", "In Progress", "On Hold"],
      datasets: [{
          label: '# of Votes',
          data: [1,2,3],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
    responsive: false,
    display:true
  }
}); */
