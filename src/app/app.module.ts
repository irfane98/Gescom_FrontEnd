import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './Composants/produits/produits.component';
import { AddProduitComponent } from './Composants/add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './Composants/update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './Composants/recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './Composants/recherche-par-nom/recherche-par-nom.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
