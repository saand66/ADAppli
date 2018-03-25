import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';


//RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { Trajet } from '../models/AlloDakar-Trajet';
import { Login } from '../models/AlloDakar-Login';

@Injectable()

export class AlloDakarService{

private baseUrl : string ='/api/';
private serviceRegister : string = 'users/register';
private serviceLogin : string = 'users/login';
private serviceList : string = 'trajets';
private apikey: string = '8e230c9295f14208bb271d6aa4594fa0';
private token : string = '';

constructor(private http: Http){


}

public getTrajet() {
  const url = `${this.baseUrl}${this.serviceList}`;
// const url = this.baseUrl;

return this.http.get(url)
.toPromise()
.then( response => response.json() as Trajet)
.catch(error => console.log ('une erreur est survenue ' + error))
}

public RegisterNewUsers() {
    const url = `${this.baseUrl}${this.serviceRegister}`;
//const url = this.baseUrl;

let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer '+this.token);
      return this.http.post(url, Login)

.toPromise()
.then( response => response.json() )
.catch(error => console.log ('une erreur est survenue ' + error))
}


public Connexion(Login) {
  const url = `${this.baseUrl}${this.serviceLogin}`;
//const url = this.baseUrl;
//let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //    headers.append('Authorization', 'Bearer '+this.token);

    return this.http.post(url, Login)
.toPromise()
.then( response => response.json() )
.catch(error => console.log ('une erreur est survenue ' + error))
}

//return this.http.post('url', user, {headers: headers});


}

