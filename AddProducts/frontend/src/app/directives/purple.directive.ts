import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPurple]'
})
export class PurpleDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#8a2be2'
  }

}
