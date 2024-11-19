import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {

  size = 30;
  font = 'Arial';
  color = 'red';
  classes = ['green-title', 'small-title'];
}
