webpackJsonp([16],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceuilVentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__seet_offe_vente_seet_offe_vente__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AcceuilVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcceuilVentePage = /** @class */ (function () {
    function AcceuilVentePage(navCtrl, navParams, alloDakarService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alloDakarService = alloDakarService;
        this.pathoffrevente = "http://damaydem.com/images/damaydem/offreventes/";
    }
    AcceuilVentePage.prototype.ngOnInit = function () {
        this.getOffreVente(null);
    };
    AcceuilVentePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcceuilVentePage');
    };
    // Chargement des offreventes
    AcceuilVentePage.prototype.getOffreVente = function (refresher) {
        var _this = this;
        this.alloDakarService.getOffreVente()
            .then(function (newsFetched) {
            _this.offreVentes = newsFetched;
            // Si la variable refresher est null alors on ne fait rien
            (refresher) ? refresher.complete() : null;
            console.log(_this.offreVentes);
            console.log('Données récupérées depuis le serveur !');
        });
    };
    AcceuilVentePage.prototype.goToSeetOffreVentes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__seet_offe_vente_seet_offe_vente__["a" /* SeetOffeVentePage */]);
    };
    AcceuilVentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acceuil-vente',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/acceuil-vente/acceuil-vente.html"*/'<!--\n  Generated template for the AcceuilLocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>acceuil-Ventes</ion-title>\n    <button  menuToggle="right">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="trips cars common-bg">    \n    <ion-card-header class = "card-title">\n        Offres Recentes\n      </ion-card-header>\n      <ion-fab class = "ion-fab">\n        <button ion-fab tappable (click)="goToSeetOffreVentes()"> <ion-icon name="md-search"></ion-icon></button>\n        \n      </ion-fab>\n  <ion-grid>\n    <ion-row>\n      <!--list of trips-->\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 padding *ngFor="let offre of offreVentes" tappable (click)="GoToOffreVenteDetails(offre)">\n        <div class="trip car card">\n          <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + pathoffrevente + offre.img1 +\')\'}">\n            <div class="background-filter rlt">\n              <div class="align-bottom" padding-left padding-right>\n                <h6 class="pull-left text-white" ion-text> {{offre.marque + " - " + offre.model}}</h6>\n                <h6 class="pull-right text-white" ion-text>{{offre.prix}} CFA</h6>\n                <div class="clear"></div>\n              </div>\n            </div>\n          </div>\n          <div class="padding-sm secondary-bg">\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text  class="text-green bold">{{offre.createdAt | slice:8:10}}/{{offre.createdAt| slice:5:7}}/{{offre.createdAt| slice:0:4}}</span>\n            <span class="pull-right" ion-text color="light"><strong>Posté par : </strong> {{offre.User.prenom}} {{offre.User.nom}} </span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/acceuil-vente/acceuil-vente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */]])
    ], AcceuilVentePage);
    return AcceuilVentePage;
}());

//# sourceMappingURL=acceuil-vente.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeetOffeVentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rechercheutil_rechercheutil__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recherchemoto_recherchemoto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rechercheauto_rechercheauto__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recherchecamion_recherchecamion__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SeetOffeVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeetOffeVentePage = /** @class */ (function () {
    function SeetOffeVentePage(navCtrl, navParams, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.superTabsCtrl = superTabsCtrl;
        //rechercheauto: any = 'RechercheautoPage';
        this.rechercheauto = __WEBPACK_IMPORTED_MODULE_4__rechercheauto_rechercheauto__["a" /* RechercheautoPage */];
        this.recherchemoto = __WEBPACK_IMPORTED_MODULE_3__recherchemoto_recherchemoto__["a" /* RecherchemotoPage */];
        this.recherchecamion = __WEBPACK_IMPORTED_MODULE_5__recherchecamion_recherchecamion__["a" /* RecherchecamionPage */];
        this.rechercheutil = __WEBPACK_IMPORTED_MODULE_2__rechercheutil_rechercheutil__["a" /* RechercheutilPage */];
    }
    /*slideToIndex(index: number) {
      console.log("index" + index)
      this.superTabsCtrl.slideTo(index);
    }*/
    SeetOffeVentePage.prototype.ngAfterViewInit = function () {
        // must wait for AfterViewInit if you want to modify the tabs instantly
        // this.superTabsCtrl.setBadge('homeTab', 5);
    };
    SeetOffeVentePage.prototype.hideToolbar = function () {
        this.superTabsCtrl.showToolbar(false);
    };
    /*showToolbar() {
      this.superTabsCtrl.showToolbar(true);
    }*/
    SeetOffeVentePage.prototype.onTabSelect = function (tab) {
        console.log("Selected tab: ", tab);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabs */])
    ], SeetOffeVentePage.prototype, "superTabs", void 0);
    SeetOffeVentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seet-offe-vente',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/seet-offe-vente/seet-offe-vente.html"*/'\n<ion-header class="animated fadeIn no-shadow">\n\n  <ion-navbar class="no-border thirds-op" color="primary">\n    <ion-title>\n      <strong>DamayDem</strong><sup><ion-badge color="light" class="text-sm text-primary">.com</ion-badge></sup>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content no-bounce>\n   <super-tabs id="mainTabs" [config]="{ sideMenu: \'left\' }" scrollTabs toolbarColor="light" toolbarBackground="dark" indicatorColor="yellow" badgeColor="yellow" (tabSelect)="onTabSelect($event)">\n    <super-tab [swipeBackEnabled]="false" [root]="rechercheauto" title="Auto" icon="ios-car" id="rechecheauto"></super-tab>\n     <super-tab [root]="recherchemoto" badge="5" title="moto" icon="bicycle" id="recherchemoto"></super-tab>\n    <super-tab [root]="rechercheutil" title="utilitaire" icon="bus" id="rechercheutil"></super-tab>\n    <super-tab [root]="recherchecamion" title= "Camion" icon="bus" id="recherchecamion"></super-tab>\n  </super-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/seet-offe-vente/seet-offe-vente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["b" /* SuperTabsController */]])
    ], SeetOffeVentePage);
    return SeetOffeVentePage;
}());

//# sourceMappingURL=seet-offe-vente.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechercheutilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RechercheutilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RechercheutilPage = /** @class */ (function () {
    function RechercheutilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RechercheutilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RechercheutilPage');
    };
    RechercheutilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rechercheutil',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/rechercheutil/rechercheutil.html"*/'<!--\n  Generated template for the SeetOffeVentePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <!--list menu on the top-->\n  \n  <div class="booking-card marginB-16px">\n     <ion-grid class="card" fixed>\n       <ion-row>\n         <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n           <div class="guests bb">\n             <ion-item>\n               <ion-label>Marque</ion-label>\n               <ion-select [(ngModel)]="rooms" cancelText="Annuler" okText="OK">\n                 <ion-option value="1" selected="true">Renault</ion-option>\n                 <ion-option value="2">Mercedes</ion-option>\n               </ion-select>\n             </ion-item>\n           </div>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n           <div class="guests bb">\n             <ion-item>\n               <ion-label>Modele</ion-label>\n               <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                 <ion-option value="0" selected="true">407</ion-option>\n                 <ion-option value="1">308</ion-option>\n                 <ion-option value="2">2</ion-option>\n               </ion-select>\n             </ion-item>\n           </div>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n           <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n             <div class="guests bb">\n               <ion-item>\n                 <ion-label>Prix</ion-label>\n                 <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                   <ion-option value="0" selected="false">11500000</ion-option>\n                   <ion-option value="1">4000000</ion-option>\n                 </ion-select>\n               </ion-item>\n             </div>\n           </ion-col>\n         </ion-row>\n \n         <ion-row>\n             <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n               <div class="guests bb">\n                 <ion-item>\n                   <ion-label>Année</ion-label>\n                   <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                     <ion-option value="0" selected="false">11500000</ion-option>\n                     <ion-option value="1">4000000</ion-option>\n                   </ion-select>\n                 </ion-item>\n               </div>\n             </ion-col>\n           </ion-row>\n \n           <ion-row>\n               <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                 <div class="guests bb">\n                   <ion-item>\n                     <ion-label>Kilomètre</ion-label>\n                     <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                       <ion-option value="0" selected="false">11500000</ion-option>\n                       <ion-option value="1">4000000</ion-option>\n                     </ion-select>\n                   </ion-item>\n                 </div>\n               </ion-col>\n             </ion-row>\n \n             <ion-row>\n                 <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                   <div class="guests bb">\n                     <ion-item>\n                       <ion-label>Carburant</ion-label>\n                       <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                         <ion-option value="0" selected="true">Diesel</ion-option>\n                         <ion-option value="1">Essence</ion-option>\n                       </ion-select>\n                     </ion-item>\n                   </div>\n                 </ion-col>\n               </ion-row>\n \n               <ion-row>\n                   <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                     <div class="guests bb">\n                       <ion-item>\n                         <ion-label>Boite de Vitesse</ion-label>\n                         <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                           <ion-option value="0" selected="true">Diesel</ion-option>\n                           <ion-option value="1">Essence</ion-option>\n                         </ion-select>\n                       </ion-item>\n                     </div>\n                   </ion-col>\n                 </ion-row>\n       <ion-row>\n         <ion-col>\n           <button ion-button block color="primary" class="round thirds-op" tappable (click)="viewHotels()">\n             <ion-icon name="search"></ion-icon> &nbsp;&nbsp;\n             Rechercher \n           </button>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n   </div>\n \n </ion-content>\n '/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/rechercheutil/rechercheutil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], RechercheutilPage);
    return RechercheutilPage;
}());

