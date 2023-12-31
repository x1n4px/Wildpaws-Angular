import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { IngredientesComponent } from './component/pestañas/ingredientes/ingredientes.component';
import { IngredientesModalComponent } from './component/pestañas/ingredientes-modal/ingredientes-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { MatDialogModule } from '@angular/material/dialog';
 import { ComidasecaComponent } from './component/pestañas/comidaseca/comidaseca.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductoIndividualComponent } from './component/pestañas/producto-individual/producto-individual.component';
 import { LoginComponent } from './component/pestañas/usuario/login/login.component';
import { UserHomeComponent } from './component/pestañas/usuario/user-home/user-home.component';
import { CestaComponent } from './component/pestañas/usuario/cesta/cesta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusquedaInputComponent } from './component/pestañas/busqueda-input/busqueda-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    IngredientesComponent,
    IngredientesModalComponent,
    ModalComponentComponent,
     ComidasecaComponent,
    FooterComponent,
    ProductoIndividualComponent,
     LoginComponent,
    UserHomeComponent,
    CestaComponent,
    BusquedaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
