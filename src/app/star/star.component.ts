import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
})
export class StarComponent implements OnInit, OnChanges {
  @Input() size !: string;
  @Input() note !: number;
  rating: number = 0
  name: string = ''
  
  ngOnInit(): void {
    this.note = this.note/2;
    this.rating = this.round(this.note, 0.5);
    this.name = Math.random().toString(36).substring(7);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('je passe')
  }
  round(value: number, step: number): number {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
  }
}