//# sourceMappingURL=rechercheutil.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecherchemotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecherchemotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecherchemotoPage = /** @class */ (function () {
    function RecherchemotoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecherchemotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecherchemotoPage');
    };
    RecherchemotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recherchemoto',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/recherchemoto/recherchemoto.html"*/'<!--\n  Generated template for the SeetOffeVentePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <!--list menu on the top-->\n  \n  <div class="booking-card marginB-16px">\n     <ion-grid class="card" fixed>\n       <ion-row>\n         <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n           <div class="guests bb">\n             <ion-item>\n               <ion-label>Marque</ion-label>\n               <ion-select [(ngModel)]="rooms" cancelText="Annuler" okText="OK">\n                 <ion-option value="1" selected="true">Renault</ion-option>\n                 <ion-option value="2">Mercedes</ion-option>\n               </ion-select>\n             </ion-item>\n           </div>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n           <div class="guests bb">\n             <ion-item>\n               <ion-label>Modele</ion-label>\n               <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                 <ion-option value="0" selected="true">407</ion-option>\n                 <ion-option value="1">308</ion-option>\n                 <ion-option value="2">2</ion-option>\n               </ion-select>\n             </ion-item>\n           </div>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n           <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n             <div class="guests bb">\n               <ion-item>\n                 <ion-label>Prix</ion-label>\n                 <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                   <ion-option value="0" selected="false">11500000</ion-option>\n                   <ion-option value="1">4000000</ion-option>\n                 </ion-select>\n               </ion-item>\n             </div>\n           </ion-col>\n         </ion-row>\n \n         <ion-row>\n             <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n               <div class="guests bb">\n                 <ion-item>\n                   <ion-label>Année</ion-label>\n                   <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                     <ion-option value="0" selected="false">11500000</ion-option>\n                     <ion-option value="1">4000000</ion-option>\n                   </ion-select>\n                 </ion-item>\n               </div>\n             </ion-col>\n           </ion-row>\n \n           <ion-row>\n               <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                 <div class="guests bb">\n                   <ion-item>\n                     <ion-label>Kilomètre</ion-label>\n                     <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                       <ion-option value="0" selected="false">11500000</ion-option>\n                       <ion-option value="1">4000000</ion-option>\n                     </ion-select>\n                   </ion-item>\n                 </div>\n               </ion-col>\n             </ion-row>\n \n             <ion-row>\n                 <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                   <div class="guests bb">\n                     <ion-item>\n                       <ion-label>Carburant</ion-label>\n                       <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                         <ion-option value="0" selected="true">Diesel</ion-option>\n                         <ion-option value="1">Essence</ion-option>\n                       </ion-select>\n                     </ion-item>\n                   </div>\n                 </ion-col>\n               </ion-row>\n \n               <ion-row>\n                   <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                     <div class="guests bb">\n                       <ion-item>\n                         <ion-label>Boite de Vitesse</ion-label>\n                         <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                           <ion-option value="0" selected="true">Diesel</ion-option>\n                           <ion-option value="1">Essence</ion-option>\n                         </ion-select>\n                       </ion-item>\n                     </div>\n                   </ion-col>\n                 </ion-row>\n       <ion-row>\n         <ion-col>\n           <button ion-button block color="primary" class="round thirds-op" tappable (click)="viewHotels()">\n             <ion-icon name="search"></ion-icon> &nbsp;&nbsp;\n             Rechercher \n           </button>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n   </div>\n \n </ion-content>\n '/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/recherchemoto/recherchemoto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], RecherchemotoPage);
    return RecherchemotoPage;
}());

//# sourceMappingURL=recherchemoto.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechercheautoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RechercheautoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RechercheautoPage = /** @class */ (function () {
    function RechercheautoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RechercheautoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RechercheautoPage');
    };
    RechercheautoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rechercheauto',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/rechercheauto/rechercheauto.html"*/'<!--\n  Generated template for the SeetOffeVentePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n <!--list menu on the top-->\n \n <div class="booking-card marginB-16px">\n    <ion-grid class="card" fixed>\n      <ion-row>\n        <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n          <div class="guests bb">\n            <ion-item>\n              <ion-label>Marque</ion-label>\n              <ion-select [(ngModel)]="rooms" cancelText="Annuler" okText="OK">\n                <ion-option value="1" selected="true">Renault</ion-option>\n                <ion-option value="2">Mercedes</ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n          <div class="guests bb">\n            <ion-item>\n              <ion-label>Modele</ion-label>\n              <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                <ion-option value="0" selected="true">407</ion-option>\n                <ion-option value="1">308</ion-option>\n                <ion-option value="2">2</ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Prix</ion-label>\n                <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                  <ion-option value="0" selected="false">11500000</ion-option>\n                  <ion-option value="1">4000000</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n              <div class="guests bb">\n                <ion-item>\n                  <ion-label>Année</ion-label>\n                  <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                    <ion-option value="0" selected="false">11500000</ion-option>\n                    <ion-option value="1">4000000</ion-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n              <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                <div class="guests bb">\n                  <ion-item>\n                    <ion-label>Kilomètre</ion-label>\n                    <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                      <ion-option value="0" selected="false">11500000</ion-option>\n                      <ion-option value="1">4000000</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                  <div class="guests bb">\n                    <ion-item>\n                      <ion-label>Carburant</ion-label>\n                      <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                        <ion-option value="0" selected="true">Diesel</ion-option>\n                        <ion-option value="1">Essence</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </div>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                  <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                    <div class="guests bb">\n                      <ion-item>\n                        <ion-label>Boite de Vitesse</ion-label>\n                        <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                          <ion-option value="0" selected="true">Diesel</ion-option>\n                          <ion-option value="1">Essence</ion-option>\n                        </ion-select>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button block color="primary" class="round thirds-op" tappable (click)="viewHotels()">\n            <ion-icon name="search"></ion-icon> &nbsp;&nbsp;\n            Rechercher \n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/rechercheauto/rechercheauto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], RechercheautoPage);
    return RechercheautoPage;
}());

//# sourceMappingURL=rechercheauto.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecherchecamionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecherchecamionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecherchecamionPage = /** @class */ (function () {
    function RecherchecamionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecherchecamionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecherchecamionPage');
    };
    RecherchecamionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recherchecamion',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/recherchecamion/recherchecamion.html"*/'<!--\n  Generated template for the SeetOffeVentePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <!--list menu on the top-->\n  \n  <div class="booking-card marginB-16px">\n     <ion-grid class="card" fixed>\n       <ion-row>\n         <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n           <div class="guests bb">\n             <ion-item>\n               <ion-label>Marque</ion-label>\n               <ion-select [(ngModel)]="rooms" cancelText="Annuler" okText="OK">\n                 <ion-option value="1" selected="true">Renault</ion-option>\n                 <ion-option value="2">Mercedes</ion-option>\n               </ion-select>\n             </ion-item>\n           </div>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n           <div class="guests bb">\n             <ion-item>\n               <ion-label>Modele</ion-label>\n               <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                 <ion-option value="0" selected="true">407</ion-option>\n                 <ion-option value="1">308</ion-option>\n                 <ion-option value="2">2</ion-option>\n               </ion-select>\n             </ion-item>\n           </div>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n           <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n             <div class="guests bb">\n               <ion-item>\n                 <ion-label>Prix</ion-label>\n                 <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                   <ion-option value="0" selected="false">11500000</ion-option>\n                   <ion-option value="1">4000000</ion-option>\n                 </ion-select>\n               </ion-item>\n             </div>\n           </ion-col>\n         </ion-row>\n \n         <ion-row>\n             <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n               <div class="guests bb">\n                 <ion-item>\n                   <ion-label>Année</ion-label>\n                   <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                     <ion-option value="0" selected="false">11500000</ion-option>\n                     <ion-option value="1">4000000</ion-option>\n                   </ion-select>\n                 </ion-item>\n               </div>\n             </ion-col>\n           </ion-row>\n \n           <ion-row>\n               <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                 <div class="guests bb">\n                   <ion-item>\n                     <ion-label>Kilomètre</ion-label>\n                     <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                       <ion-option value="0" selected="false">11500000</ion-option>\n                       <ion-option value="1">4000000</ion-option>\n                     </ion-select>\n                   </ion-item>\n                 </div>\n               </ion-col>\n             </ion-row>\n \n             <ion-row>\n                 <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                   <div class="guests bb">\n                     <ion-item>\n                       <ion-label>Carburant</ion-label>\n                       <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                         <ion-option value="0" selected="true">Diesel</ion-option>\n                         <ion-option value="1">Essence</ion-option>\n                       </ion-select>\n                     </ion-item>\n                   </div>\n                 </ion-col>\n               </ion-row>\n \n               <ion-row>\n                   <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                     <div class="guests bb">\n                       <ion-item>\n                         <ion-label>Boite de Vitesse</ion-label>\n                         <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                           <ion-option value="0" selected="true">Diesel</ion-option>\n                           <ion-option value="1">Essence</ion-option>\n                         </ion-select>\n                       </ion-item>\n                     </div>\n                   </ion-col>\n                 </ion-row>\n       <ion-row>\n         <ion-col>\n           <button ion-button block color="primary" class="round thirds-op" tappable (click)="viewHotels()">\n             <ion-icon name="search"></ion-icon> &nbsp;&nbsp;\n             Rechercher \n           </button>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n   </div>\n \n </ion-content>\n '/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/recherchecamion/recherchecamion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], RecherchecamionPage);
    return RecherchecamionPage;
}());

