
import {Component, OnInit, Input} from '@angular/core';
import { CalcCurrencyService } from '../calc-currency.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

    items = ["UAH", 'USD', 'EUR'];
    input1: number = 0;
    input2: number = 0;
    result: number = 1;
    valueUah: any;
    valueUsdEur: any;

    firstAcum: number = 0;
    secondAcum: number = 0;


    constructor(private calcService: CalcCurrencyService){
        calcService.render()
    }

    back(): any {
       if (this.firstAcum ==  this.secondAcum ) {
           return this.result;
       } 
       else if ( this.firstAcum == 0 && this.secondAcum == 1 || this.firstAcum == 1 && this.secondAcum == 0 ) {
            return this.valueUah.usd
       } 
       else if ( this.firstAcum == 0 && this.secondAcum == 2 || this.firstAcum == 2 && this.secondAcum == 0 ) {
            return this.valueUah.eur
       } 
       else if ( this.firstAcum == 1 && this.secondAcum == 2 || this.firstAcum == 2 && this.secondAcum == 1){
           return this.valueUsdEur.coef
       }
    }

    firstSelectHandle(event: any): void {
        for (let key of event.target){
            if(key.selected === true){
                this.firstAcum = key.id
            }
        }
        this.firstInputHandle(event)
    }

    secondSelectHandle(event: any): void {
        for (let key of event.target){
            if(key.selected === true){
                this.secondAcum = key.id
            }
        }
        this.secondInputHandle(event)
    }

    firstInputHandle(event: any): void {
        if (this.firstAcum < this.secondAcum){
            this.input2 = this.input1 * this.back();
        }
        else this.input2 = this.input1 / this.back();
    }

    secondInputHandle(event: any): void {
        if (this.firstAcum < this.secondAcum) {
            this.input1 = this.input2 / this.back();
        } 
        else this.input1 = this.input2 * this.back()
    }

    ngOnInit(): void {
        this.valueUah = this.calcService.dataUahReturn;
        this.valueUsdEur = this.calcService.dataUsdEurReturn
    }

}