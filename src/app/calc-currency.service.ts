import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcCurrencyService { 
  
  

  dataUah: {usd: number, eur: number} = {
    usd: 0,
    eur: 0
  };
  dataUsdEur: {coef: number} = {
    coef: 0
  }

  get dataUahReturn(): any {
    return this.dataUah;
  }

  get dataUsdEurReturn(): any {
    return this.dataUsdEur
  }
  
  
  render (): void {
   fetch('https://api.apilayer.com/fixer/latest?symbols=EUR,USD&base=UAH', {
      method: 'GET',
      redirect: 'follow',
      headers: {
        "apikey": "jCq1gIn7c4k2SBgIJ4Lij4DV44r4smaW"
      }
      
    })
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .then(result => {
      this.dataUah.usd = result.rates.USD;
      this.dataUah.eur = result.rates.EUR;
    })
    .catch(error => console.log('error', error))

    fetch('https://api.apilayer.com/fixer/latest?symbols=EUR&base=USD', {
      method: 'GET',
      redirect: 'follow',
      headers: {
        "apikey": "jCq1gIn7c4k2SBgIJ4Lij4DV44r4smaW"
      }
      
    })
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .then(result => {
      this.dataUsdEur.coef = result.rates.EUR
      console.log(this.dataUsdEur)
    })
    .catch(error => console.log('error', error))



    
  
  } 
}

 

  