//# sourceMappingURL=recherchecamion.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrajetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_trajet_details_trajet_details__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TrajetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrajetPage = /** @class */ (function () {
    function TrajetPage(navCtrl, alloDakarService, navParams) {
        this.navCtrl = navCtrl;
        this.alloDakarService = alloDakarService;
        this.navParams = navParams;
        this.pathcovoit = "http://damaydem.com/images/damaydem/covoit/dest/";
        this.getTrajet(null);
    }
    // Chargement des trajets
    TrajetPage.prototype.getTrajet = function (refresher) {
        var _this = this;
        this.alloDakarService.getTrajet()
            .then(function (newsFetched) {
            _this.trajets = newsFetched;
            // Si la variable refresher est null alors on ne fait rien
            (refresher) ? refresher.complete() : null;
            console.log(_this.trajets);
            console.log('Données récupérées depuis le serveur !');
        });
    };
    TrajetPage.prototype.GoToDetails = function (trajet) {
        //this.navParams.data = trajet ;
        // this.navCtrl.push(trajet, {status: true})
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_trajet_details_trajet_details__["a" /* TrajetDetailsPage */], { letrajet: trajet });
        // let modal = this.modalCtrl.create(TrajetDetailsPage);
        //  modal.present();
    };
    TrajetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trajet',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/trajet/trajet.html"*/'<!--\n  Generated template for the TrajetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trajet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="trips cars common-bg">\n    \n       \n     <ion-card-header class = "card-title">\n        Trajets diponible\n      </ion-card-header>\n\n   \n      <ion-grid>\n        <ion-row>\n          <!--list of trips-->\n          <ion-col col-12 col-md-6 col-lg-6 col-xl-4 padding *ngFor="let trajet of trajets" tappable (click)="GoToDetails(trajet)">\n            <div class="trip car card">\n              <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + pathcovoit + trajet.VilleArr.img1 +\')\'}">\n                <div class="background-filter rlt">\n                  <div class="align-bottom" padding-left padding-right>\n                    <h6 class="pull-left text-white" ion-text> {{trajet.VilleDep.nom + " - " + trajet.VilleArr.nom}}</h6>\n                    <h6 class="pull-right text-white" ion-text>{{trajet.tarifvoy}} CFA</h6>\n                    <div class="clear"></div>\n                  </div>\n                </div>\n              </div>\n              <div class="padding-sm secondary-bg">\n                <ion-icon name="time" class="text-white"></ion-icon>\n                <span ion-text  class="text-green bold">{{trajet.dateDep | slice:8:10}}/{{trajet.dateDep| slice:5:7}}/{{trajet.dateDep| slice:0:4}}</span>\n                <span class="pull-right" ion-text color="light"><strong>Posté par : </strong> {{trajet.User.prenom}} {{trajet.User.nom}} </span>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/trajet/trajet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], TrajetPage);
    return TrajetPage;
}());

