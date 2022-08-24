import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-slow-lib1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib1.component.html',
  styleUrls: ['./lib1.component.css'],
})
export class Lib1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
