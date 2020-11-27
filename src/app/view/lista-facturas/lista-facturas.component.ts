import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/services/api-crud.service';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.scss']
})
export class ListaFacturasComponent implements OnInit {

  public listItem = [];
  constructor(private api:ApiCrudService) {
    this.listItem = this.api.getBillsList();
   }

  ngOnInit(): void {

  }
  edit(id: number){
    console.log(id);
    this.listItem.splice(id-1,1);
  }
}