//# sourceMappingURL=trajet.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrajetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_AlloDakar_Trajet__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlloDakarApi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Reservation__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TrajetDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrajetDetailsPage = /** @class */ (function () {
    function TrajetDetailsPage(navCtrl, navParams, alloDakarService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alloDakarService = alloDakarService;
        this.alertCtrl = alertCtrl;
        this.trajetstodetails = new __WEBPACK_IMPORTED_MODULE_2__models_AlloDakar_Trajet__["a" /* Trajet */]();
        this.newReservation = new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["a" /* Reservation */]();
        this.nbplace = 1;
        this.pathcovoit = "http://damaydem.com/images/damaydem/covoit/dest/";
        console.log('le trajet : ' + this.navParams.get('letrajet'));
        this.trajetstodetails = this.navParams.get('letrajet');
    }
    TrajetDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrajetDetailsPage');
    };
    // minus adult when click minus button
    TrajetDetailsPage.prototype.minusAdult = function () {
        this.nbplace--;
    };
    // plus adult when click plus button
    TrajetDetailsPage.prototype.plusAdult = function () {
        this.nbplace++;
        console.log("Nbpalce", this.nbplace);
    };
    // minus children when click minus button
    TrajetDetailsPage.prototype.minusChildren = function () {
        this.nbplace--;
    };
    // plus children when click plus button
    TrajetDetailsPage.prototype.plusChildren = function () {
        this.nbplace++;
    };
    TrajetDetailsPage.prototype.goToReservation = function (trajet) {
        var _this = this;
        console.log(" trajet det", trajet);
        var alert = this.alertCtrl.create({
            title: 'Reservation',
            message: 'Montant à Payer :' + trajet.tarifvoy * this.nbplace,
            inputs: [
                {
                    name: 'Votre Téléphone',
                    placeholder: 'Votre numero Orange Money',
                    type: 'number',
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Continuer',
                    handler: function (data) {
                        _this.newReservation.montantEncaisse = Number(trajet.tarifvoy * _this.nbplace);
                        _this.newReservation.trajetId = trajet.id;
                        _this.newReservation.nbplaceareserv = _this.nbplace;
                        _this.alloDakarService.reserv(_this.newReservation);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    TrajetDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trajet-details',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/trajet-details/trajet-details.html"*/'<!--\n  Generated template for the TrajetDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary" class="thirds-op">\n    <ion-title><h3>{{trajetstodetails.VilleDep.nom + " - " + trajetstodetails.VilleArr.nom}}</h3> </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" common-bg">\n  <!--slides-->\n  <!--<ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n   <img src="{{ thumb }}" alt="">\n    </ion-slide>\n  </ion-slides> -->\n  <ion-slides class="to-top" pager>\n    <ion-slide>\n   <img src="{{ pathcovoit  + trajetstodetails.VilleArr.img1 }}" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom detail-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" color="primary" class="thirds-op"></ion-icon>\n            <span ion-text color="secondary">{{trajetstodetails.dateDep}}</span>\n            <ion-icon name="checkbox-outline" margin-left color="primary" class="thirds-op"></ion-icon>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12>\n        <!--high light-->\n        <div class="border-bottom" padding>\n          <span ion-text color="dark" class="bold">Détails Du Trajet</span>\n          <ul class="highlight">\n            <li>\n              <ion-icon name="checkmark" class="text-green"></ion-icon>\n              <span ion-text color="primary"> Arrivée : {{trajetstodetails.lieuArr}}</span>\n            </li>\n            <li>\n            <ion-icon name="checkmark" class="text-green"></ion-icon>\n              <span ion-text color="primary">Date de départ : {{trajetstodetails.dateDep}}</span>\n            </li>\n            <li>\n              <ion-icon name="checkmark" class="text-green"></ion-icon>\n              <span ion-text color="primary">Heure : {{trajetstodetails.heureDep}}</span>\n            </li>\n             <li>\n              <ion-icon name="checkmark" class="text-green"></ion-icon>\n              <span ion-text color="primary">Tarif :{{trajetstodetails.tarifvoy}}</span>\n             </li>\n              <li>\n                <ion-icon name="checkmark" class="text-green"></ion-icon>\n                <span ion-text color="primary">Posté par : {{trajetstodetails.User.prenom}}</span>\n              </li>\n              \n          </ul>\n        </div>\n\n        <!--booking form-->\n        <div class="booking-form card round" margin>\n          <div class="border-bottom" padding>\n            <h5>{{trajetstodetails.VilleDep.nom + " - " + trajetstodetails.VilleArr.nom}}</h5>\n            <!--choose guest-->\n            <ion-grid class="filters" no-padding margin-top>\n              <ion-row>\n                <ion-col class="adult" width-70>\n                  <span ion-text color="primary"><strong>{{trajetstodetails.tarifvoy}} CFA</strong> Par place</span>\n                </ion-col>\n\n                <ion-col width-10 text-center>\n                  <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="nbplace < 2"\n                   color="secondary"></ion-icon>\n                </ion-col>\n                <ion-col width-10 text-center>{{ nbplace }}</ion-col>\n                <ion-col width-10 text-center>\n                  <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n                </ion-col>\n              </ion-row>\n              \n            </ion-grid>\n          </div>\n          <div padding class="form-bottom">\n      <!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n            <!--booking button-->\n            <button ion-button class="pull-right" color="secondary" tappable (click)="goToReservation(trajetstodetails)">Reservez &nbsp;&nbsp;&nbsp; <span ion-text  class="text-green bold"> {{ nbplace * trajetstodetails.tarifvoy }}</span>\n            </button>\n            <div class="clear"></div>\n          </div>\n        </div>\n\n        <!--description-->\n        <div class="border-bottom" padding>\n          <span ion-text color="primary" class="bold">DESCRIPTION</span>\n          <p ion-text>Le Sénégal, en forme longue la République du Sénégal, est un pays d\'Afrique de l\'Ouest. Il est bordé par l\'océan Atlantique à l\'ouest, la Mauritanie au nord, à l\'est par le Mali, la Guinée et la Guinée-Bissau au sud. La Gambie forme une quasi-enclave dans le Sénégal, pénétrant à plus de 300 km à l\'intérieur des terres. Les îles du Cap-Vert sont situées à 560 km de la côte sénégalaise. Le pays doit son nom au fleuve qui le borde à l\'est et au nord et qui prend sa source dans le Fouta Djallon en Guinée. Le climat est tropical et sec avec deux saisons : la saison sèche et la saison des pluies.</p>\n        </div>\n\n        <!--address-->\n        <div class="border-bottom" padding>\n          <span ion-text color="primary" class="bold">LOCATION</span>\n          <p ion-text>Buntu Pikine </p>\n          <p ion-text>Camberene </p>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/trajet-details/trajet-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_AlloDakarApi_service__["a" /* AlloDakarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TrajetDetailsPage);
    return TrajetDetailsPage;
}());

//# sourceMappingURL=trajet-details.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlloDakarApi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_AlloDakar_Login__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inscription_inscription__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_UsersInfosService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__acceuil_acceuil__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnexionPage = /** @class */ (function () {
    function ConnexionPage(navCtrl, alloDakarService, usersInfosService, alertCtrl, nativeStorage, _fb, menu, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alloDakarService = alloDakarService;
        this.usersInfosService = usersInfosService;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this._fb = _fb;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.login = new __WEBPACK_IMPORTED_MODULE_5__models_AlloDakar_Login__["a" /* Login */]();
        this.menu.swipeEnable(false);
        this.menu.enable(false);
        // this.Connexion();
    }
    ConnexionPage.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    // connexion 
    ConnexionPage.prototype.Connexion = function () {
        var _this = this;
        console.log(this.login);
        this.alloDakarService.Connexion(this.login)
            .then(function (data) {
            if (data && data.token) {
                localStorage.setItem("UserPrenom", data.UserPrenom);
                localStorage.setItem("UserNom", data.UserNom);
                localStorage.setItem("UserTel", data.UserTel);
                localStorage.setItem("Token", data.token);
                localStorage.setItem("islogin", "true");
                _this.usersInfosService.setUserToken(data.token);
                _this.usersInfosService.setUserPreNom(data.UserPrenom);
                _this.usersInfosService.setUserNom(data.UserNom);
                _this.usersInfosService.setUserIsLogin(true);
                /* this.nativeStorage.setItem("UserPrenom", data.UserPrenom);
                 this.nativeStorage.setItem("UserNom", data.UserNom);
                 this.nativeStorage.setItem("Token", data.token);
                 this.nativeStorage.setItem("islogin",true);*/
                // this.alloDakarService.userNom = data.UserNom;
                //  this.alloDakarService.userToken = data.token;
                //  this.alloDakarService.userIsLogin = "true";
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__acceuil_acceuil__["a" /* AcceuilPage */]);
            }
            else if (data && data.error) {
                _this.messageerreur = data.error.error;
                console.log("mon erreur : " + _this.erreur);
                /* let alert = this.alertCtrl.create({
                 title: 'Probleme',
                 subTitle: this.erreur,
                 buttons: ['OK']
               });
               alert.present();*/
            }
        }).catch(function (e) { console.log("test " + e); });
    };
    ConnexionPage.prototype.Inscription = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__inscription_inscription__["a" /* InscriptionPage */]);
    };
    ConnexionPage.prototype.goToAcceuil = function (params) {
        if (!params)
            params = {};
        //this.navCtrl.setRoot(AcceuilPage);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__acceuil_acceuil__["a" /* AcceuilPage */]);
    };
    ConnexionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-connexion',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/connexion/connexion.html"*/'<!--\n  Generated template for the ConnexionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- -->\n <!-- <ion-header class="animated fadeIn no-shadow">\n    <ion-navbar class="no-border thirds-op" color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      </ion-navbar>\n    </ion-header> -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-white" no-margin>\n        <strong>DamayDem</strong>.Com\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form [formGroup]="onLoginForm" class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n          Numéro Tel\n        </ion-label>\n        <ion-input type="email" formControlName="email" value="" [(ngModel)]="login.numtel"></ion-input>\n      </ion-item>\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">Ce champ est obligatoire</p>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n          Mot de Pass\n        </ion-label>\n        <ion-input  type="password" [(ngModel)]="login.motdepass" formControlName="password"></ion-input>\n      </ion-item>\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">Ce champ est obligatoire</p>\n      <p ion-text color="danger" >{{messageerreur}}</p>\n    </form>\n    \n     \n    <p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Mot de Pass Oublié ?</strong></p>\n\n    <div>\n      <button ion-button icon-start outline block color="light" tappable (click)="Connexion()">\n        <ion-icon name="log-in"></ion-icon>\n        CONNEXION\n      </button>\n      <button ion-button icon-start outline block color="light" tappable (click)="Inscription()">\n          <ion-icon name="log-in"></ion-icon>\n          CREER UN COMPTE\n        </button>\n      <p text-center ion-text tappable (click)="goToAcceuil()" color="light">Ou Continuer en tant qu\'invité </p>\n    \n      <p text-center ion-text color="light">Suivez nous sur </p>\n      <ion-grid class="btn-group">\n        <ion-row>\n          <button ion-button icon-only block class="btn-facebook col col-4">\n            <ion-icon name="logo-facebook"></ion-icon>\n          </button>\n          <button ion-button icon-only block class="btn-twitter col col-4">\n            <ion-icon name="logo-twitter"></ion-icon>\n          </button>\n          <button ion-button icon-only block class="btn-gplus col col-4">\n            <ion-icon name="logo-googleplus"></ion-icon>\n          </button>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/connexion/connexion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlloDakarApi_service__["a" /* AlloDakarService */],
            __WEBPACK_IMPORTED_MODULE_7__services_UsersInfosService__["a" /* UsersInfosService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* ToastController */]])
    ], ConnexionPage);
    return ConnexionPage;
}());

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.profiledata = true;
    }
    // process send button
    EditProfilePage.prototype.sendData = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Your Data was Edited!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/edit-profile/edit-profile.html"*/'<ion-header>\n    <ion-navbar color="primary" class="thirds-op">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text>Modifier Compte</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="profile common-bg">\n\n    <ion-card>\n      <ion-card-content class="profile-bg">\n          <img src="assets/img/laat.jpeg">\n          <h2 class="fw500">João Firmino</h2>\n          <h3 ion-text color="light">Customer</h3>\n          <button ion-button icon-start margin-top color="secondary">\n            <ion-icon name="photos"></ion-icon>\n            Edit / Insert Avatar\n          </button>\n      </ion-card-content>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col col-12 margin-bottom padding>\n\n  	        <ion-item>\n  	          <ion-label color="dark" stacked>Full Name:</ion-label>\n  	          <ion-input type="text" placeholder="Ex..: Joe Doe" value="João Firmino"></ion-input>\n  	        </ion-item>\n\n  	        <ion-item>\n  	          <ion-label color="dark" stacked>Email:</ion-label>\n  	          <ion-input type="email" placeholder="Ex.: joe@doe.com" value="firminoata@gmail.com"></ion-input>\n  	        </ion-item>\n\n  	        <ion-item>\n  	          <ion-label color="dark" stacked>Address:</ion-label>\n  	          <ion-input type="text" placeholder="Ex.: Abey Road 5"></ion-input>\n  	        </ion-item>\n\n  				  <ion-item>\n  				    <ion-label color="dark">City</ion-label>\n  				    <ion-select>\n  				      <ion-option value="nes">New York</ion-option>\n  				      <ion-option value="n64">Los Angeles</ion-option>\n  				      <ion-option value="ps">London</ion-option>\n  				      <ion-option value="genesis">Paris</ion-option>\n  				      <ion-option value="saturn">São Paulo</ion-option>\n  				      <ion-option value="snes">Tokyo</ion-option>\n  				      <ion-option value="snes">New Delhi</ion-option>\n  				    </ion-select>\n  				  </ion-item>\n\n  				  <ion-item>\n  				    <ion-label color="dark">State</ion-label>\n  				    <ion-select>\n  				      <ion-option value="nes">NY</ion-option>\n  				      <ion-option value="n64">CA</ion-option>\n  				      <ion-option value="ps">Greater London</ion-option>\n  				      <ion-option value="genesis">Paris</ion-option>\n  				      <ion-option value="saturn">SP</ion-option>\n  				      <ion-option value="snes">Kantō</ion-option>\n  				      <ion-option value="snes">Delhi</ion-option>\n  				    </ion-select>\n  				  </ion-item>\n\n  					<div radio-group margin-top margin-bottom>\n  					  <ion-list-header no-margin no-padding>\n  					    <span ion-text color="dark" class="fw500">User Type</span>\n  					  </ion-list-header>\n\n  					  <ion-item>\n  					    <ion-label color="dark">Customer</ion-label>\n  					    <ion-radio checked="true" value="customer"></ion-radio>\n  					  </ion-item>\n\n  					  <ion-item>\n  					    <ion-label color="dark">Travel Agent</ion-label>\n  					    <ion-radio value="agent"></ion-radio>\n  					  </ion-item>\n  					</div>\n\n            <ion-item>\n            	<ion-label class="text-1x">Available to chat w/ Travel Agents?</ion-label>\n            	<ion-checkbox></ion-checkbox>\n          	</ion-item>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n			<button ion-button large full color="dark" (click)="sendData()">Edit</button>\n    </ion-card>\n\n    <div padding>\n      <p ion-text color="dark" no-margin>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n      </p>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/edit-profile/edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsermessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UsermessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsermessagePage = /** @class */ (function () {
    function UsermessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsermessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsermessagePage');
    };
    UsermessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usermessage',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/usermessage/usermessage.html"*/'<!--\n  Generated template for the UsermessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/usermessage/usermessage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], UsermessagePage);
    return UsermessagePage;
}());

//# sourceMappingURL=usermessage.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserprofilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserprofilPage = /** @class */ (function () {
    function UserprofilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserprofilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserprofilPage');
    };
    UserprofilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userprofil',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/userprofil/userprofil.html"*/'<!--\n  Generated template for the UserprofilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes informations</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/userprofil/userprofil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], UserprofilPage);
    return UserprofilPage;
}());

//# sourceMappingURL=userprofil.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsertrajetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UsertrajetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsertrajetPage = /** @class */ (function () {
    function UsertrajetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsertrajetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsertrajetPage');
    };
    UsertrajetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usertrajet',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/usertrajet/usertrajet.html"*/'<!--\n  Generated template for the UsertrajetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes voyages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/usertrajet/usertrajet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], UsertrajetPage);
    return UsertrajetPage;
}());

