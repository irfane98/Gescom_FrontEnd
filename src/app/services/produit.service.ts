import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategorieWrapper } from '../model/categorieWrapped.model';
import { apiURL } from '../config';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})


export class ProduitService {

  apiURLCat: string = 'http://localhost:8080/produits/cat';

  produits : Produit[]
  
  //categories:Categorie[]; 
 
  
  constructor(private http : HttpClient) {
    /*
    this.categories=[{idCat : 1, nomCat : "PC"},
                     {idCat : 2, nomCat : "Imprimante"}
                    ]
    */
    this.produits = [
      { idProduit : 1,
        nomProduit : "PC Asus", prixProduit : 3000.600,
        dateCreation : new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}
      },
     { idProduit : 2,
        nomProduit : "Imprimante Epson", prixProduit : 450,
        dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"}
      },
        { idProduit : 3,
        nomProduit :"Tablette Samsung", prixProduit : 900.123,
        dateCreation : new Date("02/20/2020"),categorie : {idCat : 1, nomCat : "PC"}
      }];
   } 
  
   
   
listeProduit(): Observable<Produit[]>{
  return this.http.get<Produit[]>(apiURL);
  }

  ajouterProduit( prod: Produit):Observable<Produit>{
    return this.http.post<Produit>(apiURL, prod, httpOptions);
    }

    supprimerProduit(id : number) {
      const url = `${apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

      
    consulterProduit(id: number): Observable<Produit> {
      const url = `${apiURL}/${id}`;
      return this.http.get<Produit>(url);
      }

      trierProduits(){
        this.produits = this.produits.sort((n1,n2) => {
          if (n1.idProduit > n2.idProduit) {
              return 1;
          }
          if (n1.idProduit < n2.idProduit) {
              return -1;
          }
        return 0;
      });
      }
    

      updateProduit(prod :Produit) : Observable<Produit>
        {
            return this.http.put<Produit>(apiURL, prod, httpOptions);//httpOptions pour indiquer que un json 
        }

      
      
     /* listeCategories():Observable<CategorieWrapper>{
          return this.http.get<CategorieWrapper>(apiURLCat);
          }

    /*   consulterCategorie(id:number): Categorie{
          return this.categories.find(cat => cat.idCat == id)!;
          } */

          rechercherParCategorie(idCat: number):Observable< Produit[]> {
            const url = `${apiURL}/prodscat/${idCat}`;
            return this.http.get<Produit[]>(url);
            }
      
}
