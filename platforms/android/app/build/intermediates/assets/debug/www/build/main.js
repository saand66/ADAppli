webpackJsonp([8],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrajetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_trajet_details_trajet_details__ = __webpack_require__(110);
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
            selector: 'page-trajet',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/trajet/trajet.html"*/'<!--\n  Generated template for the TrajetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trajet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    \n       \n     <ion-card-header class = "card-title">\n        Trajets diponible\n      </ion-card-header>\n\n   \n    <ion-card *ngFor="let trajet of trajets" class="card-subtitle">\n     <ion-row> \n      <ion-col> \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../assets/img/laat.jpeg">\n        </ion-avatar>\n        <h4>{{trajet.User.prenom}} {{trajet.User.nom}}</h4>\n        <p>{{trajet.dateDep}}</p>\n      </ion-item>\n    </ion-col>\n      <ion-col> {{trajet.tarifvoy}}</ion-col>\n    </ion-row>\n        <ion-card-content>\n       \n            <div class="card-title" on-tap="GoToDetails(trajet)" > \n            <ion-card-title class="card-title">\n              {{trajet.lieuDep + " - " + trajet.lieuArr}} \n             </ion-card-title>\n            </div>\n        </ion-card-content>\n      </ion-card> \n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/trajet/trajet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TrajetPage);
    return TrajetPage;
}());

//# sourceMappingURL=trajet.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrajetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_AlloDakar_Trajet__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlloDakarApi_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Reservation__ = __webpack_require__(275);
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
        console.log('le trajet : ' + this.navParams.get('letrajet'));
        this.trajetstodetails = this.navParams.get('letrajet');
    }
    TrajetDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrajetDetailsPage');
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
            selector: 'page-trajet-details',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/trajet-details/trajet-details.html"*/'<!--\n  Generated template for the TrajetDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>trajetDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n\n        <ion-item>\n          <ion-avatar item-start>\n           \n          </ion-avatar>\n           <ion-card-title>\n              <h3> {{trajetstodetails.lieuDep + " - " + trajetstodetails.lieuArr}}</h3> \n            </ion-card-title>\n          </ion-item> \n        <ion-card-content>\n\n            <ion-item>  \n            \n                <p>\n                    <b>Arrivée :</b>   {{trajetstodetails.lieuArr}}\n                </p>\n           <p>\n               <b>Date de départ :</b> {{trajetstodetails.dateDep}}\n           </p>\n           <p>\n              <b>Heure :</b> {{trajetstodetails.heureDep}}\n           </p>\n           <p>\n               <b>Tarif :</b> {{trajetstodetails.tarifvoy}}\n           </p>\n           <p>\n               <b>Nombre de place : </b> {{trajetstodetails.nbplacedispo}}\n           </p>\n  \n           <p>\n               <b>Posté par : </b> {{trajetstodetails.User.prenom}}\n           </p>\n          </ion-item>\n\n\n        </ion-card-content>\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>4 Comments</div>\n            </button>\n          </ion-col>\n          <ion-col center text-center>\n            <ion-note>\n              11h ago\n            </ion-note>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n      <ion-card>\n\n        <ion-item>\n          <ion-avatar item-start>\n           \n          </ion-avatar>\n           <ion-card-title>\n            \n            </ion-card-title>\n          </ion-item> \n          \n        <ion-card-content>\n            \n            <ion-item-group> \n                  <ion-row center> \n                <ion-item-divider color="primary"></ion-item-divider> \n                <ion-col text-center>   \n                  <ion-item>\n                    <ion-label>J\'accepte les Conditions Générales</ion-label>\n                    <ion-checkbox color="dark" checked="true"></ion-checkbox>\n                    </ion-item>\n                 </ion-col> \n                </ion-row>\n                <ion-item-divider color="primary"></ion-item-divider> \n                <ion-row center>  \n                    <ion-col text-center>   \n                    <ion-item>\n                        <ion-label>Nombre de place</ion-label>\n                      <ion-select [(ngModel)]="nbplace" name="nbplace">\n                        <ion-option>1</ion-option>\n                        <ion-option>2</ion-option>\n                        <ion-option>3</ion-option>\n                        <ion-option>4</ion-option>\n                        <ion-option>5</ion-option>\n                        <ion-option>6</ion-option>\n                      </ion-select>\n                    </ion-item>\n                   </ion-col> \n                  </ion-row>\n                  <ion-item-divider color="primary"></ion-item-divider> \n                  <ion-row center>  \n                   <ion-col text-center>   \n                    <button  ion-button  style="width:300px;height:60px;" round id="alloDakar-button3"  on-click="goToReservation(trajetstodetails)">\n                        Reserver\n                      </button>\n                   </ion-col> \n                  </ion-row>\n                </ion-item-group>\n        </ion-card-content>\n        \n      \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/trajet-details/trajet-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_AlloDakarApi_service__["a" /* AlloDakarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TrajetDetailsPage);
    return TrajetDetailsPage;
}());

