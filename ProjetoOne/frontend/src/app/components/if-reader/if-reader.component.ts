import { Component } from '@angular/core';

@Component({
  selector: 'app-if-reader',
  templateUrl: './if-reader.component.html',
  styleUrl: './if-reader.component.css'
})
export class IfReaderComponent {
  name = "Mariana";
  canShow: boolean = false;

}
