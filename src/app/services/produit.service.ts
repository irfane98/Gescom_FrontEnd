import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategorieWrapper } from '../model/categorieWrapped.model';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})


export class ProduitService {

  apiURL:string = 'http://localhost:8080/produits/api'
  apiURLCat: string = 'http://localhost:8080/produits/cat';

  produits:Produit[];// un tableau de produit 
  //categories:Categorie[]; 
  produit!:Produit
  
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
   /*
   listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
    }


    listeCategories():Observable<CategorieWrapper>{
      return this.http.get<CategorieWrapper>(this.apiURLCat);
      }

   //Ajouter un produit sans la methode de httpClient 
   /*ajouterProduit(produit:Produit){
    this.produits.push(produit);
   }

   //Ajouter produit avec la methode de httpClient 

   ajouterProduit(prod:Produit):Observable<Produit>{
    return this.http.post<Produit>(this.apiURL , prod,httpOptions)
   }
   /*
   Supprimer Prooduit sans utiliser l'Api
   supprimerProduit( prod: Produit){
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
    this.produits.splice(index, 1);
    }
    //ou Bien
    /*
    this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); 
    }
//Supprimer produit en utilisant l'api
supprimerProduit(id:number){
  const url = `${this.apiURL}/${id}`
  return this.http.delete(url , httpOptions)
}

consulterProduit(id:number):Observable<Produit>{  //pour consulter un produit
      this.produit = this.produits.find(p => p.idProduit == id)!;
      return this.http.get<Produit>(url);
      }

    //pour consulter une categorie sans faire appel a l'api 
    /*
    consulterCategorie(id : number):Categorie{
      return this.categories.find(cat=> cat.idCat==id)!
    }

    //consulter une categorie avec appel à l'Api 
    consulterCategorie(id:number):Observable<Produit>{
      const url =`${this.apiURL}/${id}`
      return this.http.get<Produit>(url)

    }
    /*Update produit en sans utiliser l'api
      updateProduit(p:Produit)
      {
      // console.log(p);
      this.supprimerProduit(p);
      this.ajouterProduit(p);
      this.trierProduits();
      }

    // Update produit avec l'utilisation de l'api

    updateProduit(prod:Produit){
      return this.http.put<Produit>(this.apiURL,httpOptions)
    }
      //trier les produits  avec l'utlisation de l'api 
      trierProduits(){
        this.produits=this.produits.sort((n1,n2)=>{
          if (n1.idProduit>n2.idProduit) {
            return 1 
          }if (n1.idProduit<n2.idProduit) {
            return -1
          }
          return 0
        })
      }
*/
listeProduit(): Observable<Produit[]>{
  return this.http.get<Produit[]>(this.apiURL);
  }

  ajouterProduit( prod: Produit):Observable<Produit>{
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
    }

    supprimerProduit(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

      
      consulterProduit(id: number): Observable<Produit> {
        const url = `${this.apiURL}/${id}`;
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
              return this.http.put<Produit>(this.apiURL, prod, httpOptions);
          }

       
       
        listeCategories():Observable<CategorieWrapper>{
            return this.http.get<CategorieWrapper>(this.apiURLCat);
            }

    /*   consulterCategorie(id:number): Categorie{
          return this.categories.find(cat => cat.idCat == id)!;
          } */

          rechercherParCategorie(idCat: number):Observable< Produit[]> {
            const url = `${this.apiURL}/prodscat/${idCat}`;
            return this.http.get<Produit[]>(url);
            }
      
}
