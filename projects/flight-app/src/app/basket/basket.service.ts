import { Injectable } from '@angular/core';
import { Flight } from '@flight-workspace/flight-api';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public basket = {
    "3": true,
    "5": true
  };

  constructor() { }

  public isAFlightSelected(): boolean {
    let isSelected = Object.keys(this.basket).some((key) => {
      return this.basket[key];
    });

    return isSelected;
  }

}
