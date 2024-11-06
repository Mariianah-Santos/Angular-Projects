import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent
  ],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {

  @Input() title: string = "" ;
  @Input() primaryBtnText: string = "";
  @Input() secondBtnText: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();
  @Input() disablePrimaryBtn: boolean = true;

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }

}