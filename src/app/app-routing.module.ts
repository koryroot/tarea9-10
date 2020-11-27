import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFacturasComponent } from './view/edit-facturas/edit-facturas.component';
import { ListaFacturasComponent } from './view/lista-facturas/lista-facturas.component';

const routes: Routes = [
  {
    path: 'lista-facturas',
    component:ListaFacturasComponent
  },
  {
    path: 'factura/:accion',
    component: EditFacturasComponent
  },
  { path: '**', component:ListaFacturasComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