//# sourceMappingURL=trajet-details.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceuilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allo_dakar_allo_dakar__ = __webpack_require__(48);
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
    function AcceuilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcceuilPage.prototype.goToCovoit = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__allo_dakar_allo_dakar__["a" /* AlloDakarPage */]);
    };
    AcceuilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcceuilPage');
    };
    AcceuilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acceuil',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/acceuil/acceuil.html"*/'<!--\n  Generated template for the AcceuilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n       DAMAYDEM.COM\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content  class ="" padding>\n    <img src="assets/img/mcv.jpg" style="display:block;width:580%;height:auto;margin-left:auto;margin-right:auto;" />\n     \n    <ion-row center>  \n      <ion-col text-center>   \n        <button id="loca-button1" style="width:300px;height:50px;" ion-button round  on-click="goToCovoit()">\n          Location de voitures\n        </button>\n      </ion-col>\n     </ion-row>\n    <div class="spacer" style="width:300px;height:17px;"  id="alloDakar-spacer3"></div>\n    <ion-row center>  \n        <ion-col text-center>   \n          <button  id="transinterurbain-button2" style="width:300px;height:50px;"  ion-button round on-click="goToCovoit()">\n           Transport Inter-Urbain\n          </button>\n        </ion-col> \n       </ion-row>\n      <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n    <ion-row center>  \n      <ion-col text-center>   \n        <button  id="covoit-button3"  style="width:300px;height:50px;" ion-button  round  on-click="goToCovoit()">\n         Covoiturage\n        </button>\n      </ion-col> \n     </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/acceuil/acceuil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AcceuilPage);
    return AcceuilPage;
}());

//# sourceMappingURL=acceuil.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsermessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-usermessage',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/usermessage/usermessage.html"*/'<!--\n  Generated template for the UsermessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/usermessage/usermessage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UsermessagePage);
    return UsermessagePage;
}());

//# sourceMappingURL=usermessage.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-userprofil',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/userprofil/userprofil.html"*/'<!--\n  Generated template for the UserprofilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes informations</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/userprofil/userprofil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UserprofilPage);
    return UserprofilPage;
}());

//# sourceMappingURL=userprofil.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsertrajetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-usertrajet',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/usertrajet/usertrajet.html"*/'<!--\n  Generated template for the UsertrajetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes voyages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/usertrajet/usertrajet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UsertrajetPage);
    return UsertrajetPage;
}());

