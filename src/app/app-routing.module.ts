import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './Composants/add-produit/add-produit.component';
import { ProduitsComponent } from './Composants/produits/produits.component';
import { RechercheParCategorieComponent } from './Composants/recherche-par-categorie/recherche-par-categorie.component';
import { UpdateProduitComponent } from './Composants/update-produit/update-produit.component';

const routes: Routes = [
  {path : "produits" , component : ProduitsComponent},
  {path:"add-produit", component : AddProduitComponent},
  {path:"updateProduit/:id", component : UpdateProduitComponent},
  {path:"rechercheParCategorie" , component : RechercheParCategorieComponent},
  {path:"",redirectTo:"produits",pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
