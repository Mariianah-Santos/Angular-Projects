import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  baseCurrency = 'USD';
  targetCurrency = 'BRL';
  amount = 1;
  result!: number;

  constructor(private currecyService: CurrencyService) {

  }

  convert() {
    this.currecyService.converter(this.baseCurrency).subscribe(data => {
      const rate = data.rates[this.targetCurrency];
      this.result = this.amount * rate;
    
    });
  }

}