//# sourceMappingURL=usertrajet.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acceuil/acceuil.module": [
		299,
		7
	],
	"../pages/connexion/connexion.module": [
		298,
		6
	],
	"../pages/inscription/inscription.module": [
		300,
		5
	],
	"../pages/trajet-details/trajet-details.module": [
		302,
		4
	],
	"../pages/trajet/trajet.module": [
		301,
		3
	],
	"../pages/usermessage/usermessage.module": [
		303,
		2
	],
	"../pages/userprofil/userprofil.module": [
		304,
		1
	],
	"../pages/usertrajet/usertrajet.module": [
		305,
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
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 170:
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_allo_dakar_allo_dakar__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cloud_cloud__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_seet_voyage_seet_voyage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_trajet_trajet__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inscription_inscription__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_proposer_damay_tukki_proposer_damay_tukki__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_AlloDakarApi_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_trajet_details_trajet_details__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_UsersInfosService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_acceuil_acceuil__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_userprofil_userprofil__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_usertrajet_usertrajet__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_usermessage_usermessage__ = __webpack_require__(112);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cloud_cloud__["a" /* CloudPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_seet_voyage_seet_voyage__["a" /* SeetVoyagePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_proposer_damay_tukki_proposer_damay_tukki__["a" /* ProposerDamayTukkiPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_trajet_trajet__["a" /* TrajetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_trajet_details_trajet_details__["a" /* TrajetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_acceuil_acceuil__["a" /* AcceuilPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_userprofil_userprofil__["a" /* UserprofilPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_usertrajet_usertrajet__["a" /* UsertrajetPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_usermessage_usermessage__["a" /* UsermessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/connexion/connexion.module#ConnexionPageModule', name: 'ConnexionPage', segment: 'connexion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acceuil/acceuil.module#AcceuilPageModule', name: 'AcceuilPage', segment: 'acceuil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inscription/inscription.module#InscriptionPageModule', name: 'InscriptionPage', segment: 'inscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trajet/trajet.module#TrajetPageModule', name: 'TrajetPage', segment: 'trajet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trajet-details/trajet-details.module#TrajetDetailsPageModule', name: 'TrajetDetailsPage', segment: 'trajet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usermessage/usermessage.module#UsermessagePageModule', name: 'UsermessagePage', segment: 'usermessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofil/userprofil.module#UserprofilPageModule', name: 'UserprofilPage', segment: 'userprofil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usertrajet/usertrajet.module#UsertrajetPageModule', name: 'UsertrajetPage', segment: 'usertrajet', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cloud_cloud__["a" /* CloudPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_seet_voyage_seet_voyage__["a" /* SeetVoyagePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_proposer_damay_tukki_proposer_damay_tukki__["a" /* ProposerDamayTukkiPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_trajet_trajet__["a" /* TrajetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_trajet_details_trajet_details__["a" /* TrajetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_acceuil_acceuil__["a" /* AcceuilPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_userprofil_userprofil__["a" /* UserprofilPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_usertrajet_usertrajet__["a" /* UsertrajetPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_usermessage_usermessage__["a" /* UsermessagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_AlloDakarApi_service__["a" /* AlloDakarService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__services_UsersInfosService__["a" /* UsersInfosService */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_storage__["a" /* NativeStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
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

/***/ 274:
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

/***/ 275:
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

/***/ 276:
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_allo_dakar_allo_dakar__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inscription_inscription__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_proposer_damay_tukki_proposer_damay_tukki__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_UsersInfosService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_acceuil_acceuil__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_seet_voyage_seet_voyage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_usertrajet_usertrajet__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_userprofil_userprofil__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_usermessage_usermessage__ = __webpack_require__(112);
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
    function MyApp(platform, statusBar, splashScreen, usersInfosService, nativeStorage) {
        this.nativeStorage = nativeStorage;
        this.theme = 'facebook-messenger-theme';
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_acceuil_acceuil__["a" /* AcceuilPage */];
        this.numberofresh = 1;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        usersInfosService.setNumberofrefresh(this.numberofresh);
        this.numberofresh = usersInfosService.getNumberofrefresh();
        console.log(" numberofresh : ", this.numberofresh);
        /* this.userprenom = usersInfosService.getUserPrenom();
         this.usernom =  usersInfosService.getUserNom();
         this.islogin =  usersInfosService.getUserIsLogin();*/
        this.goUserInfos();
        //this.task  = setInterval(this.goUserInfos.bind(this), 1000)
        /*if (!this.usernom){
          clearInterval(this.task);
          console.log(this.task)
        }*/
    }
    MyApp.prototype.goToAcceuil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_acceuil_acceuil__["a" /* AcceuilPage */]);
    };
    MyApp.prototype.goToConnexion = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__["a" /* ConnexionPage */]);
    };
    MyApp.prototype.goToAlloDakar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */]);
    };
    MyApp.prototype.goToDeconnexion = function () {
        //this.usersInfosService.setUserIsLogin(false);
        this.islogin = "false";
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */]);
    };
    MyApp.prototype.goToInscription = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_inscription_inscription__["a" /* InscriptionPage */]);
    };
    MyApp.prototype.goToDamayTukki = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_proposer_damay_tukki_proposer_damay_tukki__["a" /* ProposerDamayTukkiPage */]);
    };
    MyApp.prototype.goUserInfos = function () {
        // Put here the code you want to execute
        console.log("mangui fi ");
        this.userprenom = localStorage.getItem("UserPrenom");
        this.usernom = localStorage.getItem("UserNom");
        this.islogin = localStorage.getItem("islogin");
        /*this.userprenom = this.nativeStorage.getItem("UserPrenom");
        this.usernom =  this.nativeStorage.getItem("UserNom");
        this.islogin =  this.nativeStorage.getItem("islogin")*/
        console.log(" this.userprenom ", this.userprenom);
        console.log("  this.islogin ", this.islogin);
    };
    MyApp.prototype.goToSeetVoyage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_seet_voyage_seet_voyage__["a" /* SeetVoyagePage */]);
    };
    MyApp.prototype.goToUsertrajet = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__pages_usertrajet_usertrajet__["a" /* UsertrajetPage */]);
    };
    MyApp.prototype.goToUserprofil = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__pages_userprofil_userprofil__["a" /* UserprofilPage */]);
    };
    MyApp.prototype.goToUsermessage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__pages_usermessage_usermessage__["a" /* UsermessagePage */]);
    };
    MyApp.prototype.ionViewDidLoad = function () {
        // Put here the code you want to execute
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/app/app.html"*/'<ion-menu  [content]="mainContent" >\n  <ion-header  class="bar-balanced" >\n    <ion-toolbar color = "primary">\n      <ion-title >\n        Allo Dakar Menu \n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21" on-click="goUserInfos()">\n    \n    <div class="spacer" style="width:268px;height:30px;" id="menu-list-item1"></div>\n    <ion-list id="menu-list1">\n        <ion-item color="none" id="menu-list-item14">\n            <ion-avatar item-left>\n                <img src="assets/img/laat.jpeg">\n            </ion-avatar>\n            <h2>\n                {{userprenom}} {{usernom}}\n            </h2>\n          </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToAcceuil()" id="menu-list-item1">\n          <ion-icon color= "primary" name="home" item-left></ion-icon>\n        Home\n      </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToAlloDakar()" id="menu-list-item2">\n          <ion-icon color= "primary" name="search" item-left></ion-icon>\n        Rechercher\n      </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToDamayTukki()" id="menu-list-item3">\n          <ion-icon color= "primary" name="car" item-left></ion-icon>\n        Proposer\n      </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToInscription()" id="menu-list-item4">\n          <ion-icon color= "primary" color= "primary" name="create" item-left></ion-icon>\n        Inscription\n      </ion-item>\n      <ion-item *ngIf ="islogin==\'false\' || !islogin " color="positive" menuClose="" on-click="goToConnexion()" id="menu-list-item5">\n          <ion-icon color= "primary" color= "primary" name="log-in" item-left></ion-icon>\n        Connexion\n      </ion-item>\n      <ion-item *ngIf="islogin==\'true\'" color="positive" menuClose="" on-click="goToDeconnexion()" id="menu-list-item5">\n        <ion-icon color= "primary" name="log-out" item-left></ion-icon>\n         Deconnexion\n    </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToCloud()" id="menu-list-item6">\n          <ion-icon color= "primary" name="help-circle" item-left></ion-icon>\n        Aide\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToCart()" id="menu-list-item7">\n          <ion-icon color= "primary" name="information-circle" item-left></ion-icon>\n        A propos\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-footer  style="width:100%;height:45px;">\n  <ion-toolbar color = "primary">\n    <ion-segment [(ngModel)]="icons" color="dark">\n\n        <ion-segment-button value="ios-home" on-click="goToAcceuil()">\n            <ion-icon name="ios-home"></ion-icon>\n         </ion-segment-button>\n    \n            <ion-segment-button value="car" on-click="goToUsertrajet()">\n                <ion-icon name="car"></ion-icon>\n             </ion-segment-button>\n        \n      <ion-segment-button value="md-search"  on-click="goToSeetVoyage()">\n        <ion-icon name="md-search"></ion-icon>\n      </ion-segment-button>\n   \n    \n      <ion-segment-button value="md-add-circle" on-click="goToDamayTukki()">\n        <ion-icon name="md-add-circle"></ion-icon>\n      </ion-segment-button>\n    \n      <ion-segment-button value="ios-chatbubbles"  on-click="goToUsermessage()">\n          <ion-icon name="ios-chatbubbles"></ion-icon> \n      </ion-segment-button>\n    \n      <ion-segment-button value="md-person" on-click="goToUserprofil()">\n        <ion-icon name="md-person"></ion-icon>\n      </ion-segment-button>\n\n\n    </ion-segment>\n  </ion-toolbar>\n  \n</ion-footer>\n\n<ion-nav #mainContent [root]="rootPage" [class]="theme"></ion-nav>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__services_UsersInfosService__["a" /* UsersInfosService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-cart',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cart\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-cloud',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/cloud/cloud.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cloud\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3"></ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/cloud/cloud.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CloudPage);
    return CloudPage;
}());

