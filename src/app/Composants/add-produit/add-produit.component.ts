import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

newProduit = new Produit();
newIdCat!:number
newCategorie!:Categorie

categories!:Categorie[];

 
message ?:string ; 

constructor(private produitService : ProduitService, private router : Router){

}
  ngOnInit(): void {
      this.categories = this.produitService.listeCategories()
  }

  addProduit(){
    //console.log(this.newProduit); // affiche le produit ajouter dans la console 
    this.newCategorie=this.produitService.consulterCategorie(this.newIdCat)
    this.newProduit.categorie=this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit)
    this.message = " Le produit "+ this.newProduit.nomProduit + " ajouter avec succès!!"
    this.router.navigate(['produits'])
    }

}