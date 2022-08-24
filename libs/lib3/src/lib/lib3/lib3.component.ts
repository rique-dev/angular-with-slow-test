import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-slow-lib3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib3.component.html',
  styleUrls: ['./lib3.component.css'],
})
export class Lib3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
