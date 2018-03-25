webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_AlloDakar_Login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allo_dakar_allo_dakar__ = __webpack_require__(79);
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
    function ConnexionPage(navCtrl, alloDakarService) {
        this.navCtrl = navCtrl;
        this.alloDakarService = alloDakarService;
        this.login = new __WEBPACK_IMPORTED_MODULE_3__models_AlloDakar_Login__["a" /* Login */]();
        // this.Connexion();
    }
    // connexion 
    ConnexionPage.prototype.Connexion = function () {
        var _this = this;
        console.log(this.login);
        this.alloDakarService.Connexion(this.login)
            .then(function (data) {
            console.log(data);
            if (data.token) {
                localStorage.setItem("Username", data.UserName);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__allo_dakar_allo_dakar__["a" /* AlloDakarPage */]);
            }
        });
    };
    ConnexionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connexion',template:/*ion-inline-start:"/Users/imac/.Trash/ADApp/src/pages/connexion/connexion.html"*/'<!--\n  Generated template for the ConnexionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>connexion</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item >\n          <ion-label fixed>Numero Tel</ion-label>\n          <ion-input type="text" value="" [(ngModel)]="login.numtel"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label fixed>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="login.motdepass"></ion-input>\n        </ion-item>\n        \n      </ion-list>\n     \n      <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n      <button id="connexion" ion-button color="positive" block style="font-weight:500;font-style:italic;text-align:left;" on-click="Connexion()">\n        Connexion\n      </button>\n</ion-content>\n'/*ion-inline-end:"/Users/imac/.Trash/ADApp/src/pages/connexion/connexion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */]])
    ], ConnexionPage);
    return ConnexionPage;
}());

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrajetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__ = __webpack_require__(78);
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
    function TrajetPage(navCtrl, alloDakarService) {
        this.navCtrl = navCtrl;
        this.alloDakarService = alloDakarService;
        this.getTrajet(null);
    }
    // Chargement des articles
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
    TrajetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trajet',template:/*ion-inline-start:"/Users/imac/.Trash/ADApp/src/pages/trajet/trajet.html"*/'<!--\n  Generated template for the TrajetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trajet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card-header>\n        Liste des trajets diponible\n      </ion-card-header>\n    <ion-card *ngFor="let trajet of trajets">\n        <ion-card-content>\n          <ion-card-title>\n            {{trajet.lieuDep + " => " + trajet.lieuArr}} \n             </ion-card-title>\n          <p>\n             Depart : {{trajet.lieuDep}}\n          </p>\n          <p>\n           Arrivee : {{trajet.lieuArr}}\n          </p>\n          <p>\n              Date de départ :  {{trajet.dateDep | date: \'dd/MM/yyyy\'}}\n          </p>\n          <p>\n              Heure : {{trajet.heureDep}}\n          </p>\n          <p>\n              Tarif : {{trajet.tarifvoy}}\n          </p>\n          <p>\n              Nombre de place  : {{trajet.nbplace}}\n          </p>\n\n          <p>\n              Posté par : {{trajet.User.username}}\n          </p>\n\n        </ion-card-content>\n      </ion-card>  \n\n</ion-content>\n'/*ion-inline-end:"/Users/imac/.Trash/ADApp/src/pages/trajet/trajet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_AlloDakarApi_service__["a" /* AlloDakarService */]])
    ], TrajetPage);
    return TrajetPage;
}());

//# sourceMappingURL=trajet.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/connexion/connexion.module": [
		286,
		1
	],
	"../pages/trajet/trajet.module": [
		287,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeetVoyagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-seet-voyage',template:/*ion-inline-start:"/Users/imac/.Trash/ADApp/src/pages/seet-voyage/seet-voyage.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Seet Voyage\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form id="seetVoyage-form1">\n    <ion-item id="seetVoyage-select1">\n      <ion-label>\n        Depart\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Louga\n        </ion-option>\n        <ion-option>\n          Ziguinchor\n        </ion-option>\n        <ion-option>\n          Matam\n        </ion-option>\n        <ion-option>\n          Touba\n        </ion-option>\n        <ion-option>\n          Thies\n        </ion-option>\n        <ion-option>\n          St louis\n        </ion-option>\n        <ion-option>\n          Fatick\n        </ion-option>\n        <ion-option>\n          Diourbel\n        </ion-option>\n        <ion-option>\n          Kaolack\n        </ion-option>\n        <ion-option>\n          Dakar\n        </ion-option>\n        <ion-option>\n          Sédiou\n        </ion-option>\n        <ion-option>\n          Kafrine\n        </ion-option>\n        <ion-option>\n          Kédougou\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-select1">\n      <ion-label>\n        Destination\n      </ion-label>\n      <ion-select name="Destination">\n        <ion-option>\n          Louga\n        </ion-option>\n        <ion-option>\n          Ziguinchor\n        </ion-option>\n        <ion-option>\n          Matam\n        </ion-option>\n        <ion-option>\n          Touba\n        </ion-option>\n        <ion-option>\n          Thies\n        </ion-option>\n        <ion-option>\n          St louis\n        </ion-option>\n        <ion-option>\n          Fatick\n        </ion-option>\n        <ion-option>\n          Diourbel\n        </ion-option>\n        <ion-option>\n          Kaolack\n        </ion-option>\n        <ion-option>\n          Dakar\n        </ion-option>\n        <ion-option>\n          Sédiou\n        </ion-option>\n        <ion-option>\n          Kafrine\n        </ion-option>\n        <ion-option>\n          Kédougou\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="seetVoyage-input3">\n      <ion-label>\n        Date\n      </ion-label>\n      <ion-input type="date" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="seetVoyage-input4">\n      <ion-label>\n        Heure\n      </ion-label>\n      <ion-input type="time" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="seetVoyage-input5">\n      <ion-label>\n        Nombre de Place\n      </ion-label>\n      <ion-input type="number" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <button id="seetVoyage-button3" ion-button color="positive" block>\n    <ion-icon name="search"></ion-icon>\n    Rechercher (Seet)\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/imac/.Trash/ADApp/src/pages/seet-voyage/seet-voyage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SeetVoyagePage);
    return SeetVoyagePage;
}());

