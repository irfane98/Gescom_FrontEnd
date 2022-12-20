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
   
  }

  ngOnInit(): void {

    this.chargerProduits();
  }
  
  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
  }
  supprimerProduit(p : Produit){

      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
      console.log("produit supprimé");
      this.chargerProduits();
      
      });
    
  }
}