//# sourceMappingURL=usertrajet.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acceuil-location/acceuil-location.module": [
		326,
		15
	],
	"../pages/acceuil-vente/acceuil-vente.module": [
		327,
		14
	],
	"../pages/acceuil/acceuil.module": [
		328,
		13
	],
	"../pages/connexion/connexion.module": [
		329,
		12
	],
	"../pages/edit-profile/edit-profile.module": [
		330,
		11
	],
	"../pages/inscription/inscription.module": [
		333,
		10
	],
	"../pages/rechercheauto/rechercheauto.module": [
		331,
		9
	],
	"../pages/recherchecamion/recherchecamion.module": [
		332,
		8
	],
	"../pages/recherchemoto/recherchemoto.module": [
		334,
		7
	],
	"../pages/rechercheutil/rechercheutil.module": [
		335,
		6
	],
	"../pages/seet-offe-vente/seet-offe-vente.module": [
		336,
		5
	],
	"../pages/trajet-details/trajet-details.module": [
		337,
		4
	],
	"../pages/trajet/trajet.module": [
		338,
		3
	],
	"../pages/usermessage/usermessage.module": [
		339,
		2
	],
	"../pages/userprofil/userprofil.module": [
		340,
		1
	],
	"../pages/usertrajet/usertrajet.module": [
		341,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 178;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=AlloDakar-Login.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceuilLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AcceuilLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcceuilLocationPage = /** @class */ (function () {
    function AcceuilLocationPage(navCtrl, navParams, alloDakarService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alloDakarService = alloDakarService;
        this.pathoffrevente = "http://damaydem.com/images/damaydem/offreventes/";
    }
    AcceuilLocationPage.prototype.ngOnInit = function () {
        this.getOffreVente(null);
    };
    AcceuilLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcceuilLocationPage');
    };
    // Chargement des offreventes
    AcceuilLocationPage.prototype.getOffreVente = function (refresher) {
        var _this = this;
        this.alloDakarService.getOffreVente()
            .then(function (newsFetched) {
            _this.offreVentes = newsFetched;
            // Si la variable refresher est null alors on ne fait rien
            (refresher) ? refresher.complete() : null;
            console.log(_this.offreVentes);
            console.log('Données récupérées depuis le serveur !');
        });
    };
    AcceuilLocationPage.prototype.GoToOffreVenteDetails = function (offre) {
        console.log('offre details');
    };
    AcceuilLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acceuil-location',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/acceuil-location/acceuil-location.html"*/'<!--\n  Generated template for the AcceuilLocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>acceuil-Ventes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="trips cars common-bg">    \n    <ion-card-header class = "card-title">\n        Offres Recentes\n      </ion-card-header>\n      <ion-fab class = "ion-fab">\n        <button ion-fab > <ion-icon name="md-search"></ion-icon></button>\n        \n      </ion-fab>\n  <ion-grid>\n    <ion-row>\n      <!--list of trips-->\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 padding *ngFor="let offre of offreVentes" tappable (click)="GoToOffreVenteDetails(offre)">\n        <div class="trip car card">\n          <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + pathoffrevente + offre.img1 +\')\'}">\n            <div class="background-filter rlt">\n              <div class="align-bottom" padding-left padding-right>\n                <h6 class="pull-left text-white" ion-text> {{offre.marque + " - " + offre.model}}</h6>\n                <h6 class="pull-right text-white" ion-text>{{offre.prix}} CFA</h6>\n                <div class="clear"></div>\n              </div>\n            </div>\n          </div>\n          <div class="padding-sm secondary-bg">\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text  class="text-green bold">{{offre.createdAt | slice:8:10}}/{{offre.createdAt| slice:5:7}}/{{offre.createdAt| slice:0:4}}</span>\n            <span class="pull-right" ion-text color="light"><strong>Posté par : </strong> {{offre.User.prenom}} {{offre.User.nom}} </span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/acceuil-location/acceuil-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */]])
    ], AcceuilLocationPage);
    return AcceuilLocationPage;
}());

//# sourceMappingURL=acceuil-location.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_allo_dakar_allo_dakar__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cart_cart__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cloud_cloud__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_seet_voyage_seet_voyage__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_trajet_trajet__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_connexion_connexion__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inscription_inscription__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_proposer_damay_tukki_proposer_damay_tukki__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_AlloDakarApi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_trajet_details_trajet_details__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_UsersInfosService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_acceuil_acceuil__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_userprofil_userprofil__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_usertrajet_usertrajet__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_usermessage_usermessage__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_edit_profile_edit_profile__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_acceuil_location_acceuil_location__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_acceuil_vente_acceuil_vente__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_seet_offe_vente_seet_offe_vente__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_rechercheutil_rechercheutil__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_rechercheauto_rechercheauto__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_recherchemoto_recherchemoto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_recherchecamion_recherchecamion__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ionic2_super_tabs__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cloud_cloud__["a" /* CloudPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_seet_voyage_seet_voyage__["a" /* SeetVoyagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_proposer_damay_tukki_proposer_damay_tukki__["a" /* ProposerDamayTukkiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_trajet_trajet__["a" /* TrajetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_trajet_details_trajet_details__["a" /* TrajetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_acceuil_acceuil__["a" /* AcceuilPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_userprofil_userprofil__["a" /* UserprofilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_usertrajet_usertrajet__["a" /* UsertrajetPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_usermessage_usermessage__["a" /* UsermessagePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_acceuil_location_acceuil_location__["a" /* AcceuilLocationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_acceuil_vente_acceuil_vente__["a" /* AcceuilVentePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_seet_offe_vente_seet_offe_vente__["a" /* SeetOffeVentePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_rechercheauto_rechercheauto__["a" /* RechercheautoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_recherchemoto_recherchemoto__["a" /* RecherchemotoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_rechercheutil_rechercheutil__["a" /* RechercheutilPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_recherchecamion_recherchecamion__["a" /* RecherchecamionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acceuil-location/acceuil-location.module#AcceuilLocationPageModule', name: 'AcceuilLocationPage', segment: 'acceuil-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acceuil-vente/acceuil-vente.module#AcceuilVentePageModule', name: 'AcceuilVentePage', segment: 'acceuil-vente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acceuil/acceuil.module#AcceuilPageModule', name: 'AcceuilPage', segment: 'acceuil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/connexion/connexion.module#ConnexionPageModule', name: 'ConnexionPage', segment: 'connexion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'page-edit-profile', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rechercheauto/rechercheauto.module#RechercheautoPageModule', name: 'RechercheautoPage', segment: 'rechercheauto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recherchecamion/recherchecamion.module#RecherchecamionPageModule', name: 'RecherchecamionPage', segment: 'recherchecamion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inscription/inscription.module#InscriptionPageModule', name: 'InscriptionPage', segment: 'inscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recherchemoto/recherchemoto.module#RecherchemotoPageModule', name: 'RecherchemotoPage', segment: 'recherchemoto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rechercheutil/rechercheutil.module#RechercheutilPageModule', name: 'RechercheutilPage', segment: 'rechercheutil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seet-offe-vente/seet-offe-vente.module#SeetOffeVentePageModule', name: 'SeetOffeVentePage', segment: 'seet-offe-vente/:type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trajet-details/trajet-details.module#TrajetDetailsPageModule', name: 'TrajetDetailsPage', segment: 'trajet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trajet/trajet.module#TrajetPageModule', name: 'TrajetPage', segment: 'trajet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usermessage/usermessage.module#UsermessagePageModule', name: 'UsermessagePage', segment: 'usermessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofil/userprofil.module#UserprofilPageModule', name: 'UserprofilPage', segment: 'userprofil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usertrajet/usertrajet.module#UsertrajetPageModule', name: 'UsertrajetPage', segment: 'usertrajet', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_33_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cloud_cloud__["a" /* CloudPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_seet_voyage_seet_voyage__["a" /* SeetVoyagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_proposer_damay_tukki_proposer_damay_tukki__["a" /* ProposerDamayTukkiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_trajet_trajet__["a" /* TrajetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_trajet_details_trajet_details__["a" /* TrajetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_acceuil_acceuil__["a" /* AcceuilPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_userprofil_userprofil__["a" /* UserprofilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_usertrajet_usertrajet__["a" /* UsertrajetPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_usermessage_usermessage__["a" /* UsermessagePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_acceuil_location_acceuil_location__["a" /* AcceuilLocationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_acceuil_vente_acceuil_vente__["a" /* AcceuilVentePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_seet_offe_vente_seet_offe_vente__["a" /* SeetOffeVentePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_rechercheauto_rechercheauto__["a" /* RechercheautoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_recherchemoto_recherchemoto__["a" /* RecherchemotoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_rechercheutil_rechercheutil__["a" /* RechercheutilPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_recherchecamion_recherchecamion__["a" /* RecherchecamionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_AlloDakarApi_service__["a" /* AlloDakarService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__services_UsersInfosService__["a" /* UsersInfosService */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlloDakarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_AlloDakar_Login__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UsersInfosService__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//RxJS




