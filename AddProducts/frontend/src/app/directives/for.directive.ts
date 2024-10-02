import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit {

  @Input('appForEm') numbers: number[] | undefined

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    if (this.numbers && this.numbers.length > 0) {
      for (let number of this.numbers) {
        // Cria uma instância da view para cada número
        this.container.createEmbeddedView(this.template, { $implicit: number });
      }
    } else {
      console.error('Nenhum número foi passado para o appForEm');
    }
    console.log(this.numbers);
  }
}
