import { Categorie } from "./categorie.model";

export class Produit {
    idProduit! : number; // ? peut avoir une valeur ou peu etre nul
    nomProduit! : string;
    prixProduit! : number;
    dateCreation! : Date ;
    categorie!  :Categorie ; 
    }