//# sourceMappingURL=cloud.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlloDakarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_AlloDakar_Login__ = __webpack_require__(170);
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
        this.baseUrl = 'http://damaydem.com:49160/api/';
        //private baseUrl : string ='/api/';
        this.serviceRegister = 'users/register';
        this.serviceLogin = 'users/login';
        this.newtrajetpath = 'trajets/new';
        this.serviceList = 'trajets';
        this.serviceReser = 'reservation/new';
        this.serviceModifResev = 'reservation/modif';
        this.serviceAnnulResev = 'reservation/annul';
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
            .catch(function (error) { return console.log('une erreur est survenue ' + error); });
    };
    AlloDakarService.prototype.Connexion = function (Login) {
        var url = "" + this.baseUrl + this.serviceLogin;
        return this.http.post(url, Login)
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (error) { return error.json(); });
        //.catch(error => console.log ('une erreur est survenue ' + error))
    };
    //return this.http.post('url', user, {headers: headers});
    AlloDakarService.prototype.NewTrajet = function (newTrajet) {
        var url = "" + this.baseUrl + this.newtrajetpath;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json")
            .set("Authorization", 'Bearer ' + this.usersInfosService.getUserToken());
        console.log("le token bey :", this.usersInfosService.getUserToken());
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
    AlloDakarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__UsersInfosService__["a" /* UsersInfosService */]])
    ], AlloDakarService);
    return AlloDakarService;
}());

