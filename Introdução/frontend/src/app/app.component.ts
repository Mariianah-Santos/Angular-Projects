import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Joaquim";
  userData = {
    email: "marih.9796@gmail.com",
    role: "Admin"
  }
  title = 'frontend';


}