//# sourceMappingURL=seet-voyage.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposerDamayTukkiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    function ProposerDamayTukkiPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProposerDamayTukkiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proposer-damay-tukki',template:/*ion-inline-start:"/Users/imac/.Trash/ADApp/src/pages/proposer-damay-tukki/proposer-damay-tukki.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="paper-plane"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Proposer (Damay Tukki)\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <form id="proposerDamayTukki-form3">\n    <ion-item id="proposerDamayTukki-input12">\n      <ion-label>\n        Numéro de Téléphone\n      </ion-label>\n      <ion-input type="tel" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-select1">\n      <ion-label>\n        Depart\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Louga\n        </ion-option>\n        <ion-option>\n          Ziguinchor\n        </ion-option>\n        <ion-option>\n          Matam\n        </ion-option>\n        <ion-option>\n          Touba\n        </ion-option>\n        <ion-option>\n          Thies\n        </ion-option>\n        <ion-option>\n          St louis\n        </ion-option>\n        <ion-option>\n          Fatick\n        </ion-option>\n        <ion-option>\n          Diourbel\n        </ion-option>\n        <ion-option>\n          Kaolack\n        </ion-option>\n        <ion-option>\n          Dakar\n        </ion-option>\n        <ion-option>\n          Sédiou\n        </ion-option>\n        <ion-option>\n          Kafrine\n        </ion-option>\n        <ion-option>\n          Kédougou\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-select2">\n      <ion-label>\n        Destination\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Dakar\n        </ion-option>\n        <ion-option>\n          Ziguinchor\n        </ion-option>\n        <ion-option>\n          Matam\n        </ion-option>\n        <ion-option>\n          Touba\n        </ion-option>\n        <ion-option>\n          Thies\n        </ion-option>\n        <ion-option>\n          St louis\n        </ion-option>\n        <ion-option>\n          Fatick\n        </ion-option>\n        <ion-option>\n          Diourbel\n        </ion-option>\n        <ion-option>\n          Kaolack\n        </ion-option>\n        <ion-option>\n          Louga\n        </ion-option>\n        <ion-option>\n          Sédiou\n        </ion-option>\n        <ion-option>\n          Kafrine\n        </ion-option>\n        <ion-option></ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-input9">\n      <ion-label>\n        Date\n      </ion-label>\n      <ion-input type="date" placeholder="Ban waxtu "></ion-input>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-input10">\n      <ion-label>\n        heure\n      </ion-label>\n      <ion-input type="time" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="proposerDamayTukki-input11">\n      <ion-label>\n        Nombre de palace\n      </ion-label>\n      <ion-input type="number" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <form id="proposerDamayTukki-form8">\n    <ion-item id="proposerDamayTukki-textarea1">\n      <ion-label>\n        Prix\n      </ion-label>\n      <ion-textarea placeholder="Prix conseillé">\n        10000\n      </ion-textarea>\n    </ion-item>\n  </form>\n  <form id="proposerDamayTukki-form9">\n    <ion-item id="proposerDamayTukki-range1">\n      <ion-range min="0" max="100" step="1" color="positive" value="50">\n        <ion-label range-left>\n          Range\n        </ion-label>\n      </ion-range>\n    </ion-item>\n  </form>\n  <button id="proposerDamayTukki-button4" ion-button color="positive" block>\n    Enregistrer\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/imac/.Trash/ADApp/src/pages/proposer-damay-tukki/proposer-damay-tukki.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProposerDamayTukkiPage);
    return ProposerDamayTukkiPage;
}());

//# sourceMappingURL=proposer-damay-tukki.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-cloud',template:/*ion-inline-start:"/Users/imac/.Trash/ADApp/src/pages/cloud/cloud.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cloud\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3"></ion-content>'/*ion-inline-end:"/Users/imac/.Trash/ADApp/src/pages/cloud/cloud.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CloudPage);
    return CloudPage;
}());

