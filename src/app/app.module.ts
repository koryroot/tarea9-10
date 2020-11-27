import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaFacturasComponent } from './view/lista-facturas/lista-facturas.component';
import { EditFacturasComponent } from './view/edit-facturas/edit-facturas.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListaFacturasComponent,
    EditFacturasComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