//# sourceMappingURL=AlloDakarApi.service.js.map

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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlloDakarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seet_voyage_seet_voyage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proposer_damay_tukki_proposer_damay_tukki__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trajet_trajet__ = __webpack_require__(109);
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
            selector: 'page-allo-dakar',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/allo-dakar/allo-dakar.html"*/'<ion-header>\n        <ion-navbar>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>\n          Allo Dakar\n          </ion-title>\n        </ion-navbar>\n</ion-header>\n<ion-content class ="" padding id="page1" style="display:block;width:100%;height:100%;margin-left:auto;margin-right:auto;">\n  <img src="assets/img/kia.jpg" style="display:block;width:580%;height:auto;margin-left:auto;margin-right:auto;" />\n  \n  <ion-row center>  \n    <ion-col text-center>   \n      <button id="alloDakar-button1" style="width:300px;height:40px;" ion-button round  on-click="goToProposerDamayTukki()">\n        Damay Tukki (Proposer)\n      </button>\n    </ion-col>\n   </ion-row>\n  <div class="spacer" style="width:300px;height:15px;" id="alloDakar-spacer3"></div>\n \n\n  <ion-row center>  \n    <ion-col text-center>   \n      <button ion-button  style="width:300px;height:40px;" round id="alloDakar-button2"   on-click="goToSeetVoyage()">\n        Yobaléma (Rechercher)\n      </button>\n    </ion-col> \n   </ion-row>\n\n  <div class="spacer" style="width:300px;height:15px;" id="alloDakar-spacer3"></div>\n\n  <ion-row center>  \n    <ion-col text-center>   \n      <button  ion-button style="width:300px;height:40px;"  round id="alloDakar-button3"   on-click="goToTrajet()">\n        List Trajets\n      </button>\n    </ion-col> \n   </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/allo-dakar/allo-dakar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AlloDakarPage);
    return AlloDakarPage;
}());

