import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits?:Produit[]; // un tableau de produit 
  

  constructor(private produitService : ProduitService){
   ;
  }

  ngOnInit(): void {
    this.produits=this.produitService.listeProduits()
  }
  supprimerProduit(prod : Produit){
   // console.log(prod); pour verifier si il affiche bien l'element à supprimer
   let conf = confirm("Etes-vous sûr ?");
   if (conf)
      this.produitService.supprimerProduit(prod);
    
  }
}
