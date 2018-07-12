import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders, HttpClient, } from '@angular/common/http';


//RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { Trajet } from '../models/AlloDakar-Trajet';
import { Login } from '../models/AlloDakar-Login';
import { NewTrajet } from '../models/AlloDakar-NewTrajet';
import { UsersInfosService } from './UsersInfosService';
import { Reservation } from '../models/Reservation';
import {OffreVente} from '../models/OffreVente'
import { Marque } from '../models/Marque';
import { ModeleVoit } from '../models/ModeleVoit';
@Injectable()

export class AlloDakarService {

  //Global
 private baseUrl: string = 'http://damaydem.com:49160/api/';
// private baseUrl : string ='/api/';

  objetCriter = new OffreVente();
    //users
  private serviceRegister: string = 'users/register';
  private serviceLogin: string = 'users/login';
  private newtrajetpath: string = 'trajets/new';

    //trajets
  private serviceList: string = 'trajets';
  private serviceReser: string = 'reservation/new';
  private serviceModifResev: string = 'reservation/modif';
  private serviceAnnulResev: string = 'reservation/annul';

  //Offreventes
  private servicelistoffreventes: string = 'offreVentes';
  private servicelistoffreventesbycritere: string = 'offreVentes/filtre';
  private servicecreateOffreVente: string = 'offreVentes/new';

// Marques  
  private servicelistmarque: string = 'marques';
  private servicelistmodelbymarque: string = 'marques/modeles';
  

  constructor(private http: HttpClient, private usersInfosService: UsersInfosService) {

    //this.token = this.connexionPage.GetUserToken();
    console.log("le token " + this.usersInfosService.getUserToken())
  }

  public getTrajet() {

    const url = `${this.baseUrl}${this.serviceList}`;
    // const url = this.baseUrl;
    return this.http.get(url)
      .toPromise()
      .then(response => response as Trajet)
      .catch(error => console.log('une erreur est survenue ' + error.message))
  }




  public inscription(NewUser) {
    const url = `${this.baseUrl}${this.serviceRegister}`;
    return this.http.post(url, NewUser)
      .toPromise()
      .then(response => response)
      .catch(error => error)
  }


  public connexion(Login) {
    const url = `${this.baseUrl}${this.serviceLogin}`;
    return this.http.post(url, Login)
      .toPromise()
      .then(response => response)
      .catch(error => error)
    //.catch(error => console.log ('une erreur est survenue ' + error))
  }

  //return this.http.post('url', user, {headers: headers});

  public NewTrajet(newTrajet: NewTrajet) {
    const url = `${this.baseUrl}${this.newtrajetpath}`;
    console.log("le token bey :", this.usersInfosService.getUserToken())
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", 'Bearer ' + this.usersInfosService.getUserToken());
    return this.http.post(url, newTrajet, { headers: headers })
      //return this.http.post(url, NewTrajet, { headers: headers })
      .toPromise()
      .then(response => response)
      .catch(error => error.json() )
    //.catch(error => console.log ('une erreur est survenue ' + error))
  }

  public reserv(newReservation : Reservation) {
    const url = `${this.baseUrl}${this.serviceReser}`;
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", 'Bearer ' + this.usersInfosService.getUserToken());
  

    return this.http.post(url,newReservation, { headers: headers })
      .toPromise()
      .then(response => response)
      .catch(error => error.json())
      
    //.catch(error => console.log ('une erreur est survenue ' + error))
  }

  public modifreserv(trajet, userId) {
    const url = `${this.baseUrl}${this.serviceModifResev}`;
    return this.http.post(url, Login)
      .toPromise()
      .then(response => response)
      .catch(error => error.json())
    //.catch(error => console.log ('une erreur est survenue ' + error))
  }
  public annulreserv(trajet, userId) {
    const url = `${this.baseUrl}${this.serviceAnnulResev}`;
    return this.http.post(url, Login)
      .toPromise()
      .then(response => response)
      .catch(error => error.json())
    //.catch(error => console.log ('une erreur est survenue ' + error))
  }



  // Offres Ventes 
  
  public getOffreVente() {
    const url = `${this.baseUrl}${this.servicelistoffreventes}`;
    // const url = this.baseUrl;
    return this.http.get(url)
      .toPromise()
      .then(response => response as OffreVente)
      .catch(error => console.log('une erreur est survenue ' + error))
  }

  public getOffreVentebycritere(critere){
    const url = `${this.baseUrl}${this.servicelistoffreventesbycritere}`;
    // const url = this.baseUrl;
    return this.http.post(url,critere)
      .toPromise()
      .then(response => response as ModeleVoit)
      .catch(error => console.log('une erreur est survenue ' + error))
  }



  // Marques 
  
  public getAllMarque() {
    const url = `${this.baseUrl}${this.servicelistmarque}`;
    // const url = this.baseUrl;
    return this.http.get(url)
      .toPromise()
      .then(response => response as Marque)
      .catch(error => console.log('une erreur est survenue ' + error))
  }

  public getModelsbyMarque(id) {
   let mymarque = new Marque();
    const url = `${this.baseUrl}${this.servicelistmodelbymarque}`;
    // const url = this.baseUrl;
    mymarque.id = id;
    return this.http.post(url, mymarque)
      .toPromise()
      .then(response => response as ModeleVoit)
      .catch(error => console.log('une erreur est survenue ' + error))
  }

  public createOffreVente(objectoffre){

    const url = `${this.baseUrl}${this.servicecreateOffreVente}`;
    console.log("le token bey :", this.usersInfosService.getUserToken())
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", 'Bearer ' + this.usersInfosService.getUserToken());
    return this.http.post(url, objectoffre, { headers: headers })
      //return this.http.post(url, NewTrajet, { headers: headers })
      .toPromise()
      .then(response => response)
      .catch(error => error.json() )
    //.catch(error => console.log ('une erreur est survenue ' + error))

    
  }


  public getObjetCritere() {
    return this.objetCriter;

  }

  public setObjetCritere(objetCriter) {
    this.objetCriter = objetCriter;
  }

}