import { Component } from '@angular/core';
import { ICircle } from './donut.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // items1: Array<{ name: string; count: number; color: string }> = [
  //   { name: 'Orange', count: 70, color: 'LightSeaGreen' },
  //   { name: 'Apple', count: 30, color: 'lightGray' },

  // ];

  // items2: Array<{ name: string; count: number; color: string }> = [
  //   { name: 'Orange', count: 80, color: 'orange' },
  //   { name: 'Blue', count: 10, color: 'navy' },
  //   { name: 'Purple', count: 10, color: 'orchid' },
  // ];

  // radisus=[10,20,30];

  circles: Array<ICircle> = [
    {
      radius: 40,
      segments: [
        { name: 'Orange', count: 70, color: '#31B78F' },
        { name: 'Apple', count: 30, color: '#E9EFF9' },
      ],
      total: 100,
    },
    {
      radius: 30,
      segments: [
        { name: 'Orange', count: 80, color: '#FFAC81' },
        { name: 'Blue', count: 10, color: '#265DC1' },
        { name: 'Purple', count: 10, color: '#9692CD' },
      ],
      total: 100,
    },
    {
      radius: 20,
      segments: [
        { name: 'Orange', count: 80, color: 'orange' },
        { name: 'Blue', count: 10, color: 'green' },
        { name: 'Purple', count: 10, color: 'navy' },
      ],
      total: 100,
    },
    {
      radius: 10,
      segments: [
        { name: 'Orange', count: 80, color: 'cyan' },
        { name: 'Blue', count: 10, color: 'red' },
      ],
      total: 100,
    },
  ];
}