var AlloDakarService = /** @class */ (function () {
    function AlloDakarService(http, usersInfosService) {
        this.http = http;
        this.usersInfosService = usersInfosService;
        //Global
        //private baseUrl: string = 'http://damaydem.com:49160/api/';
        this.baseUrl = '/api/';
        //users
        this.serviceRegister = 'users/register';
        this.serviceLogin = 'users/login';
        this.newtrajetpath = 'trajets/new';
        //trajets
        this.serviceList = 'trajets';
        this.serviceReser = 'reservation/new';
        this.serviceModifResev = 'reservation/modif';
        this.serviceAnnulResev = 'reservation/annul';
        //Offreventes
        this.servicelistoffreventes = 'offreVentes';
        //this.token = this.connexionPage.GetUserToken();
        console.log("le token " + this.usersInfosService.getUserToken());
    }
    AlloDakarService.prototype.getTrajet = function () {
        var url = "" + this.baseUrl + this.serviceList;
        // const url = this.baseUrl;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return console.log('une erreur est survenue ' + error); });
    };
    AlloDakarService.prototype.inscription = function (NewUser) {
        var url = "" + this.baseUrl + this.serviceRegister;
        return this.http.post(url, NewUser)
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return error; });
    };
    AlloDakarService.prototype.Connexion = function (Login) {
        var url = "" + this.baseUrl + this.serviceLogin;
        return this.http.post(url, Login)
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return error; });
        //.catch(error => console.log ('une erreur est survenue ' + error))
    };
    //return this.http.post('url', user, {headers: headers});
    AlloDakarService.prototype.NewTrajet = function (newTrajet) {
        var url = "" + this.baseUrl + this.newtrajetpath;
        console.log("le token bey :", this.usersInfosService.getUserToken());
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json")
            .set("Authorization", 'Bearer ' + this.usersInfosService.getUserToken());
        return this.http.post(url, newTrajet, { headers: headers })
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return error.json(); });
        //.catch(error => console.log ('une erreur est survenue ' + error))
    };
    AlloDakarService.prototype.reserv = function (newReservation) {
        var url = "" + this.baseUrl + this.serviceReser;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json")
            .set("Authorization", 'Bearer ' + this.usersInfosService.getUserToken());
        return this.http.post(url, newReservation, { headers: headers })
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return error.json(); });
        //.catch(error => console.log ('une erreur est survenue ' + error))
    };
    AlloDakarService.prototype.modifreserv = function (trajet, userId) {
        var url = "" + this.baseUrl + this.serviceModifResev;
        return this.http.post(url, __WEBPACK_IMPORTED_MODULE_4__models_AlloDakar_Login__["a" /* Login */])
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return error.json(); });
        //.catch(error => console.log ('une erreur est survenue ' + error))
    };
    AlloDakarService.prototype.annulreserv = function (trajet, userId) {
        var url = "" + this.baseUrl + this.serviceAnnulResev;
        return this.http.post(url, __WEBPACK_IMPORTED_MODULE_4__models_AlloDakar_Login__["a" /* Login */])
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return error.json(); });
        //.catch(error => console.log ('une erreur est survenue ' + error))
    };
    // Offres Ventes 
    AlloDakarService.prototype.getOffreVente = function () {
        var url = "" + this.baseUrl + this.servicelistoffreventes;
        // const url = this.baseUrl;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return console.log('une erreur est survenue ' + error); });
    };
    AlloDakarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__UsersInfosService__["a" /* UsersInfosService */]])
    ], AlloDakarService);
    return AlloDakarService;
}());

//# sourceMappingURL=AlloDakarApi.service.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTrajet; });
var NewTrajet = /** @class */ (function () {
    function NewTrajet() {
    }
    return NewTrajet;
}());

//# sourceMappingURL=AlloDakar-NewTrajet.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trajet; });
///import { NewsApiSource } from './newsapi-source.model';
var Trajet = /** @class */ (function () {
    function Trajet() {
    }
    return Trajet;
}());

//# sourceMappingURL=AlloDakar-Trajet.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reservation; });
var Reservation = /** @class */ (function () {
    function Reservation() {
    }
    return Reservation;
}());

//# sourceMappingURL=Reservation.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUser; });
var NewUser = /** @class */ (function () {
    function NewUser() {
    }
    return NewUser;
}());

//# sourceMappingURL=AlloDakar-NewUser.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_allo_dakar_allo_dakar__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inscription_inscription__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_proposer_damay_tukki_proposer_damay_tukki__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_UsersInfosService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_acceuil_acceuil__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_seet_voyage_seet_voyage__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_usertrajet_usertrajet__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_userprofil_userprofil__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_usermessage_usermessage__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_profile_edit_profile__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = /** @class */ (function () {
    function MyApp(usersInfosService, nativeStorage, platform, statusBar, splashScreen, keyboard) {
        this.nativeStorage = nativeStorage;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__["a" /* ConnexionPage */];
        // rootPage:any = AcceuilPage;
        this.showMenu = true;
        this.numberofresh = 1;
        this.initializeApp();
        //platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        // statusBar.styleDefault();
        //splashScreen.hide();
        //});
        usersInfosService.setNumberofrefresh(this.numberofresh);
        this.numberofresh = usersInfosService.getNumberofrefresh();
        console.log(" numberofresh : ", this.numberofresh);
        this.goUserInfos();
        //this.task  = setInterval(this.goUserInfos.bind(this), 1000)
        /*if (!this.usernom){
          clearInterval(this.task);
          console.log(this.task)
        }*/
    }
    MyApp.prototype.ngOnInit = function () {
        console.log("oninit APP");
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.goToAcceuil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_acceuil_acceuil__["a" /* AcceuilPage */]);
    };
    MyApp.prototype.goToConnexion = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__["a" /* ConnexionPage */]);
    };
    MyApp.prototype.goToAlloDakar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */]);
    };
    MyApp.prototype.goToDeconnexion = function () {
        //this.usersInfosService.setUserIsLogin(false);
        this.islogin = "false";
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */]);
    };
    MyApp.prototype.goToInscription = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_inscription_inscription__["a" /* InscriptionPage */]);
    };
    MyApp.prototype.goToDamayTukki = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_proposer_damay_tukki_proposer_damay_tukki__["a" /* ProposerDamayTukkiPage */]);
    };
    MyApp.prototype.goUserInfos = function () {
        // Put here the code you want to execute
        console.log("mangui fi ");
        this.userprenom = localStorage.getItem("UserPrenom");
        this.usernom = localStorage.getItem("UserNom");
        this.islogin = localStorage.getItem("islogin");
        this.usertel = localStorage.getItem("UserTel");
        /*this.userprenom = this.nativeStorage.getItem("UserPrenom");
        this.usernom =  this.nativeStorage.getItem("UserNom");
        this.islogin =  this.nativeStorage.getItem("islogin")*/
        console.log(" this.userprenom ", this.userprenom);
        console.log("  this.islogin ", this.islogin);
    };
    MyApp.prototype.goToSeetVoyage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__pages_seet_voyage_seet_voyage__["a" /* SeetVoyagePage */]);
    };
    MyApp.prototype.goToUsertrajet = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__pages_usertrajet_usertrajet__["a" /* UsertrajetPage */]);
    };
    MyApp.prototype.goToUserprofil = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__pages_userprofil_userprofil__["a" /* UserprofilPage */]);
    };
    MyApp.prototype.goToUsermessage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__pages_usermessage_usermessage__["a" /* UsermessagePage */]);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(page.component);
    };
    MyApp.prototype.logout = function () {
        this.navCtrl.push('page-login');
    };
    MyApp.prototype.editProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    MyApp.prototype.ionViewDidLoad = function () {
        // Put here the code you want to execute
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/app/app.html"*/'\n<ion-split-pane when="lg">\n<ion-menu  [content]="content" [persistent]="true" enable-menu-with-back-views="true">\n  <ion-header>\n    <ion-toolbar class="user-profile nav-transparent" no-padding>\n\n      <ion-grid class="white-bg">\n        <ion-row>\n          <ion-col col-4>\n            <ion-avatar item-start>\n              <img class="user-avatar" src="/assets/img/laat.jpeg">\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-8>\n            <h4 ion-text color="primary" class="bold" no-margin>{{userprenom}} {{usernom}}</h4>\n            <p ion-text color="secondary" no-margin>{{usertel}}</p>\n            <div padding-top>\n              <button ion-button icon-left small color="secondary" menuClose (click)="editProfile()">\n                <ion-icon name="contact"></ion-icon>\n                Editer Profil\n              </button>\n              <button ion-button icon-left small color="secondary" menuClose (click)="goToDeconnexion()">\n                <ion-icon name="log-out"></ion-icon>\n              </button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid no-padding>\n        <ion-row class="other-data">\n          <ion-col text-center class="column">\n            <span ion-text color="light" class="bold">Points</span>\n            <h5 ion-text no-margin class="text-1x text-white">1124</h5>\n          </ion-col>\n          <ion-col text-center class="column">\n            <span ion-text color="light" class="bold">Fingua Nekk</span>\n            <h5 ion-text no-margin class="text-1x text-white">Louga</h5>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n\n\n  <ion-content id="side-menu21" on-click="goUserInfos()">\n    <ion-list id="menu-list1">\n      <ion-item color="positive" menuClose="" on-click="goToAcceuil()" id="menu-list-item1">\n          <ion-icon color= "primary" name="home" item-left></ion-icon>\n        Home\n      </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToAlloDakar()" id="menu-list-item2">\n          <ion-icon color= "primary" name="search" item-left></ion-icon>\n        Rechercher\n      </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToDamayTukki()" id="menu-list-item3">\n          <ion-icon color= "primary" name="car" item-left></ion-icon>\n        Proposer\n      </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToInscription()" id="menu-list-item4">\n          <ion-icon color= "primary" color= "primary" name="create" item-left></ion-icon>\n        Inscription\n      </ion-item>\n      <ion-item *ngIf ="islogin==\'false\' || !islogin " color="positive" menuClose="" on-click="goToConnexion()" id="menu-list-item5">\n          <ion-icon color= "primary" color= "primary" name="log-in" item-left></ion-icon>\n        Connexion\n      </ion-item>\n      <ion-item *ngIf="islogin==\'true\'" color="positive" menuClose="" on-click="goToDeconnexion()" id="menu-list-item5">\n        <ion-icon color= "primary" name="log-out" item-left></ion-icon>\n         Deconnexion\n    </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToCloud()" id="menu-list-item6">\n          <ion-icon color= "primary" name="help-circle" item-left></ion-icon>\n        Aide\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToCart()" id="menu-list-item7">\n          <ion-icon color= "primary" name="information-circle" item-left></ion-icon>\n        A propos\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n  \n<!-- <ion-footer  style="width:100%;height:45px;">\n  <ion-toolbar color = "primary">\n    <ion-segment [(ngModel)]="icons" color="dark">\n\n        <ion-segment-button value="ios-home" on-click="goToAcceuil()">\n            <ion-icon name="ios-home"></ion-icon>\n         </ion-segment-button>\n    \n            <ion-segment-button value="car" on-click="goToUsertrajet()">\n                <ion-icon name="car"></ion-icon>\n             </ion-segment-button>\n        \n      <ion-segment-button value="md-search"  on-click="goToSeetVoyage()">\n        <ion-icon name="md-search"></ion-icon>\n      </ion-segment-button>\n   \n    \n      <ion-segment-button value="md-add-circle" on-click="goToDamayTukki()">\n        <ion-icon name="md-add-circle"></ion-icon>\n      </ion-segment-button>\n    \n      <ion-segment-button value="ios-chatbubbles"  on-click="goToUsermessage()">\n          <ion-icon name="ios-chatbubbles"></ion-icon> \n      </ion-segment-button>\n    \n      <ion-segment-button value="md-person" on-click="goToUserprofil()">\n        <ion-icon name="md-person"></ion-icon>\n      </ion-segment-button>\n\n\n    </ion-segment>\n  </ion-toolbar>\n  \n</ion-footer> -->\n\n\n</ion-split-pane>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__services_UsersInfosService__["a" /* UsersInfosService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPage = /** @class */ (function () {
    function CartPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cart\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CloudPage = /** @class */ (function () {
    function CloudPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CloudPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cloud',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/cloud/cloud.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cloud\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3"></ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/cloud/cloud.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], CloudPage);
    return CloudPage;
}());

//# sourceMappingURL=cloud.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersInfosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersInfosService = /** @class */ (function () {
    function UsersInfosService() {
        //this.token = this.connexionPage.GetUserToken();
    }
    UsersInfosService.prototype.getUserToken = function () {
        return this.userToken;
    };
    UsersInfosService.prototype.setUserToken = function (token) {
        this.userToken = token;
    };
    UsersInfosService.prototype.getUserPrenom = function () {
        return this.userPrenom;
    };
    UsersInfosService.prototype.setUserPreNom = function (prenom) {
        this.userPrenom = prenom;
    };
    UsersInfosService.prototype.getUserNom = function () {
        return this.userNom;
    };
    UsersInfosService.prototype.setUserNom = function (nom) {
        this.userNom = nom;
    };
    UsersInfosService.prototype.getUserIsLogin = function () {
        return this.userIsLogin;
    };
    UsersInfosService.prototype.getNumberofrefresh = function () {
        return this.numberofrefresh;
    };
    UsersInfosService.prototype.setNumberofrefresh = function (numberofrefresh) {
        this.numberofrefresh = numberofrefresh + 1;
    };
    UsersInfosService.prototype.setUserIsLogin = function (islogin) {
        this.userIsLogin = islogin;
    };
    UsersInfosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UsersInfosService);
    return UsersInfosService;
}());

//# sourceMappingURL=UsersInfosService.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceuilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allo_dakar_allo_dakar__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__acceuil_vente_acceuil_vente__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AcceuilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcceuilPage = /** @class */ (function () {
    function AcceuilPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu.enable(true);
    }
    AcceuilPage.prototype.goToCovoit = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__allo_dakar_allo_dakar__["a" /* AlloDakarPage */]);
    };
    AcceuilPage.prototype.goToJaayauto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__acceuil_vente_acceuil_vente__["a" /* AcceuilVentePage */]);
    };
    AcceuilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcceuilPage');
    };
    AcceuilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acceuil',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/acceuil/acceuil.html"*/'<!--\n  Generated template for the AcceuilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="animated fadeIn no-shadow">\n  <ion-navbar class="no-border thirds-op" color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n     \n    </button>\n    <ion-title>DamayDem.Com Dalal Jam</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content  class="animated fadeIn common-bg">\n    <img src="assets/img/mcv.jpg" style="display:block;width:580%;height:auto;margin-left:auto;margin-right:auto;" />\n     \n    <ion-row center>  \n      <ion-col text-center>   \n        <button id="loca-button1" style="width:300px;height:50px;" ion-button round  on-click="goToJaayauto()">\n          <span ion-text  class="bold"> Jaayal Sa Auto (Vente)</span> \n        </button>\n      </ion-col>\n     </ion-row>\n    <div class="spacer" style="width:300px;height:17px;"  id="alloDakar-spacer3"></div>\n    <ion-row center>  \n        <ion-col text-center>   \n          <button  id="transinterurbain-button2" style="width:300px;height:50px;"  ion-button round on-click="goToCovoit()">\n            <span ion-text  class="bold"> Luyeel Auto (Location)  </span> \n          </button>\n        </ion-col> \n       </ion-row>\n      <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n    <ion-row center>  \n      <ion-col text-center>   \n        <button  id="covoit-button3"  style="width:300px;height:50px;" ion-button  round  on-click="goToCovoit()">\n          <span ion-text  class="bold"> Andando (Covoiturage) </span>  \n        </button>\n      </ion-col> \n     </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/acceuil/acceuil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */]])
    ], AcceuilPage);
    return AcceuilPage;
}());