//# sourceMappingURL=allo-dakar.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlloDakarApi_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_AlloDakar_Login__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__allo_dakar_allo_dakar__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inscription_inscription__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_UsersInfosService__ = __webpack_require__(47);
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
    function ConnexionPage(navCtrl, alloDakarService, usersInfosService, alertCtrl, nativeStorage) {
        this.navCtrl = navCtrl;
        this.alloDakarService = alloDakarService;
        this.usersInfosService = usersInfosService;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.login = new __WEBPACK_IMPORTED_MODULE_4__models_AlloDakar_Login__["a" /* Login */]();
        // this.Connexion();
    }
    // connexion 
    ConnexionPage.prototype.Connexion = function () {
        var _this = this;
        console.log(this.login);
        this.alloDakarService.Connexion(this.login)
            .then(function (data) {
            console.log("mon erreur : " + data);
            if (data && data.token) {
                localStorage.setItem("UserPrenom", data.UserPrenom);
                localStorage.setItem("UserNom", data.UserNom);
                localStorage.setItem("Token", data.token);
                localStorage.setItem("islogin", "true");
                _this.usersInfosService.setUserToken(data.token);
                _this.usersInfosService.setUserPreNom(data.UserPrenom);
                _this.usersInfosService.setUserNom(data.UserNom);
                _this.usersInfosService.setUserIsLogin(true);
                _this.nativeStorage.setItem("UserPrenom", data.UserPrenom);
                _this.nativeStorage.setItem("UserNom", data.UserNom);
                _this.nativeStorage.setItem("Token", data.token);
                _this.nativeStorage.setItem("islogin", true);
                // this.alloDakarService.userNom = data.UserNom;
                //  this.alloDakarService.userToken = data.token;
                //  this.alloDakarService.userIsLogin = "true";
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__allo_dakar_allo_dakar__["a" /* AlloDakarPage */]);
            }
            else if (data && data.error) {
                _this.erreur = data.error;
                console.log("mon erreur : " + _this.erreur);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Probleme',
                    subTitle: _this.erreur,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }).catch(function (err) {
            ///  return Response.status(500).json({ 'error':'impossible de verifier user'});
        });
    };
    ConnexionPage.prototype.Inscription = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__inscription_inscription__["a" /* InscriptionPage */]);
    };
    ConnexionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connexion',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/connexion/connexion.html"*/'<!--\n  Generated template for the ConnexionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>connexion</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n   <ion-content padding   class="">\n     <ion-list> \n\n        <img src="assets/img/mcv.jpg" style="display:block;width:50%;height:20%;margin-left:auto;margin-right:auto;" />\n\n     </ion-list>\n     <div class="spacer" style="width:300px;height:20px;" id="alloDakar-spacer3"></div>\n    <ion-list>\n\n         {{messageerreur}}\n\n\n        <ion-item >\n          <ion-label floating>Numero Tel</ion-label>\n          <ion-input type="text" value="" [(ngModel)]="login.numtel"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="login.motdepass"></ion-input>\n        </ion-item>\n        \n      </ion-list>\n      <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n      <ion-item>\n          <button id="connexion" ion-button round color="positive" block style="width:300px;height:30px;"  on-click="Connexion()">\n              Connexion\n         </button>\n       </ion-item>\n      \n\n      <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n      <ion-item>\n      <button id="newcompte" ion-button round color="positive" block style="width:300px;height:30px;"  on-click="Inscription()">\n        Creer un compte\n      </button>\n    </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/connexion/connexion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_AlloDakarApi_service__["a" /* AlloDakarService */],
            __WEBPACK_IMPORTED_MODULE_7__services_UsersInfosService__["a" /* UsersInfosService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], ConnexionPage);
    return ConnexionPage;
}());

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_AlloDakar_NewUser__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__ = __webpack_require__(53);
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
            if (data) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__["a" /* ConnexionPage */]);
            }
        });
    };
    InscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inscription',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/inscription/inscription.html"*/'<!--\n  Generated template for the InscriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>inscription</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item >\n      <ion-label fixed>Prénom</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="newuser.prenom"></ion-input>\n    </ion-item>\n\n    <ion-item >\n      <ion-label fixed>Nom</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="newuser.nom"></ion-input>\n    </ion-item>\n\n    <ion-item >\n      <ion-label fixed>Telephone</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="newuser.numtel"></ion-input>\n    </ion-item>\n  \n    <ion-item >\n      <ion-label fixed>Mot de pass</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="newuser.motdepass"></ion-input>\n    </ion-item>\n\n    <ion-item >\n      <ion-label fixed>Description</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="newuser.descrip"></ion-input>\n    </ion-item>\n\n    <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n    \n  </ion-list>\n  \n  <button id="creercompte" ion-button color="positive" block style="font-weight:500;font-style:italic;text-align:left;" on-click="inscription()">\n    inscription\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/inscription/inscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */]])
    ], InscriptionPage);
    return InscriptionPage;
}());

