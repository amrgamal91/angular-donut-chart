import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css'],
})
export class DonutComponent implements OnInit {
  @Input() circles: Array<ICircle>;

  ngOnInit() {
    for (let x of this.circles) {
      x.total = x.segments.map((a) => a.count).reduce((x, y) => x + y);
    }
  }

  getPerimeter(radius: number): number {
    return Math.PI * 2 * radius;
  }

  getColor(index: number, circleIndex: number): string {
    return this.circles[circleIndex].segments[index].color;
  }

  getOffset(radius: number, index: number, circleIndex: number): number {
    var percent = 0;
    for (var i = 0; i < index; i++) {
      percent +=
        this.circles[circleIndex].segments[i].count /
        this.circles[circleIndex].total;
    }
    var perimeter = Math.PI * 2 * radius;
    return perimeter * percent;
  }
}
export interface ICircle {
  radius: number;
  segments: Array<{ name: string; count: number; color: string }>;
  total: number;
}
