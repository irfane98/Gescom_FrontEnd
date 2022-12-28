import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{
  nomProduit!:string
  produits!:Produit[];

constructor(private produitService : ProduitService){

}

  ngOnInit(): void {
      
  }
  rechercherProds(){
    this.produitService.rechercherParNom(this.nomProduit)
    .subscribe(prods => {
    this.produits = prods;
    console.log(prods)});
      }
}