//# sourceMappingURL=inscription.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeetVoyagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-seet-voyage',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/seet-voyage/seet-voyage.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Seet Voyage\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n    <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n  <form id="seetVoyage-form1">\n    <ion-item id="seetVoyage-select1">\n      <ion-label>\n        Depart\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Louga\n        </ion-option>\n        <ion-option>\n          Ziguinchor\n        </ion-option>\n        <ion-option>\n          Matam\n        </ion-option>\n        <ion-option>\n          Touba\n        </ion-option>\n        <ion-option>\n          Thies\n        </ion-option>\n        <ion-option>\n          St louis\n        </ion-option>\n        <ion-option>\n          Fatick\n        </ion-option>\n        <ion-option>\n          Diourbel\n        </ion-option>\n        <ion-option>\n          Kaolack\n        </ion-option>\n        <ion-option>\n          Dakar\n        </ion-option>\n        <ion-option>\n          Sédiou\n        </ion-option>\n        <ion-option>\n          Kafrine\n        </ion-option>\n        <ion-option>\n          Kédougou\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-select1">\n      <ion-label>\n        Destination\n      </ion-label>\n      <ion-select name="Destination">\n        <ion-option>\n          Louga\n        </ion-option>\n        <ion-option>\n          Ziguinchor\n        </ion-option>\n        <ion-option>\n          Matam\n        </ion-option>\n        <ion-option>\n          Touba\n        </ion-option>\n        <ion-option>\n          Thies\n        </ion-option>\n        <ion-option>\n          St louis\n        </ion-option>\n        <ion-option>\n          Fatick\n        </ion-option>\n        <ion-option>\n          Diourbel\n        </ion-option>\n        <ion-option>\n          Kaolack\n        </ion-option>\n        <ion-option>\n          Dakar\n        </ion-option>\n        <ion-option>\n          Sédiou\n        </ion-option>\n        <ion-option>\n          Kafrine\n        </ion-option>\n        <ion-option>\n          Kédougou\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="seetVoyage-input3">\n      <ion-label>\n        Date\n      </ion-label>\n      <ion-input type="date" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="seetVoyage-input4">\n      <ion-label>\n        Heure\n      </ion-label>\n      <ion-input type="time" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="seetVoyage-input5">\n      <ion-label>\n        Nombre de Place\n      </ion-label>\n      <ion-input type="number" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <div class="spacer" style="width:250px;height:17px;" id="alloDakar-spacer3"></div>\n  \n  <ion-row center>  \n      <ion-col text-center>   \n          <button round id="seetVoyage-button3" style="width:300px;height:60px;"  ion-button color="positive" block>\n              Rechercher (Seet)\n            </button>          \n      </ion-col> \n     </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/seet-voyage/seet-voyage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SeetVoyagePage);
    return SeetVoyagePage;
}());