//# sourceMappingURL=cloud.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_allo_dakar_allo_dakar__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cloud_cloud__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_seet_voyage_seet_voyage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_trajet_trajet__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_proposer_damay_tukki_proposer_damay_tukki__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_AlloDakarApi_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(203);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_proposer_damay_tukki_proposer_damay_tukki__["a" /* ProposerDamayTukkiPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_trajet_trajet__["a" /* TrajetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__["a" /* ConnexionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/connexion/connexion.module#ConnexionPageModule', name: 'ConnexionPage', segment: 'connexion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trajet/trajet.module#TrajetPageModule', name: 'TrajetPage', segment: 'trajet', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cloud_cloud__["a" /* CloudPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_seet_voyage_seet_voyage__["a" /* SeetVoyagePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_proposer_damay_tukki_proposer_damay_tukki__["a" /* ProposerDamayTukkiPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_trajet_trajet__["a" /* TrajetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_connexion_connexion__["a" /* ConnexionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_AlloDakarApi_service__["a" /* AlloDakarService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cloud_cloud__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_allo_dakar_allo_dakar__ = __webpack_require__(79);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_allo_dakar_allo_dakar__["a" /* AlloDakarPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.username = localStorage.getItem("Username");
    }
    MyApp.prototype.goToCloud = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_cloud_cloud__["a" /* CloudPage */]);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/imac/.Trash/ADApp/src/app/app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu {{username}}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n      <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n    </div>\n    <div class="spacer" style="width:268px;height:30px;" id="menu-spacer2"></div>\n    <ion-list id="menu-list1">\n      <ion-item color="positive" menuClose="" on-click="goToAlloDakar()" id="menu-list-item1">\n        Home\n      </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToCloud()" id="menu-list-item3">\n        Les Evenements\n      </ion-item>\n      <ion-item color="positive" menuClose="" on-click="goToConnexion()" id="menu-list-item4">\n        Connexion\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToCart()" id="menu-list-item2">\n        Cart\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/imac/.Trash/ADApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-cart',template:/*ion-inline-start:"/Users/imac/.Trash/ADApp/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cart\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"/Users/imac/.Trash/ADApp/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlloDakarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_AlloDakar_Login__ = __webpack_require__(158);
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
    function AlloDakarService(http) {
        this.http = http;
        this.baseUrl = '/api/';
        this.serviceRegister = 'users/register';
        this.serviceLogin = 'users/login';
        this.serviceList = 'trajets';
        this.apikey = '8e230c9295f14208bb271d6aa4594fa0';
        this.token = '';
    }
    AlloDakarService.prototype.getTrajet = function () {
        var url = "" + this.baseUrl + this.serviceList;
        // const url = this.baseUrl;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('une erreur est survenue ' + error); });
    };
    AlloDakarService.prototype.RegisterNewUsers = function () {
        var url = "" + this.baseUrl + this.serviceRegister;
        //const url = this.baseUrl;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(url, __WEBPACK_IMPORTED_MODULE_5__models_AlloDakar_Login__["a" /* Login */])
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('une erreur est survenue ' + error); });
    };
    AlloDakarService.prototype.Connexion = function (Login) {
        var url = "" + this.baseUrl + this.serviceLogin;
        //const url = this.baseUrl;
        //let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        //    headers.append('Authorization', 'Bearer '+this.token);
        return this.http.post(url, Login)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('une erreur est survenue ' + error); });
    };
    AlloDakarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AlloDakarService);
    return AlloDakarService;
}());

//# sourceMappingURL=AlloDakarApi.service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlloDakarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seet_voyage_seet_voyage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proposer_damay_tukki_proposer_damay_tukki__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trajet_trajet__ = __webpack_require__(103);
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
        this.username = localStorage.getItem("Username");
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
            selector: 'page-allo-dakar',template:/*ion-inline-start:"/Users/imac/.Trash/ADApp/src/pages/allo-dakar/allo-dakar.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Allo Dakar {{username}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <img src="assets/img/PRWDgEkzSFWxO5gaB0ST_dacia-mcv.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <button id="alloDakar-button1" ion-button color="balanced" block style="font-style:italic;color:default;font-size:-5px;text-align:left;" on-click="goToProposerDamayTukki()">\n    Damay Tukki (Proposer)\n  </button>\n  <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n  <button id="alloDakar-button2" ion-button color="positive" block style="font-weight:500;font-style:italic;text-align:left;" on-click="goToSeetVoyage()">\n    Yobaléma (Rechercher)\n  </button>\n  <div class="spacer" style="width:300px;height:17px;" id="alloDakar-spacer3"></div>\n  <button id="alloDakar-button3" ion-button color="positive" block style="font-weight:500;font-style:italic;text-align:left;" on-click="goToTrajet()">\n    List Trajets\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/imac/.Trash/ADApp/src/pages/allo-dakar/allo-dakar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AlloDakarPage);
    return AlloDakarPage;
}());

//# sourceMappingURL=allo-dakar.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map