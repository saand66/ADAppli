import {Injectable} from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { HttpHeaders, HttpClient ,} from '@angular/common/http';


//RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { Trajet } from '../models/AlloDakar-Trajet';
import { Login } from '../models/AlloDakar-Login';
import { NewUser } from '../models/AlloDakar-NewUser';
import { NewTrajet } from '../models/AlloDakar-NewTrajet';

@Injectable()

export class AlloDakarService{

private baseUrl : string ='/api/';
private serviceRegister : string = 'users/register';
private serviceLogin : string = 'users/login';
private newtrajetpath : string = 'trajets/new';
private serviceList : string = 'trajets';
private apikey: string = '8e230c9295f14208bb271d6aa4594fa0';
private token : string = '';

constructor(private http: HttpClient){
this.token = localStorage.getItem('Token');

}

public getTrajet() {
  const url = `${this.baseUrl}${this.serviceList}`;
// const url = this.baseUrl;

return this.http.get(url)
.toPromise()
.then( response => response as Trajet)
.catch(error => console.log ('une erreur est survenue ' + error))
}

public inscription(NewUser) {
    const url = `${this.baseUrl}${this.serviceRegister}`;
   return this.http.post(url, NewUser)
   
.toPromise()
.then( response => response)
.catch(error => console.log ('une erreur est survenue ' + error))
}


public Connexion(Login) {
  const url = `${this.baseUrl}${this.serviceLogin}`;
    return this.http.post(url, Login)
.toPromise()
.then( response => response)
.catch(error => error.json())
//.catch(error => console.log ('une erreur est survenue ' + error))
}

//return this.http.post('url', user, {headers: headers});


public NewTrajet(newTrajet:NewTrajet) {


  const url = `${this.baseUrl}${this.newtrajetpath}`;
 // const url = this.baseUrl;

//let headers = new Headers();
 // headers.append('Content-Type', 'application/json');
 // headers.append('authorization', 'Bearer ' +this.token);
   //console.log("headers sene abo  :", headers);
  // const options = new RequestOptions({ headers: headers });
  //var header = { "headers": {"Content-Type": "application/json"},"Authorization": {} };
  const headers = new HttpHeaders()
            .set("Content-Type", "application/json")
            .set("A Authorization",'Bearer ' +this.token);

  return this.http.post(url, newTrajet, {headers:headers})
  //return this.http.post(url, NewTrajet, { headers: headers })
.toPromise()
.then( response => response)
.catch(error => error.json())
//.catch(error => console.log ('une erreur est survenue ' + error))
}

}

