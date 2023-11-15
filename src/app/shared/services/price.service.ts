import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BodyPrices } from '../models/bodyPrices.model';
import { Prices } from '../models/prices.model';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  // En estas pruebas no hace falta seguridad ni Headers, pero lo ideal seria aderirlo aqui
  findPriceFechaRango(bodyPrices: BodyPrices) {
    return this.http.post(this.createBaseRoute() + 'findPriceFechaRango', bodyPrices)
                .toPromise()
                .then(data => data as Prices[]);
  }

  savePrice(priceAdd: Prices) {
    return this.http.post(this.createBaseRoute() + 'savePrice', priceAdd)
                .toPromise()
                .then(data => data as Prices);
  }

  // Lo ideal es separarlo por entornos, y hacer referencias a enviroment.ts
  // El Proxy que hace el ruteo al endpoint, esta en el puerto 9090
  createBaseRoute() {
    return 'http://localhost:9090/pruebacristian/price/';
  }

}