//# sourceMappingURL=seet-voyage.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposerDamayTukkiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_AlloDakar_NewTrajet__ = __webpack_require__(273);
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
        this.newTrajet.dateDep = this.myDate.replace("/", "");
        this.newTrajet.heureDep = this.myTime.replace(":", "");
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
            selector: 'page-proposer-damay-tukki',template:/*ion-inline-start:"/Users/imac/Documents/DEV/ADApp/src/pages/proposer-damay-tukki/proposer-damay-tukki.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button >\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Proposer (Damay Tukki)\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="" padding id="page5">\n  <form class="bg" id="proposerDamayTukki-form3">\n    <ion-item id="proposerselect1">\n      <ion-label>\n        Depart\n      </ion-label>\n      <ion-select [(ngModel)]="newTrajet.lieuDep" name="lieuDep">\n        <ion-option>Louga</ion-option>\n        <ion-option>Ziguinchor</ion-option>\n        <ion-option>Matam</ion-option>\n        <ion-option>Touba</ion-option>\n        <ion-option>Thies</ion-option>\n        <ion-option>St louis</ion-option>\n        <ion-option>Fatick</ion-option>\n        <ion-option>Diourbel </ion-option>\n        <ion-option>Kaolack</ion-option>\n        <ion-option>Dakar</ion-option>\n        <ion-option>Sédiou</ion-option>  \n        <ion-option>Kafrine</ion-option>\n        <ion-option>Kédougou</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="proposerselect2">\n      <ion-label>\n        Destination\n      </ion-label>\n      <ion-select [(ngModel)]="newTrajet.lieuArr" name="lieuArr">\n        <ion-option>Louga</ion-option>\n        <ion-option>Ziguinchor</ion-option>\n        <ion-option>Matam</ion-option>\n        <ion-option>Touba</ion-option>\n        <ion-option>Thies</ion-option>\n        <ion-option>St louis</ion-option>\n        <ion-option>Fatick</ion-option>\n        <ion-option>Diourbel </ion-option>\n        <ion-option>Kaolack</ion-option>\n        <ion-option>Dakar</ion-option>\n        <ion-option>Sédiou</ion-option>  \n        <ion-option>Kafrine</ion-option>\n        <ion-option>Kédougou</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="proposerinput9">\n      <ion-label> Date   <ion-icon name="calendar"></ion-icon>  </ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="myDate" name="dateDep"> </ion-datetime>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-input10">\n      <ion-label>\n        heure\n      </ion-label>\n     \n      <ion-datetime displayFormat="HH:mm" [(ngModel)]="myTime" name="dateDep"> </ion-datetime>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-input11">\n      <ion-label>\n        Nombre de palace\n      </ion-label>\n      \n      <ion-select [(ngModel)]="newTrajet.nbplace" type="number" placeholder="" name ="nbplace">\n          <ion-option>1</ion-option>\n          <ion-option>2</ion-option>\n          <ion-option>3</ion-option>\n          <ion-option>4</ion-option>\n          <ion-option>5</ion-option>\n          <ion-option>6</ion-option>\n          <ion-option>7</ion-option>\n          <ion-option>8</ion-option>\n          <ion-option>9</ion-option>\n          <ion-option>10</ion-option>\n          <ion-option>11</ion-option>  \n          <ion-option>12</ion-option>\n          <ion-option>13</ion-option>\n        </ion-select>\n    </ion-item>\n  </form>\n  <form id="proposerDamayTukki-form8">\n    <ion-item id="proposerDamayTukki-textarea1">\n      <ion-label>\n        Prix\n      </ion-label>\n      <ion-textarea [(ngModel)]="newTrajet.tarifvoy" placeholder="Prix Par Place"  name ="tarifvoy">\n        10000\n      </ion-textarea>\n    </ion-item>\n  </form>\n  \n  <button id="proposerDamayTukki-button4" ion-button  round  color="positive" on-click="CreerTrajet()" block>\n    Enregistrer\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/imac/Documents/DEV/ADApp/src/pages/proposer-damay-tukki/proposer-damay-tukki.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProposerDamayTukkiPage);
    return ProposerDamayTukkiPage;
}());

//# sourceMappingURL=proposer-damay-tukki.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map