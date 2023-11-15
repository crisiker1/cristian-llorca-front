import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BodyPrices } from '../shared/models/bodyPrices.model';
import { Prices } from '../shared/models/prices.model';
import { PriceService } from '../shared/services/price.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayPrices: Prices[];

  constructor(private priceService: PriceService) { }

  ngOnInit () {
    // Construccion objeto con el payload
    let bodyPrices: BodyPrices = {
      // Si se deja vacia, el back obtiene la fecha actual
      appDate: "2023-11-11 21:00:00",
      productId: 1,
      brandId: 35455
    }

    // Llamada al servicio REST para obtener la tabla con bodyPrices como ejemplo
    // Si pasaramos el payload vacio, el back usaria la fecha actual, y no filtraria por productId y brandId
    this.priceService.findPriceFechaRango(bodyPrices).then(
      prices => {
        this.arrayPrices = prices;
      }).catch(err => {
        console.log('Errors loading prices');
      });
  }

}
