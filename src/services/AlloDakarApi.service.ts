import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders, HttpClient, } from '@angular/common/http';


//RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { Trajet } from '../models/AlloDakar-Trajet';
import { Login } from '../models/AlloDakar-Login';
import { NewUser } from '../models/AlloDakar-NewUser';
import { NewTrajet } from '../models/AlloDakar-NewTrajet';
import { ConnexionPage } from '../pages/connexion/connexion'
import { UsersInfosService } from './UsersInfosService';
import { Reservation } from '../models/Reservation';
@Injectable()

export class AlloDakarService {

  private baseUrl: string = 'http://damaydem.com:49160/api/';
  //private baseUrl : string ='/api/';
  private serviceRegister: string = 'users/register';
  private serviceLogin: string = 'users/login';
  private newtrajetpath: string = 'trajets/new';
  private serviceList: string = 'trajets';
  private serviceReser: string = 'reservation/new';
  private serviceModifResev: string = 'reservation/modif';
  private serviceAnnulResev: string = 'reservation/annul';



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
      .catch(error => console.log('une erreur est survenue ' + error))
  }




  public inscription(NewUser) {
    const url = `${this.baseUrl}${this.serviceRegister}`;
    return this.http.post(url, NewUser)
      .toPromise()
      .then(response => response)
      .catch(error => console.log('une erreur est survenue ' + error))
  }


  public Connexion(Login) {
    const url = `${this.baseUrl}${this.serviceLogin}`;
    return this.http.post(url, Login)
      .toPromise()
      .then(response => response)
      .catch(error => error.json())
    //.catch(error => console.log ('une erreur est survenue ' + error))
  }

  //return this.http.post('url', user, {headers: headers});

  public NewTrajet(newTrajet: NewTrajet) {
    const url = `${this.baseUrl}${this.newtrajetpath}`;
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", 'Bearer ' + this.usersInfosService.getUserToken());
    console.log("le token bey :", this.usersInfosService.getUserToken())

    return this.http.post(url, newTrajet, { headers: headers })
      //return this.http.post(url, NewTrajet, { headers: headers })
      .toPromise()
      .then(response => response)
      .catch(error => error.json())
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

}