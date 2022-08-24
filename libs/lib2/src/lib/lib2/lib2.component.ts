import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-slow-lib2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib2.component.html',
  styleUrls: ['./lib2.component.css'],
})
export class Lib2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