//# sourceMappingURL=acceuil.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_AlloDakar_NewUser__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InscriptionPage = /** @class */ (function () {
    function InscriptionPage(navCtrl, alloDakarService) {
        this.navCtrl = navCtrl;
        this.alloDakarService = alloDakarService;
        this.newuser = new __WEBPACK_IMPORTED_MODULE_3__models_AlloDakar_NewUser__["a" /* NewUser */]();
    }
    // connexion 
    InscriptionPage.prototype.inscription = function () {
        var _this = this;
        console.log(this.newuser);
        this.alloDakarService.inscription(this.newuser)
            .then(function (data) {
            console.log(data);
            if (data && data.error) {
                _this.message = data.error.error;
            }
            else if (data) {
                _this.message = "Votre compte a été crée avec succés";
            }
            ;
        });
    };
    InscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inscription',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/inscription/inscription.html"*/'\n<ion-header class="animated fadeIn no-shadow">\n\n  <ion-navbar class="no-border thirds-op" color="primary">\n    <ion-title>\n      <strong>DamayDem</strong><sup><ion-badge color="light" class="text-sm text-primary">.com</ion-badge></sup>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <!--list menu on the top-->\n  \n  <div class="booking-card marginB-16px">\n     <ion-grid class="card" fixed>\n       <ion-row>\n         <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n           <div class="guests bb">\n            <ion-item >\n              <ion-label  fixed>Prénom</ion-label>\n              <ion-input  type="text" value="" [(ngModel)]="newuser.prenom"></ion-input>\n            </ion-item>\n           </div>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n           <div class="guests bb">\n            <ion-item >\n              <ion-label fixed>Nom</ion-label>\n              <ion-input type="text" value="" [(ngModel)]="newuser.nom"></ion-input>\n            </ion-item>\n           </div>\n         </ion-col>\n       </ion-row>\n       <ion-row>\n           <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n             <div class="guests bb">\n              <ion-item >\n                <ion-label fixed>Telephone</ion-label>\n                <ion-input type="text" value="" [(ngModel)]="newuser.numtel"></ion-input>\n              </ion-item>\n             </div>\n           </ion-col>\n         </ion-row>\n \n         <ion-row>\n             <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n               <div class="guests bb">\n                <ion-item >\n                  <ion-label fixed>Mot de pass</ion-label>\n                  <ion-input type="text" value="" [(ngModel)]="newuser.motdepass"></ion-input>\n                </ion-item>\n               </div>\n             </ion-col>\n           </ion-row>\n \n           <ion-row>\n               <ion-col col-12 col-md-8 class="no-paddingT no-paddingB">\n                 <div class="guests bb">\n                  <ion-item >\n                    <ion-label fixed>Description</ion-label>\n                    <ion-input type="text" value="" [(ngModel)]="newuser.descrip"></ion-input>\n                  </ion-item>\n                 </div>\n               </ion-col>\n             </ion-row>\n \n       <ion-row>\n         <ion-col>\n           <button ion-button block color="primary" class="round thirds-op" tappable (click)="inscription()">\n             <ion-icon name="log-in"></ion-icon> &nbsp;&nbsp;\n             Inscription \n           </button>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n   </div>\n \n\n </ion-content>\n '/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/inscription/inscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */]])
    ], InscriptionPage);
    return InscriptionPage;
}());

//# sourceMappingURL=inscription.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlloDakarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seet_voyage_seet_voyage__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proposer_damay_tukki_proposer_damay_tukki__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trajet_trajet__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlloDakarPage = /** @class */ (function () {
    function AlloDakarPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.userprenom = localStorage.getItem("UserPrenom");
        this.usernom = localStorage.getItem("UserNom");
    }
    AlloDakarPage.prototype.goToSeetVoyage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__seet_voyage_seet_voyage__["a" /* SeetVoyagePage */]);
    };
    AlloDakarPage.prototype.goToProposerDamayTukki = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__proposer_damay_tukki_proposer_damay_tukki__["a" /* ProposerDamayTukkiPage */]);
    };
    AlloDakarPage.prototype.goToTrajet = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trajet_trajet__["a" /* TrajetPage */]);
    };
    AlloDakarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-allo-dakar',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/allo-dakar/allo-dakar.html"*/'<ion-header>\n        <ion-navbar>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>\n          Allo Dakar\n          </ion-title>\n        </ion-navbar>\n</ion-header>\n\n<ion-content class ="" padding id="page1" style="display:block;width:100%;height:100%;margin-left:auto;margin-right:auto;">\n  <img src="assets/img/kia.jpg" style="display:block;width:580%;height:auto;margin-left:auto;margin-right:auto;" />\n  \n  <ion-row center>  \n    <ion-col text-center>   \n      <button id="alloDakar-button1" style="width:300px;height:40px;" ion-button round  on-click="goToProposerDamayTukki()">\n        Damay Tukki (Proposer)\n      </button>\n    </ion-col>\n   </ion-row>\n  <div class="spacer" style="width:300px;height:15px;" id="alloDakar-spacer3"></div>\n \n\n  <ion-row center>  \n    <ion-col text-center>   \n      <button ion-button  style="width:300px;height:40px;" round id="alloDakar-button2"   on-click="goToSeetVoyage()">\n        Yobaléma (Rechercher)\n      </button>\n    </ion-col> \n   </ion-row>\n\n  <div class="spacer" style="width:300px;height:15px;" id="alloDakar-spacer3"></div>\n\n  <ion-row center>  \n    <ion-col text-center>   \n      <button  ion-button style="width:300px;height:40px;"  round id="alloDakar-button3"   on-click="goToTrajet()">\n        List Trajets\n      </button>\n    </ion-col> \n   </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/allo-dakar/allo-dakar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], AlloDakarPage);
    return AlloDakarPage;
}());

