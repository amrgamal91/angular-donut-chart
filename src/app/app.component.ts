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
        { name: 'Orange', count: 70, color: 'LightSeaGreen' },
        { name: 'Apple', count: 30, color: 'lightGray' },
      ],
      total: 100,
    },
    {
      radius: 30,
      segments: [
        { name: 'Orange', count: 80, color: 'orange' },
        { name: 'Blue', count: 10, color: 'navy' },
        { name: 'Purple', count: 10, color: 'orchid' },
      ],
      total: 100,
    },
    {
      radius: 20,
      segments: [
        { name: 'Orange', count: 80, color: 'red' },
        { name: 'Blue', count: 10, color: 'green' },
        { name: 'Purple', count: 10, color: 'blue' },
      ],
      total: 100,
    },
    {
      radius: 10,
      segments: [
        { name: 'Orange', count: 80, color: 'cyan' },
        { name: 'Blue', count: 10, color: 'silver' },
      ],
      total: 100,
    },
  ];
}
