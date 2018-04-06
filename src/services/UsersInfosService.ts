import { Injectable } from '@angular/core';

@Injectable()

export class UsersInfosService {

  public userPrenom: string;
  public userNom: string;
  public userIsLogin: boolean;
  public userToken: string;


  constructor() {
    //this.token = this.connexionPage.GetUserToken();

  }

  public getUserToken() {
    return this.userToken;

  }

  public setUserToken(token) {
    this.userToken = token;
  }

  public getUserPrenom() {
    return this.userPrenom;

  }

  public setUserPreNom(prenom) {
    this.userPrenom = prenom;
  }

  public getUserNom() {
    return this.userNom;

  }

  public setUserNom(nom) {
    this.userNom = nom;
  }

  public getUserIsLogin() {
    return this.userIsLogin;

  }

  public setUserIsLogin(islogin) {
    this.userIsLogin = islogin;
  }

}