//# sourceMappingURL=allo-dakar.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeetVoyagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeetVoyagePage = /** @class */ (function () {
    function SeetVoyagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SeetVoyagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seet-voyage',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/seet-voyage/seet-voyage.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Seet Voyage\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n    <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n  <form id="seetVoyage-form1">\n    <ion-item id="seetVoyage-select1">\n      <ion-label>\n        Depart\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Louga\n        </ion-option>\n        <ion-option>\n          Ziguinchor\n        </ion-option>\n        <ion-option>\n          Matam\n        </ion-option>\n        <ion-option>\n          Touba\n        </ion-option>\n        <ion-option>\n          Thies\n        </ion-option>\n        <ion-option>\n          St louis\n        </ion-option>\n        <ion-option>\n          Fatick\n        </ion-option>\n        <ion-option>\n          Diourbel\n        </ion-option>\n        <ion-option>\n          Kaolack\n        </ion-option>\n        <ion-option>\n          Dakar\n        </ion-option>\n        <ion-option>\n          Sédiou\n        </ion-option>\n        <ion-option>\n          Kafrine\n        </ion-option>\n        <ion-option>\n          Kédougou\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-select1">\n      <ion-label>\n        Destination\n      </ion-label>\n      <ion-select name="Destination">\n        <ion-option>\n          Louga\n        </ion-option>\n        <ion-option>\n          Ziguinchor\n        </ion-option>\n        <ion-option>\n          Matam\n        </ion-option>\n        <ion-option>\n          Touba\n        </ion-option>\n        <ion-option>\n          Thies\n        </ion-option>\n        <ion-option>\n          St louis\n        </ion-option>\n        <ion-option>\n          Fatick\n        </ion-option>\n        <ion-option>\n          Diourbel\n        </ion-option>\n        <ion-option>\n          Kaolack\n        </ion-option>\n        <ion-option>\n          Dakar\n        </ion-option>\n        <ion-option>\n          Sédiou\n        </ion-option>\n        <ion-option>\n          Kafrine\n        </ion-option>\n        <ion-option>\n          Kédougou\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="seetVoyage-input3">\n      <ion-label>\n        Date\n      </ion-label>\n      <ion-input type="date" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="seetVoyage-input4">\n      <ion-label>\n        Heure\n      </ion-label>\n      <ion-input type="time" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="seetVoyage-input5">\n      <ion-label>\n        Nombre de Place\n      </ion-label>\n      <ion-input type="number" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <div class="spacer" style="width:250px;height:17px;" id="alloDakar-spacer3"></div>\n  \n  <ion-row center>  \n      <ion-col text-center>   \n          <button round id="seetVoyage-button3" style="width:300px;height:60px;"  ion-button color="positive" block>\n              Rechercher (Seet)\n            </button>          \n      </ion-col> \n     </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/seet-voyage/seet-voyage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SeetVoyagePage);
    return SeetVoyagePage;
}());

//# sourceMappingURL=seet-voyage.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposerDamayTukkiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_AlloDakar_NewTrajet__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProposerDamayTukkiPage = /** @class */ (function () {
    function ProposerDamayTukkiPage(navCtrl, alloDakarService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alloDakarService = alloDakarService;
        this.alertCtrl = alertCtrl;
        this.newTrajet = new __WEBPACK_IMPORTED_MODULE_3__models_AlloDakar_NewTrajet__["a" /* NewTrajet */]();
        this.myDate = new Date().toISOString();
        this.myTime = new Date().toISOString();
    }
    ProposerDamayTukkiPage.prototype.CreerTrajet = function () {
        var _this = this;
        console.log("myDate : " + this.myDate);
        console.log("myTime : " + this.myTime);
        this.newTrajet.dateDep = this.myDate.slice(0, 10);
        this.newTrajet.heureDep = this.myTime.slice(11, 16);
        this.newTrajet.lieuDep_id = 12;
        this.newTrajet.lieuArr_id = 18;
        this.newTrajet.lieuDep = 12;
        this.newTrajet.lieuArr = 18;
        console.log("myDate : " + this.newTrajet.dateDep);
        console.log("myTime : " + this.newTrajet.heureDep);
        this.alloDakarService.NewTrajet(this.newTrajet)
            .then(function (data) {
            if (data) {
                /*localStorage.setItem("UserPrenom", data.UserPrenom);
                localStorage.setItem("UserNom", data.UserNom);
                localStorage.setItem("Token", data.token);
                localStorage.setItem("islogin","true");
                 this.navCtrl.setRoot(AlloDakarPage);*/
            }
            else if (data && data.error) {
                _this.erreur = data.error;
                var alert_1 = _this.alertCtrl.create({
                    title: 'Probleme',
                    subTitle: _this.erreur,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }).catch(function (err) {
            //return res.status(500).json({ 'error':'impossible de verifier user'});
        });
    };
    ProposerDamayTukkiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proposer-damay-tukki',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADAppli/src/pages/proposer-damay-tukki/proposer-damay-tukki.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button >\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Proposer (Damay Tukki)\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="" padding id="page5">\n  <form class="bg" id="proposerDamayTukki-form3">\n    <ion-item id="proposerselect1">\n      <ion-label>\n        Depart\n      </ion-label>\n      <ion-select [(ngModel)]="newTrajet.lieuDep" name="lieuDep">\n        <ion-option value="12">Louga</ion-option>\n        <ion-option value="10">Ziguinchor</ion-option>\n        <ion-option value="14">Matam</ion-option>\n        <ion-option value="3">Touba</ion-option>\n        <ion-option value="5">Thies</ion-option>\n        <ion-option value="8">St louis</ion-option>\n        <ion-option value="17">Fatick</ion-option>\n        <ion-option value="11">Diourbel </ion-option>\n        <ion-option value="6">Kaolack</ion-option>\n        <ion-option value="1">Dakar</ion-option>\n        <ion-option value="9">Rufisque</ion-option>\n        <ion-option value="7" >Mbour</ion-option>\n        <ion-option value="2" >Pikine</ion-option>\n        <ion-option value="13" >Tambacounda</ion-option>\n        <ion-option value="15" >Kolda</ion-option>\n        <ion-option value="18" >Tivaouane</ion-option>\n        <ion-option value="4" >Guédiawaye</ion-option>\n        <ion-option value="16" >Richard-Toll</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="proposerselect2">\n      <ion-label>\n        Destination\n      </ion-label>\n      <ion-select [(ngModel)]="newTrajet.lieuArr" name="lieuArr">\n        <ion-option value="12">Louga</ion-option>\n        <ion-option value="10">Ziguinchor</ion-option>\n        <ion-option value="14">Matam</ion-option>\n        <ion-option value="3">Touba</ion-option>\n        <ion-option value="5">Thies</ion-option>\n        <ion-option value="8">St louis</ion-option>\n        <ion-option value="17">Fatick</ion-option>\n        <ion-option value="11">Diourbel </ion-option>\n        <ion-option value="6">Kaolack</ion-option>\n        <ion-option value="1">Dakar</ion-option>\n        <ion-option value="9">Rufisque</ion-option>\n        <ion-option value="7" >Mbour</ion-option>\n        <ion-option value="2" >Pikine</ion-option>\n        <ion-option value="13" >Tambacounda</ion-option>\n        <ion-option value="15" >Kolda</ion-option>\n        <ion-option value="18" >Tivaouane</ion-option>\n        <ion-option value="4" >Guédiawaye</ion-option>\n        <ion-option value="16" >Richard-Toll</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="proposerinput9">\n      <ion-label> Date   <ion-icon name="calendar"></ion-icon>  </ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="myDate" name="dateDep"> </ion-datetime>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-input10">\n      <ion-label>\n        heure\n      </ion-label>\n     \n      <ion-datetime displayFormat="HH:mm" [(ngModel)]="myTime" name="heureDep"> </ion-datetime>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-input11">\n      <ion-label>\n        Nombre de palace\n      </ion-label>\n      \n      <ion-select [(ngModel)]="newTrajet.nbplace" type="number" placeholder="" name ="nbplace">\n          <ion-option>1</ion-option>\n          <ion-option>2</ion-option>\n          <ion-option>3</ion-option>\n          <ion-option>4</ion-option>\n          <ion-option>5</ion-option>\n          <ion-option>6</ion-option>\n          <ion-option>7</ion-option>\n          <ion-option>8</ion-option>\n          <ion-option>9</ion-option>\n          <ion-option>10</ion-option>\n          <ion-option>11</ion-option>  \n          <ion-option>12</ion-option>\n          <ion-option>13</ion-option>\n        </ion-select>\n    </ion-item>\n  </form>\n  <form id="proposerDamayTukki-form8">\n    <ion-item id="proposerDamayTukki-textarea1">\n      <ion-label>\n        Prix\n      </ion-label>\n      <ion-textarea [(ngModel)]="newTrajet.tarifvoy" placeholder="Prix Par Place"  name ="tarifvoy">\n        10000\n      </ion-textarea>\n    </ion-item>\n  </form>\n  \n  <button id="proposerDamayTukki-button4" ion-button  round  color="positive" on-click="CreerTrajet()" block>\n    Enregistrer\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADAppli/src/pages/proposer-damay-tukki/proposer-damay-tukki.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProposerDamayTukkiPage);
    return ProposerDamayTukkiPage;
}());

//# sourceMappingURL=proposer-damay-tukki.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map