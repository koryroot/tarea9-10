import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiCrudService {
  private listaFacturas = [
    {nombre_cliente: 'juan', id: 1, total: 2500},
    {nombre_cliente: 'luis', id: 2, total: 2600},
    {nombre_cliente: 'manuel', id: 4, total: 3500},
    {nombre_cliente: 'julio', id: 3, total: 4500},
    {nombre_cliente: 'manuel', id: 5, total: 5500},

  ]
  constructor() { }

  getBillsList(){
    return this.listaFacturas;
  }
}
