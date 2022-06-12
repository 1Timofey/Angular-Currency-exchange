import { Component, OnInit} from '@angular/core';

import { CalcCurrencyService } from '../calc-currency.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit{

  valueUah: any;

  constructor(private calcService: CalcCurrencyService){

  }

  firstCurr() {
    return  Math.ceil(( 1 / this.valueUah.usd) *100) / 100
  }

  secondCurr() {
    return  Math.ceil(( 1 / this.valueUah.eur) *100) / 100
  }


  ngOnInit(): void {
      this.valueUah = this.calcService.dataUahReturn;
  }

}
