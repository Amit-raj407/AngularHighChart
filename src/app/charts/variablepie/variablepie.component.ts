import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import VariablePie from 'highcharts/modules/variable-pie'
VariablePie(Highcharts);

@Component({
  selector: 'app-variablepie',
  templateUrl: './variablepie.component.html',
  styleUrls: ['./variablepie.component.css']
})
export class VariablepieComponent implements OnInit {


  data = [{
    name:'Monday',
    y: 505370,
    z: 1
  }, {
    name:'Tuesday',
    y: 551500,
    z: 2
  }, {
    name:'Wednesday',
    y: 312685,
    z: 1
  }, {
    name:'Thursday',
    y: 78867,
    z: 3
  }, {
    name:'Friday',
    y: 301340,
    z: 4
  }, {
    name:'Saturday',
    y: 41277,
    z: 5
  }, {
    name:'Sunday',
    y: 357022,
    z: 5
  }];


  public options: any = {
    chart: {
      // plotBackgroundColor: null,
      // plotBorderWidth: null,
      // plotShadow: false,
      type: 'variablepie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: ``
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
        }
    },
    series: [{
      minPointSize: 100,
      innerSize: '20%',
      data: this.data
    }]
  }


  constructor() { }

  ngOnInit() {
    Highcharts.chart('container1', this.options);
  }

}
