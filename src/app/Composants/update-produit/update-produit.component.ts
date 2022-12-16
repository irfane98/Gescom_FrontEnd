import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit{

  currentProduit= new Produit;
  categories!:Categorie[];
  updatedCatId!:number;
constructor(private activatedRoute: ActivatedRoute,private router :Router,
  private produitService: ProduitService){}

  ngOnInit(): void {
      console.log(this.activatedRoute.snapshot.params["id"]);
      this.categories=this.produitService.listeCategories();

      this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot. params['id']);
      console.log(this.currentProduit);
      this.updatedCatId = this.currentProduit.categorie.idCat
      
  }
  updateProduit()
  { //console.log(this.currentProduit);
    this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId)
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits'])
  }
}
