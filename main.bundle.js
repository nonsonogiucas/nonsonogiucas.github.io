webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var move_page_component_1 = __webpack_require__("./src/app/move-page/move-page.component.ts");
var routes = [
    {
        path: '',
        redirectTo: '/player',
        pathMatch: 'full'
    },
    {
        path: 'move/:moveId',
        component: move_page_component_1.MovePageComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ \"PAGE.HOME.TITLE\" | translate }}</h1>\n\n<div class=\"nav\">\n  <div class=\"lang\">\n    <button (click)=\"selectLanguage('it')\">IT</button>\n    <button (click)=\"selectLanguage('en')\">EN</button>\n  </div>\n  <a routerLink=\"player/intro\" routerLinkActive=\"active\">{{ \"PAGE.HOME.NAV.PLAYER\" | translate }}</a>\n  <a routerLink=\"master\" routerLinkActive=\"active\">{{ \"PAGE.HOME.NAV.GM\" | translate }}</a>\n  <!-- <span class=\"separator\">.</span> -->\n</div>\n\n<div class=\"main\">\n  <router-outlet></router-outlet>\n</div>\n\n<div class=\"footer\">\n  <div class=\"attribution\" [innerHTML]=\"'PAGE.HOME.ATTRIBUTION.DW' | translate\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var init_basic_moves_service_1 = __webpack_require__("./src/app/init-data/init-basic-moves.service.ts");
var core_2 = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
var init_tags_service_1 = __webpack_require__("./src/app/init-data/init-tags.service.ts");
var init_special_moves_service_1 = __webpack_require__("./src/app/init-data/init-special-moves.service.ts");
var init_fighter_class_service_1 = __webpack_require__("./src/app/init-data/init-fighter-class.service.ts");
var init_heritage_data_service_1 = __webpack_require__("./src/app/init-data/init-heritage-data.service.ts");
var init_gear_data_service_1 = __webpack_require__("./src/app/init-data/init-gear-data.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router, route, initTags, initGear, initBasicMoves, initSpecialMoves, initFighter, initHeritages) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.initTags = initTags;
        this.initGear = initGear;
        this.initBasicMoves = initBasicMoves;
        this.initSpecialMoves = initSpecialMoves;
        this.initFighter = initFighter;
        this.initHeritages = initHeritages;
        this.translate.setDefaultLang('en');
        this.translate.use('it');
    }
    AppComponent.prototype.selectLanguage = function (lang) {
        console.log("Select", lang);
        this.translate.use(lang);
    };
    AppComponent.prototype.ngOnInit = function () {
        console.debug("App component - ngOnInit");
        this.initTags.initData();
        this.initGear.initEquipment();
        this.initGear.initArmor();
        this.initGear.initWeapons();
        this.initBasicMoves.initData();
        this.initSpecialMoves.initData();
        this.initHeritages.initData();
        this.initFighter.initData();
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (route) {
            // let matches = route.url.match(/^\/([a-z]{2})\/.*/);
            // if(matches && matches.length > 1) {
            //   this.translate.use(matches[1]);
            // } else {
            //   this.translate.use(this.translate.getDefaultLang());
            // }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            router_1.Router,
            router_1.ActivatedRoute,
            init_tags_service_1.InitTagsService,
            init_gear_data_service_1.InitGearDataService,
            init_basic_moves_service_1.InitBasicMovesService,
            init_special_moves_service_1.InitSpecialMovesService,
            init_fighter_class_service_1.InitFighterClassService,
            init_heritage_data_service_1.InitHeritageDataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_2 = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
var http_loader_1 = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var player_module_1 = __webpack_require__("./src/app/player/player.module.ts");
var data_module_1 = __webpack_require__("./src/app/data/data.module.ts");
var init_basic_moves_service_1 = __webpack_require__("./src/app/init-data/init-basic-moves.service.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var move_page_component_1 = __webpack_require__("./src/app/move-page/move-page.component.ts");
var init_special_moves_service_1 = __webpack_require__("./src/app/init-data/init-special-moves.service.ts");
var init_tags_service_1 = __webpack_require__("./src/app/init-data/init-tags.service.ts");
var init_fighter_class_service_1 = __webpack_require__("./src/app/init-data/init-fighter-class.service.ts");
var init_heritage_data_service_1 = __webpack_require__("./src/app/init-data/init-heritage-data.service.ts");
var init_gear_data_service_1 = __webpack_require__("./src/app/init-data/init-gear-data.service.ts");
var master_module_1 = __webpack_require__("./src/app/master/master.module.ts");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                move_page_component_1.MovePageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                }),
                router_1.RouterModule.forRoot([], {
                    useHash: true,
                    enableTracing: false
                }),
                app_routing_module_1.AppRoutingModule,
                player_module_1.PlayerModule,
                data_module_1.DataModule,
                shared_module_1.SharedModule,
                master_module_1.MasterModule
            ],
            providers: [init_basic_moves_service_1.InitBasicMovesService, init_special_moves_service_1.InitSpecialMovesService, init_tags_service_1.InitTagsService, init_fighter_class_service_1.InitFighterClassService, init_heritage_data_service_1.InitHeritageDataService, init_gear_data_service_1.InitGearDataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/data/CharacterClass.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CharacterClass = /** @class */ (function () {
    function CharacterClass() {
    }
    CharacterClass.factory = function () { return null; };
    return CharacterClass;
}());
exports.CharacterClass = CharacterClass;
var StartingMove = /** @class */ (function () {
    function StartingMove() {
    }
    return StartingMove;
}());
exports.StartingMove = StartingMove;
var StartingMoveSelection = /** @class */ (function () {
    function StartingMoveSelection() {
    }
    return StartingMoveSelection;
}());
exports.StartingMoveSelection = StartingMoveSelection;
var StartingGear = /** @class */ (function () {
    function StartingGear() {
    }
    return StartingGear;
}());
exports.StartingGear = StartingGear;
var StartingGearSelection = /** @class */ (function () {
    function StartingGearSelection() {
    }
    return StartingGearSelection;
}());
exports.StartingGearSelection = StartingGearSelection;


/***/ }),

/***/ "./src/app/data/FighterClass.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterClass_1 = __webpack_require__("./src/app/data/CharacterClass.ts");
var Fighter = /** @class */ (function (_super) {
    __extends(Fighter, _super);
    function Fighter() {
        var _this = _super.call(this) || this;
        _this.slug = "fighter";
        _this.className = "CHARACTER.CLASS.FIGHTER";
        _this.aspects = [
            { subject: "CHARACTER.ASPECT.EYES", adjective: "" },
            { subject: "CHARACTER.ASPECT.HAIR", adjective: "" },
            { subject: "CHARACTER.ASPECT.SKIN", adjective: "" },
            { subject: "CHARACTER.ASPECT.BODY", adjective: "" }
        ];
        _this.load = 12;
        _this.currunteHP = _this.maximumHP = 24;
        _this.damageDie = 10;
        _this.damageMod = +2;
        _this.startingMoves = [];
        _this.advancedMoves = [];
        _this.startingGear = [];
        _this.XP = 0;
        _this.level = 1;
        _this.STR = 0;
        _this.DEX = 0;
        _this.CON = 0;
        _this.INT = 0;
        _this.WIS = 0;
        _this.CHA = 0;
        _this.armor = 0;
        _this.availableMoves = [];
        return _this;
    }
    Fighter.factory = function () {
        return Fighter.factoryMethod();
    };
    return Fighter;
}(CharacterClass_1.CharacterClass));
exports.Fighter = Fighter;


/***/ }),

/***/ "./src/app/data/ObjectCache.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectCache = /** @class */ (function () {
    function ObjectCache() {
        this.autoincrement = 0;
        this.elements = {};
    }
    ObjectCache.prototype.insert = function (o) {
        if (o.hasOwnProperty("_id")) {
            throw "Object with id " + o._id + " already exists in collection";
        }
        o._id = this.autoincrement++;
        this.elements[o._id] = o;
        return o;
    };
    ObjectCache.prototype.get = function (id) {
        return this.elements[id];
    };
    ObjectCache.prototype.findAll = function (filter) {
        var resultSet = [];
        for (var id in this.elements) {
            var o = this.elements[id];
            if (filter(o)) {
                resultSet.push(o);
            }
        }
        return resultSet;
    };
    return ObjectCache;
}());
exports.ObjectCache = ObjectCache;


/***/ }),

/***/ "./src/app/data/class-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ClassDataService = /** @class */ (function () {
    function ClassDataService() {
    }
    ClassDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ClassDataService);
    return ClassDataService;
}());
exports.ClassDataService = ClassDataService;


/***/ }),

/***/ "./src/app/data/data.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var move_data_service_1 = __webpack_require__("./src/app/data/move-data.service.ts");
var tag_data_service_1 = __webpack_require__("./src/app/data/tag-data.service.ts");
var class_data_service_1 = __webpack_require__("./src/app/data/class-data.service.ts");
var heritage_data_service_1 = __webpack_require__("./src/app/data/heritage-data.service.ts");
var gear_data_service_1 = __webpack_require__("./src/app/data/gear-data.service.ts");
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [],
            providers: [move_data_service_1.MoveDataService, tag_data_service_1.TagDataService, class_data_service_1.ClassDataService, heritage_data_service_1.HeritageDataService, gear_data_service_1.GearDataService]
        })
    ], DataModule);
    return DataModule;
}());
exports.DataModule = DataModule;


/***/ }),

/***/ "./src/app/data/gear-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ObjectCache_1 = __webpack_require__("./src/app/data/ObjectCache.ts");
var GearDataService = /** @class */ (function (_super) {
    __extends(GearDataService, _super);
    function GearDataService() {
        return _super.call(this) || this;
    }
    GearDataService.prototype.searchByName = function (namePartial) {
        return this.findAll(function (item) { return item.name.indexOf(namePartial) > -1; });
    };
    GearDataService.prototype.findOneBySlug = function (slug) {
        var found = this.findAll(function (item) { return item.slug === slug; });
        return found.length ? found[0] : null;
    };
    GearDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GearDataService);
    return GearDataService;
}(ObjectCache_1.ObjectCache));
exports.GearDataService = GearDataService;


/***/ }),

/***/ "./src/app/data/heritage-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ObjectCache_1 = __webpack_require__("./src/app/data/ObjectCache.ts");
var HeritageDataService = /** @class */ (function (_super) {
    __extends(HeritageDataService, _super);
    function HeritageDataService() {
        return _super.call(this) || this;
    }
    HeritageDataService.prototype.findByName = function (name) {
        return this.findAll(function (h) { return h.name == name; });
    };
    HeritageDataService.prototype.searchByName = function (namePartial) {
        return this.findAll(function (h) { return h.name.indexOf(namePartial) > -1; });
    };
    HeritageDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], HeritageDataService);
    return HeritageDataService;
}(ObjectCache_1.ObjectCache));
exports.HeritageDataService = HeritageDataService;


/***/ }),

/***/ "./src/app/data/move-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ObjectCache_1 = __webpack_require__("./src/app/data/ObjectCache.ts");
var MoveDataService = /** @class */ (function (_super) {
    __extends(MoveDataService, _super);
    function MoveDataService() {
        return _super.call(this) || this;
    }
    MoveDataService.prototype.findOneBySlug = function (slug) {
        var result = this.findAll(function (move) { return move.slug == slug; });
        return result.length ? result[0] : null;
    };
    MoveDataService.prototype.findBySlug = function (slug) {
        return this.findAll(function (move) { return move.slug.indexOf(slug) == 0; });
    };
    MoveDataService.prototype.findByName = function (name) {
        return this.findAll(function (move) { return move.name == name; });
    };
    MoveDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MoveDataService);
    return MoveDataService;
}(ObjectCache_1.ObjectCache));
exports.MoveDataService = MoveDataService;


/***/ }),

/***/ "./src/app/data/tag-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ObjectCache_1 = __webpack_require__("./src/app/data/ObjectCache.ts");
var TagDataService = /** @class */ (function (_super) {
    __extends(TagDataService, _super);
    function TagDataService() {
        return _super.call(this) || this;
    }
    TagDataService.prototype.findByDomain = function (domain) {
        return this.findAll(function (tag) { return tag.domain == domain; });
    };
    TagDataService.prototype.findByName = function (name) {
        return this.findAll(function (tag) { return tag.name == name; });
    };
    TagDataService.prototype.findOneByName = function (name) {
        return this.findAll(function (tag) { return tag.name == name; })[0];
    };
    TagDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TagDataService);
    return TagDataService;
}(ObjectCache_1.ObjectCache));
exports.TagDataService = TagDataService;


/***/ }),

/***/ "./src/app/init-data/init-basic-moves.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var tag_data_service_1 = __webpack_require__("./src/app/data/tag-data.service.ts");
var move_data_service_1 = __webpack_require__("./src/app/data/move-data.service.ts");
var InitBasicMovesService = /** @class */ (function () {
    function InitBasicMovesService(tagData, moveData) {
        this.tagData = tagData;
        this.moveData = moveData;
    }
    InitBasicMovesService.prototype.initData = function () {
        var basicMoveTag = this.tagData.findOneByName("TAG.BASEMOVE");
        var playerMoveTag = this.tagData.findOneByName("TAG.PLAYERMOVE");
        var unchainedTag = this.tagData.findOneByName("TAG.UNCHAINED");
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag, unchainedTag],
            slug: "advantage",
            i18nPrefix: "MOVE.ADVANTAGE.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT"
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag, unchainedTag],
            slug: "disadvantage",
            i18nPrefix: "MOVE.DISADVANTAGE.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT"
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "discern_realities",
            i18nPrefix: "MOVE.DISCERN_REALITIES.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "CHARACTER.ATTRIBUTE.WIS",
            effect: "EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            details: "DETAILS",
            comments: [
                "COMMENT.1",
                "COMMENT.2",
                "COMMENT.3",
                "COMMENT.4"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "spout_lore",
            i18nPrefix: "MOVE.SPOUT_LORE.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "CHARACTER.ATTRIBUTE.INT",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            details: "DETAILS",
            comments: [
                "COMMENT.1",
                "COMMENT.2"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "defy_danger",
            i18nPrefix: "MOVE.DEFY_DANGER.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            comments: [
                "COMMENT.1"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "aid_or_interfere",
            i18nPrefix: "MOVE.AID_OR_INTERFERE.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "MOVE.AID_OR_INTERFERE.ROLL_MODIFIER",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            comments: [
                "COMMENT.1"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag, unchainedTag],
            slug: "assist",
            i18nPrefix: "MOVE.ASSIST.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            details: "DETAILS",
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "parley",
            i18nPrefix: "MOVE.PARLEY.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "CHARACTER.ATTRIBUTE.CHA",
            effect: "EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            comments: [
                "COMMENT.1",
                "COMMENT.2"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "hack_and_slash",
            i18nPrefix: "MOVE.HACK_AND_SLASH.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "CHARACTER.ATTRIBUTE.STR",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            comments: [
                "COMMENT.1",
                "COMMENT.2",
                "COMMENT.3",
                "COMMENT.4"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "volley",
            i18nPrefix: "MOVE.VOLLEY.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "CHARACTER.ATTRIBUTE.DEX",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            details: "DETAILS",
            comments: [
                "COMMENT.1",
                "COMMENT.2"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "defend",
            i18nPrefix: "MOVE.DEFEND.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "CHARACTER.ATTRIBUTE.CON",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            details: "DETAILS",
            comments: [
                "COMMENT.1",
                "COMMENT.2"
            ]
        });
    };
    InitBasicMovesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [tag_data_service_1.TagDataService,
            move_data_service_1.MoveDataService])
    ], InitBasicMovesService);
    return InitBasicMovesService;
}());
exports.InitBasicMovesService = InitBasicMovesService;


/***/ }),

/***/ "./src/app/init-data/init-fighter-class.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FighterClass_1 = __webpack_require__("./src/app/data/FighterClass.ts");
var tag_data_service_1 = __webpack_require__("./src/app/data/tag-data.service.ts");
var move_data_service_1 = __webpack_require__("./src/app/data/move-data.service.ts");
var gear_data_service_1 = __webpack_require__("./src/app/data/gear-data.service.ts");
var InitFighterClassService = /** @class */ (function () {
    function InitFighterClassService(tagData, moveData, gearData) {
        this.tagData = tagData;
        this.moveData = moveData;
        this.gearData = gearData;
    }
    InitFighterClassService.prototype.initData = function () {
        var _this = this;
        var playerMoveTag = this.tagData.findOneByName("TAG.PLAYERMOVE");
        var fighterStartingMoveTag = this.tagData.findOneByName("TAG.FIGHTER_STARTING");
        var fighterAdvancedMoveTag = this.tagData.findOneByName("TAG.FIGHTER_ADVANCED");
        FighterClass_1.Fighter.factoryMethod = function () {
            var f = new FighterClass_1.Fighter();
            f.startingGear.push({
                title: "choose",
                arity: 1,
                options: [
                    {
                        selected: false,
                        items: [
                            { item: _this.gearData.findOneBySlug("armor_chain"), size: 1 },
                            { item: _this.gearData.findOneBySlug("shield"), size: 2 }
                        ]
                    },
                    {
                        selected: false,
                        items: [
                            { item: _this.gearData.findOneBySlug("armor_plate"), size: 1 }
                        ]
                    }
                ]
            });
            f.startingGear.push({
                items: [
                    { item: _this.gearData.findOneBySlug("armor_leather"), size: 1 },
                    { item: _this.gearData.findOneBySlug("armor_chain"), size: 1 },
                    { item: _this.gearData.findOneBySlug("armor_scale"), size: 1 }
                ]
            });
            f.startingMoves.push({
                move: _this.moveData.insert({
                    slug: "bend_bars_lift_gates",
                    tags: [playerMoveTag, fighterStartingMoveTag],
                    i18nPrefix: "MOVE.CLASS.FIGHTER.STARTING.BBLG.",
                    name: "NAME",
                    trigger: "TRIGGER",
                    rollModifier: "CHARACTER.ATTRIBUTE.STR",
                    rollResultBreakdown: [
                        { range: "10+", effect: "RES.10+" },
                        { range: "7-9", effect: "RES.7-9" }
                    ],
                    details: "DETAILS"
                })
            });
            f.startingMoves.push({
                move: _this.moveData.insert({
                    slug: "armored",
                    tags: [playerMoveTag, fighterStartingMoveTag],
                    i18nPrefix: "MOVE.CLASS.FIGHTER.STARTING.ARMORED.",
                    name: "NAME",
                    trigger: "TRIGGER",
                    effect: "EFFECT"
                })
            });
            f.startingMoves.push({
                move: _this.moveData.insert({
                    slug: "signature_weapon",
                    tags: [playerMoveTag, fighterStartingMoveTag],
                    i18nPrefix: "MOVE.CLASS.FIGHTER.STARTING.SIGNATURE_WEAPON.",
                    name: "NAME",
                    effect: "EFFECT",
                    details: "DETAILS"
                })
            });
            return f;
        };
        console.debug("Fighter Class initialized");
    };
    InitFighterClassService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [tag_data_service_1.TagDataService,
            move_data_service_1.MoveDataService,
            gear_data_service_1.GearDataService])
    ], InitFighterClassService);
    return InitFighterClassService;
}());
exports.InitFighterClassService = InitFighterClassService;


/***/ }),

/***/ "./src/app/init-data/init-gear-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var tag_data_service_1 = __webpack_require__("./src/app/data/tag-data.service.ts");
var gear_data_service_1 = __webpack_require__("./src/app/data/gear-data.service.ts");
var InitGearDataService = /** @class */ (function () {
    function InitGearDataService(tagDataService, gearDataService) {
        this.tagDataService = tagDataService;
        this.gearDataService = gearDataService;
        this._init = false;
    }
    InitGearDataService.prototype.init = function () {
        if (!this._init) {
            this.coinTag = this.tagDataService.findOneByName("TAG.GEAR.COIN");
            this.weightTag = this.tagDataService.findOneByName("TAG.GEAR.WEIGHT");
            this.piercingTag = this.tagDataService.findOneByName("TAG.GEAR.PIERCING");
            this.ammoTag = this.tagDataService.findOneByName("TAG.GEAR.AMMO");
            this.damageTag = this.tagDataService.findOneByName("TAG.GEAR.DAMAGE");
            this.usesTag = this.tagDataService.findOneByName("TAG.GEAR.USES");
            this.armorTag = this.tagDataService.findOneByName("TAG.GEAR.ARMOR");
        }
    };
    InitGearDataService.prototype._valueTag = function (value) {
        return {
            name: "",
            domain: "",
            value: "" + value
        };
    };
    InitGearDataService.prototype._weight = function (w) {
        return Object.assign(this._valueTag(w), this.weightTag);
    };
    InitGearDataService.prototype._coins = function (c) {
        return Object.assign(this._valueTag(c), this.coinTag);
    };
    InitGearDataService.prototype._piercing = function (p) {
        return Object.assign(this._valueTag(p), this.piercingTag);
    };
    InitGearDataService.prototype._ammo = function (a) {
        return Object.assign(this._valueTag(a), this.ammoTag);
    };
    InitGearDataService.prototype._damage = function (d) {
        return Object.assign(this._valueTag(d), this.damageTag);
    };
    InitGearDataService.prototype._uses = function (u) {
        return Object.assign(this._valueTag(u), this.usesTag);
    };
    InitGearDataService.prototype._armor = function (a) {
        return Object.assign(this._valueTag(a), this.armorTag);
    };
    InitGearDataService.prototype.initEquipment = function () {
        this.init();
        var awkward = this.tagDataService.findOneByName("TAG.GEAR.AWKWARD");
        var dangerous = this.tagDataService.findOneByName("TAG.GEAR.DANGEROUS");
        var slow = this.tagDataService.findOneByName("TAG.GEAR.SLOW");
        var applied = this.tagDataService.findOneByName("TAG.GEAR.APPLIED");
        var touch = this.tagDataService.findOneByName("TAG.GEAR.TOUCH");
        var ration = this.tagDataService.findOneByName("TAG.GEAR.RATION");
        var equipmentItem = this.tagDataService.findOneByName("TAG.GEAR.EQUIPMENT_ITEM");
        this.gearDataService.insert({
            slug: "shield",
            name: "GEAR.ADV_EQP.NAME",
            uses: 5,
            description: "GEAR.ADV_EQP.DESC",
            tags: [
                equipmentItem,
                this._uses(5),
                this._weight(1),
                this._coins(20)
            ]
        });
    };
    InitGearDataService.prototype.initArmor = function () {
        this.init();
        var worn = this.tagDataService.findOneByName("TAG.GEAR.WORN");
        var armor = this.tagDataService.findOneByName("TAG.GEAR.ARMOR");
        var weight = this.tagDataService.findOneByName("TAG.GEAR.WEIGHT");
        var coin = this.tagDataService.findOneByName("TAG.GEAR.COIN");
        var clumsy = this.tagDataService.findOneByName("TAG.GEAR.CLUMSY");
        var armorItem = this.tagDataService.findOneByName("TAG.GEAR.ARMOR_ITEM");
        this.gearDataService.insert({
            slug: "armor_leather",
            name: "GEAR.ARMOR_LEATHER.NAME",
            tags: [
                armorItem,
                worn,
                this._armor(1),
                this._weight(1),
                this._coins(10)
            ]
        });
        this.gearDataService.insert({
            slug: "armor_chain",
            name: "GEAR.ARMOR_CHAIN.NAME",
            tags: [
                armorItem,
                worn,
                this._armor(1),
                this._weight(1),
                this._coins(10)
            ]
        });
        this.gearDataService.insert({
            slug: "armor_scale",
            name: "GEAR.ARMOR_SCALE.NAME",
            tags: [
                armorItem,
                worn,
                clumsy,
                this._armor(2),
                this._weight(3),
                this._coins(50)
            ]
        });
        this.gearDataService.insert({
            slug: "armor_plate",
            name: "GEAR.ARMOR_PLATE.NAME",
            tags: [
                armorItem,
                worn,
                clumsy,
                this._armor(3),
                this._weight(4),
                this._coins(350)
            ]
        });
        this.gearDataService.insert({
            slug: "shield",
            name: "GEAR.SHIELD.NAME",
            tags: [
                armorItem,
                this._armor(1),
                this._weight(2),
                this._coins(15)
            ]
        });
    };
    InitGearDataService.prototype.initWeapons = function () {
        this.init();
        var reachHand = this.tagDataService.findOneByName("TAG.GEAR.REACH_HAND");
        var reachClose = this.tagDataService.findOneByName("TAG.GEAR.REACH_CLOSE");
        var reachLong = this.tagDataService.findOneByName("TAG.GEAR.REACH_LONG");
        var reachNear = this.tagDataService.findOneByName("TAG.GEAR.REACH_NEAR");
        var reachFar = this.tagDataService.findOneByName("TAG.GEAR.REACH_FAR");
        var piercing = this.tagDataService.findOneByName("TAG.GEAR.PIERCING");
        var precise = this.tagDataService.findOneByName("TAG.GEAR.PRECISE");
        var messy = this.tagDataService.findOneByName("TAG.GEAR.MESSY");
        var forceful = this.tagDataService.findOneByName("TAG.GEAR.FORCEFUL");
        var awkward = this.tagDataService.findOneByName("TAG.GEAR.AWKWARD");
        var reload = this.tagDataService.findOneByName("TAG.GEAR.RELOAD");
        var twoHanded = this.tagDataService.findOneByName("TAG.GEAR.TWOHANDED");
        var thrown = this.tagDataService.findOneByName("TAG.GEAR.THROWN");
        var weaponItem = this.tagDataService.findOneByName("TAG.GEAR.WEAPON_ITEM");
        this.gearDataService.insert({
            slug: "bow_rugged",
            name: "GEAR.BOW_RUGGED.NAME",
            tags: [
                weaponItem,
                reachNear,
                this._coins(15),
                this._weight(2)
            ]
        });
        this.gearDataService.insert({
            slug: "bow_fine",
            name: "GEAR.BOW_FINE.NAME",
            tags: [
                weaponItem,
                reachNear,
                reachFar,
                this._coins(60),
                this._weight(2)
            ]
        });
        this.gearDataService.insert({
            slug: "bow_hunter",
            name: "GEAR.BOW_HUNTER.NAME",
            tags: [
                weaponItem,
                reachNear,
                reachFar,
                this._coins(100),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "crossbow",
            name: "GEAR.CROSSBOW.NAME",
            tags: [
                weaponItem,
                reachNear,
                reload,
                this._coins(35),
                this._weight(3),
                this._piercing(1)
            ]
        });
        this.gearDataService.insert({
            slug: "arrows",
            name: "GEAR.ARROWS.NAME",
            tags: [
                weaponItem,
                this._ammo(3),
                this._coins(2),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "arrows_elven",
            name: "GEAR.ARROWS_ELVEN.NAME",
            tags: [
                weaponItem,
                this._ammo(4),
                this._coins(20),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "club",
            name: "GEAR.CLUB.NAME",
            tags: [
                weaponItem,
                reachClose,
                this._coins(1),
                this._weight(2)
            ]
        });
        this.gearDataService.insert({
            slug: "staff",
            name: "GEAR.STAFF.NAME",
            tags: [
                weaponItem,
                reachClose,
                twoHanded,
                this._coins(1),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "dagger",
            name: "GEAR.DAGGER.NAME",
            tags: [
                weaponItem,
                reachHand,
                this._coins(2),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "dagger_throwing",
            name: "GEAR.DAGGER_THROWING.NAME",
            tags: [
                weaponItem,
                thrown,
                reachNear,
                this._coins(2),
                this._weight(0)
            ]
        });
        this.gearDataService.insert({
            slug: "sword_short",
            name: "GEAR.SWORD_SHORT.NAME",
            tags: [
                weaponItem,
                reachClose,
                this._coins(8),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "axe_hand",
            name: "GEAR.AXE_HAND.NAME",
            tags: [
                weaponItem,
                reachClose,
                this._coins(8),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "mace",
            name: "GEAR.MACE.NAME",
            tags: [
                weaponItem,
                reachClose,
                this._coins(8),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "spear",
            name: "GEAR.SPEAR.NAME",
            tags: [
                weaponItem,
                reachLong,
                thrown,
                reachNear,
                this._coins(5),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "sword_long",
            name: "GEAR.SWORD_LONG.NAME",
            tags: [
                weaponItem,
                reachClose,
                this._damage(1),
                this._coins(15),
                this._weight(2)
            ]
        });
        this.gearDataService.insert({
            slug: "axe_battle",
            name: "GEAR.AXE_BATTLE.NAME",
            tags: [
                weaponItem,
                reachClose,
                this._damage(1),
                this._coins(15),
                this._weight(2)
            ]
        });
        this.gearDataService.insert({
            slug: "flail",
            name: "GEAR.FLAIL.NAME",
            tags: [
                weaponItem,
                reachClose,
                this._damage(1),
                this._coins(15),
                this._weight(2)
            ]
        });
        this.gearDataService.insert({
            slug: "halberd",
            name: "GEAR.HALBERD.NAME",
            tags: [
                weaponItem,
                reachLong,
                twoHanded,
                this._damage(1),
                this._coins(9),
                this._weight(2)
            ]
        });
        this.gearDataService.insert({
            slug: "rapier",
            name: "GEAR.RAPIER.NAME",
            tags: [
                weaponItem,
                reachClose,
                precise,
                this._coins(25),
                this._weight(1)
            ]
        });
        this.gearDataService.insert({
            slug: "estoc",
            name: "GEAR.ESTOC.NAME",
            tags: [
                weaponItem,
                reachClose,
                this._piercing(2),
                this._coins(50),
                this._weight(2)
            ]
        });
    };
    InitGearDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [tag_data_service_1.TagDataService,
            gear_data_service_1.GearDataService])
    ], InitGearDataService);
    return InitGearDataService;
}());
exports.InitGearDataService = InitGearDataService;


/***/ }),

/***/ "./src/app/init-data/init-heritage-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var heritage_data_service_1 = __webpack_require__("./src/app/data/heritage-data.service.ts");
var move_data_service_1 = __webpack_require__("./src/app/data/move-data.service.ts");
var tag_data_service_1 = __webpack_require__("./src/app/data/tag-data.service.ts");
var InitHeritageDataService = /** @class */ (function () {
    function InitHeritageDataService(heritageDataService, moveDataService, tagDataService) {
        this.heritageDataService = heritageDataService;
        this.moveDataService = moveDataService;
        this.tagDataService = tagDataService;
    }
    InitHeritageDataService.prototype.initData = function () {
        var heritageMoveTag = this.tagDataService.findOneByName("TAG.HERITAGEMOVE");
        // const playerMoveTag = this.tagDataService.findOneByName("TAG.PLAYERMOVE");
        this.heritageDataService.insert({
            name: "MOVE.HERITAGE.FOREST_ELF.NAME",
            moves: [
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "forest_elf_blend",
                    i18nPrefix: "MOVE.HERITAGE.FOREST_ELF.",
                    name: "BLEND"
                }),
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "forest_elf_balance",
                    i18nPrefix: "MOVE.HERITAGE.FOREST_ELF.",
                    name: "BALANCE"
                })
            ]
        });
        this.heritageDataService.insert({
            name: "MOVE.HERITAGE.MOUNTAIN_DWARF.NAME",
            moves: [
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "mountain_dwarf_mason",
                    i18nPrefix: "MOVE.HERITAGE.MOUNTAIN_DWARF.",
                    name: "MASON"
                }),
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "mountain_dwarf_stance",
                    i18nPrefix: "MOVE.HERITAGE.MOUNTAIN_DWARF.",
                    name: "STANCE"
                })
            ]
        });
        this.heritageDataService.insert({
            name: "MOVE.HERITAGE.COUNTRYSIDE_HALFLING.NAME",
            moves: [
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "countryside_halfling_avoid",
                    i18nPrefix: "MOVE.HERITAGE.COUNTRYSIDE_HALFLING.",
                    name: "AVOID"
                }),
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "countryside_halfling_throw",
                    i18nPrefix: "MOVE.HERITAGE.COUNTRYSIDE_HALFLING.",
                    name: "THROW"
                })
            ]
        });
        this.heritageDataService.insert({
            name: "MOVE.HERITAGE.HALF_ORC.NAME",
            moves: [
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "half_orc_fearful",
                    i18nPrefix: "MOVE.HERITAGE.HALF_ORC.",
                    name: "FEARFUL"
                }),
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "half_orc_fittest",
                    i18nPrefix: "MOVE.HERITAGE.HALF_ORC.",
                    name: "FITTEST"
                })
            ]
        });
        this.heritageDataService.insert({
            name: "MOVE.HERITAGE.HEDGE_KNIGHT.NAME",
            moves: [
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "hedge_knight_repairs",
                    i18nPrefix: "MOVE.HERITAGE.HEDGE_KNIGHT.",
                    name: "REPAIRS"
                }),
                this.moveDataService.insert({
                    tags: [heritageMoveTag],
                    slug: "hedge_knight_inspire",
                    i18nPrefix: "MOVE.HERITAGE.HEDGE_KNIGHT.",
                    name: "INSPIRE"
                })
            ]
        });
    };
    InitHeritageDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [heritage_data_service_1.HeritageDataService,
            move_data_service_1.MoveDataService,
            tag_data_service_1.TagDataService])
    ], InitHeritageDataService);
    return InitHeritageDataService;
}());
exports.InitHeritageDataService = InitHeritageDataService;


/***/ }),

/***/ "./src/app/init-data/init-special-moves.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var tag_data_service_1 = __webpack_require__("./src/app/data/tag-data.service.ts");
var move_data_service_1 = __webpack_require__("./src/app/data/move-data.service.ts");
var InitSpecialMovesService = /** @class */ (function () {
    function InitSpecialMovesService(tagData, moveData) {
        this.tagData = tagData;
        this.moveData = moveData;
    }
    InitSpecialMovesService.prototype.initData = function () {
        var specialMoveTag = this.tagData.findOneByName("TAG.SPECIALMOVE");
        var playerMoveTag = this.tagData.findOneByName("TAG.PLAYERMOVE");
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "last_breath",
            i18nPrefix: "MOVE.LAST_BREATH.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "CHARACTER.ATTRIBUTE.CON",
            effect: "EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" },
                { range: "6-", effect: "RES.6-" }
            ],
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "encumbrance",
            i18nPrefix: "MOVE.ENCUMBRANCE.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT",
            details: "DETAILS",
            rollResultBreakdown: [],
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "make_camp",
            i18nPrefix: "MOVE.MAKE_CAMP.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT",
            rollResultBreakdown: [],
            comments: [
                "COMMENT.1",
                "COMMENT.2"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "take_watch",
            i18nPrefix: "MOVE.TAKE_WATCH.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "CHARACTER.ATTRIBUTE.WIS",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" },
                { range: "6-", effect: "RES.6-" }
            ],
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "UAPJ",
            i18nPrefix: "MOVE.UAPJ.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT",
            rollModifier: "CHARACTER.ATTRIBUTE.WIS",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            comments: [
                "COMMENT.1",
                "COMMENT.2",
                "COMMENT.3"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "CAROUSE",
            i18nPrefix: "MOVE.CAROUSE.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT",
            rollModifier: "MOVE.CAROUSE.ROLL_MODIFIER",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" },
                { range: "6-", effect: "RES.6-" }
            ],
            details: "DETAILS",
            comments: [
                "COMMENT.1",
                "COMMENT.2",
                "COMMENT.3"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "SUPPLY",
            i18nPrefix: "MOVE.SUPPLY.",
            name: "NAME",
            trigger: "TRIGGER",
            rollModifier: "CHARACTER.ATTRIBUTE.CHA",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            details: "DETAILS"
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "RECOVER",
            i18nPrefix: "MOVE.RECOVER.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT"
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "BOLSTER",
            i18nPrefix: "MOVE.BOLSTER.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT",
            details: "DETAILS"
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "RECRUIT",
            i18nPrefix: "MOVE.RECRUIT.",
            name: "NAME",
            trigger: "TRIGGER",
            effect: "EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" },
                { range: "6-", effect: "RES.6-" }
            ],
            details: "DETAILS",
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "OUTSTANDING_WARRANTS",
            i18nPrefix: "MOVE.OUTSTANDING_WARRANTS.",
            name: "NAME",
            trigger: "TRIGGER",
            rollResultBreakdown: [
                { range: "10+", effect: "RES.10+" },
                { range: "7-9", effect: "RES.7-9" }
            ],
            details: "DETAILS",
            comments: []
        });
    };
    InitSpecialMovesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [tag_data_service_1.TagDataService,
            move_data_service_1.MoveDataService])
    ], InitSpecialMovesService);
    return InitSpecialMovesService;
}());
exports.InitSpecialMovesService = InitSpecialMovesService;


/***/ }),

/***/ "./src/app/init-data/init-tags.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var tag_data_service_1 = __webpack_require__("./src/app/data/tag-data.service.ts");
var InitTagsService = /** @class */ (function () {
    function InitTagsService(tagData) {
        this.tagData = tagData;
    }
    InitTagsService.prototype.initData = function () {
        this.tagData.insert({
            domain: "MOVE_TYPE",
            name: "TAG.BASEMOVE"
        });
        this.tagData.insert({
            domain: "MOVE_TYPE",
            name: "TAG.SPECIALMOVE"
        });
        this.tagData.insert({
            domain: "MOVE_TYPE",
            name: "TAG.PLAYERMOVE"
        });
        this.tagData.insert({
            domain: "MOVE_TYPE",
            name: "TAG.UNCHAINED"
        });
        this.tagData.insert({
            domain: "MOVE_TYPE",
            name: "TAG.HERITAGEMOVE"
        });
        this.tagData.insert({
            domain: "MOVE_TYPE",
            name: "TAG.FIGHTER_STARTING"
        });
        this.tagData.insert({
            domain: "MOVE_TYPE",
            name: "TAG.FIGHTER_ADVANCED"
        });
        this.tagData.insert({
            domain: "GEAR_TYPE",
            name: "TAG.GEAR.ARMOR_ITEM"
        });
        this.tagData.insert({
            domain: "GEAR_TYPE",
            name: "TAG.GEAR.EQUIPMENT_ITEM"
        });
        this.tagData.insert({
            domain: "GEAR_TYPE",
            name: "TAG.GEAR.WEAPON_ITEM"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.ARMOR"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.WORN"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.WEIGHT"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.COIN"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.CLUMSY"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.APPLIED"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.AWKWARD"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.DANGEROUS"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.RATION"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.SLOW"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.TOUCH"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.TWOHANDED"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.RELOAD"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.AMMO"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.THROWN"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.PRECISE"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.REACH_NEAR"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.REACH_FAR"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.REACH_HAND"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.REACH_CLOSE"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.REACH_LONG"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.DAMAGE"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.PIERCING"
        });
        this.tagData.insert({
            domain: "GEAR",
            name: "TAG.GEAR.USES"
        });
    };
    InitTagsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [tag_data_service_1.TagDataService])
    ], InitTagsService);
    return InitTagsService;
}());
exports.InitTagsService = InitTagsService;


/***/ }),

/***/ "./src/app/master/generators/basic-generators/basic-generators.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Cryptic Quote</h4>\n<div class=\"list\">\n  <button (click)=\"rollCrypticQuotes()\">RE-ROLL!</button>\n  <div class=\"rolls\">\n    <div innerHTML=\"{{crypticQuote}}\"></div>\n  </div>\n  <button (click)=\"rollCrypticQuotes()\">RE-ROLL!</button>\n</div>\n\n<h4>Random Duration</h4>\n<div class=\"list\">\n  <button (click)=\"rollDurations()\">RE-ROLL!</button>\n  <div class=\"rolls\">\n    <div *ngFor=\"let roll of durationRolls; let even = even\" [ngClass]=\"{'even': even}\">{{roll}}</div>\n  </div>\n  <button (click)=\"rollDurations()\">RE-ROLL!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/master/generators/basic-generators/basic-generators.component.scss":
/***/ (function(module, exports) {

module.exports = ".list {\n  -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.75);\n  padding: 15px;\n  margin-bottom: 15px; }\n  .list .even {\n    background: rgba(0, 0, 0, 0.1); }\n  .list .rolls {\n    margin: 10px 0; }\n  .list .rolls > div {\n      padding: 3px 0; }\n"

/***/ }),

/***/ "./src/app/master/generators/basic-generators/basic-generators.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BasicTables_class_1 = __webpack_require__("./src/app/master/generators/tables/BasicTables.class.ts");
var random_tables_service_1 = __webpack_require__("./src/app/master/generators/tables/random-tables.service.ts");
var QuotesTables_class_1 = __webpack_require__("./src/app/master/generators/tables/QuotesTables.class.ts");
var BasicGeneratorsComponent = /** @class */ (function () {
    function BasicGeneratorsComponent() {
    }
    BasicGeneratorsComponent.prototype.ngOnInit = function () {
        this.rollDurations();
    };
    BasicGeneratorsComponent.prototype.rollDurations = function () {
        var durationTable = BasicTables_class_1.BasicTables.DURATION;
        this.durationRolls = [];
        for (var _i = 0, durationTable_1 = durationTable; _i < durationTable_1.length; _i++) {
            var entry = durationTable_1[_i];
            this.durationRolls.push(random_tables_service_1.RandomTablesService.eval(entry[1], {
                "@tables": BasicTables_class_1.BasicTables
            }));
        }
    };
    BasicGeneratorsComponent.prototype.rollCrypticQuotes = function () {
        var crypticQuote_1 = QuotesTables_class_1.QuotesTables.QUOTE[0][1];
        this.crypticQuote = random_tables_service_1.RandomTablesService.eval(crypticQuote_1, {
            "@tables": QuotesTables_class_1.QuotesTables
        });
    };
    BasicGeneratorsComponent = __decorate([
        core_1.Component({
            selector: 'app-basic-generators',
            template: __webpack_require__("./src/app/master/generators/basic-generators/basic-generators.component.html"),
            styles: [__webpack_require__("./src/app/master/generators/basic-generators/basic-generators.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicGeneratorsComponent);
    return BasicGeneratorsComponent;
}());
exports.BasicGeneratorsComponent = BasicGeneratorsComponent;


/***/ }),

/***/ "./src/app/master/generators/generator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"generatorsLayout\">\n  <div class=\"nav\">\n    <a routerLink=\"test\" routerLinkActive=\"active\">Examples</a>\n    <a routerLink=\"basic\" routerLinkActive=\"active\">Basic Tables</a>\n  </div>\n  <div class=\"main\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/generators/generator.component.scss":
/***/ (function(module, exports) {

module.exports = ".generatorsLayout .nav {\n  margin: 5px 0 15px;\n  background: black;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/master/generators/generator.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent() {
    }
    GeneratorComponent.prototype.ngOnInit = function () {
    };
    GeneratorComponent = __decorate([
        core_1.Component({
            selector: 'app-generator',
            template: __webpack_require__("./src/app/master/generators/generator.component.html"),
            styles: [__webpack_require__("./src/app/master/generators/generator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneratorComponent);
    return GeneratorComponent;
}());
exports.GeneratorComponent = GeneratorComponent;


/***/ }),

/***/ "./src/app/master/generators/generators.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var generator_component_1 = __webpack_require__("./src/app/master/generators/generator.component.ts");
var random_tables_service_1 = __webpack_require__("./src/app/master/generators/tables/random-tables.service.ts");
var basic_generators_component_1 = __webpack_require__("./src/app/master/generators/basic-generators/basic-generators.component.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var GeneratorsModule = /** @class */ (function () {
    function GeneratorsModule() {
    }
    GeneratorsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                router_1.RouterModule
            ],
            declarations: [generator_component_1.GeneratorComponent, basic_generators_component_1.BasicGeneratorsComponent],
            providers: [random_tables_service_1.RandomTablesService]
        })
    ], GeneratorsModule);
    return GeneratorsModule;
}());
exports.GeneratorsModule = GeneratorsModule;


/***/ }),

/***/ "./src/app/master/generators/tables/BasicTables.class.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BasicTables = /** @class */ (function () {
    function BasicTables() {
    }
    BasicTables.DURATION = [
        ["sec ltday", "per {$r=1d6} second{$r>1?'i':'o'}"],
        ["sec ltday", "per {$r=6d10} second{$r>1?'i':'o'}"],
        ["min ltday", "per {$r=1d6} minut{$r>1?'i':'o'}"],
        ["min ltday", "per {$r=6d10} minut{$r>1?'i':'o'}"],
        ["hr ltday", "per {$r=1d6} or{$r>1?'e':'a'}"],
        ["var ltday", "fino a mezzogiorno"],
        ["var ltday", "fino a mezzanotte"],
        ["var ltday", "fino al tramonto"],
        ["var ltday", "fino all\'alba"],
        ["hr", "per {2d20} ore"],
        ["day gtday", "per {1d6} giorni"],
        ["day gtday", "per {1d20} giorni"],
        ["var gtday", "fino a {[:WEEKDAY]}"],
        ["var gtday", "fino alla prossima luna {[:MOON_PHASE]}"],
        ["week gtweek", "per {$r=1d4} settiman{$r>1?'e':'a'}"],
        ["month gtweek", "per {$r=1d4} mes{$r>1?'i':'e'}"],
        ["var gtmonth", "fino al prossimo {[:SPECIAL_DAY]}"],
        ["var gtmonth", "fino {#$r=1d4-1}al{$r<2?'la':''} prossim{$r<2?'a':'o'} {[$r:SEASON]}"]
    ];
    BasicTables.WEEKDAY = [
        ["", "lunedì"],
        ["", "martedì"],
        ["", "mercoledì"],
        ["", "giovedì"],
        ["", "venerdì"],
        ["", "sabato"],
        ["", "domenica"],
    ];
    BasicTables.MOON_PHASE = [
        ["", "piena"],
        ["", "nuova"]
    ];
    BasicTables.SEASON = [
        ["", "primavera"],
        ["", "estate"],
        ["", "autunno"],
        ["", "inverno"]
    ];
    BasicTables.SPECIAL_DAY = [
        ["", "solstizio"],
        ["", "equinozio"],
        ["", "solstizio ({#$s=d[1,3]}{[$s:SEASON]})"],
        ["", "equinozio ({#$s=d[0,2]}{[$s:SEASON]})"]
    ];
    return BasicTables;
}());
exports.BasicTables = BasicTables;


/***/ }),

/***/ "./src/app/master/generators/tables/QuotesTables.class.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QuotesTables = /** @class */ (function () {
    function QuotesTables() {
    }
    QuotesTables.QUOTE = [
        // Frammenti di sogni che sembrano lontani ricordi
        // Lontani ricordi che sembrano frammenti di sogni
        // Voglio mettere in fila i pezzi, i tuoi ed i miei
        ["", "{#$sproll=1d2}{#$sp=$sproll>1?'plu':'sing'}{[$sp:COMPLICATED]} che {[:SIMILITUDE]}{$sproll>1?'no':''} {$chain=[$sp:COMPLICATED]}, <br/>"
                + "{$chain} che {[:SIMILITUDE]}{$sproll>1?'no':''} {[$sp:COMPLICATED]}. <br/>"
                + "{[:WILL]} {[:ACTION]}"],
    ];
    QuotesTables.SIMILITUDE = [
        ["", "ricorda"],
        ["", "sembra"],
        ["", "rievoca"],
        ["", "trasporta"],
        ["", "accompagna"],
        ["", "lega"],
    ];
    QuotesTables.COMPLICATED = [
        ["sing", "un frammento di {['sing':CONCEPT]}"],
        ["sing", "un {['sing':CONCEPT]} lontano"],
        ["sing", "un {['sing':CONCEPT]} perduto"],
        ["sing", "il ricordo di {['sing':CONCEPT]} perduto"],
        ["sing", "un {['sing':CONCEPT]} nebuloso"],
        ["sing", "un {['sing':CONCEPT]} arcano"],
        ["sing", "un dolce {['sing':CONCEPT]}"],
        ["plu", "frammenti di {['':CONCEPT]}"],
        ["plu", "{['plu':CONCEPT]} lontani"],
        ["plu", "{['plu':CONCEPT]} perduti"],
        ["plu", "ricordi di {['plu':CONCEPT]} perduti"],
        ["plu", "{['plu':CONCEPT]} nebuolsi"],
        ["plu", "{['plu':CONCEPT]} arcani"],
        ["plu", "dolci {['plu':CONCEPT]}"],
    ];
    QuotesTables.CONCEPT = [
        ["sing", "sogno"],
        ["sing", "sentimento"],
        ["sing", "amore"],
        ["sing", "simbolo"],
        ["sing", "futuro"],
        ["sing", "passato"],
        ["sing", "equilibrio"],
        ["sing", "controllo"],
        ["sing", "mondo"],
        ["sing", "universo"],
        ["plu", "sogni"],
        ["plu", "sentimenti"],
        ["plu", "simboli"],
        ["plu", "mondi"]
    ];
    QuotesTables.WILL = [
        ["", "voglio"],
        ["", "devo"],
        ["", "devi"],
        ["", "devo cercare di"],
        ["", "devi cercare di"],
        ["", "sforziamoci di"],
        ["", "presto, devi"],
        ["", "lotteremo per"],
        ["", "lotterò per"],
        ["", "la sfida è "],
    ];
    QuotesTables.ACTION = [
        ["", "allineare i {['plu':CONCEPT]}"],
        ["", "{#$sproll=1d2}{#$sp=$sproll>1?'plu':'sing'}{[:VERB]} i{$sproll>1?'':'l'} {[$sp:CONCEPT]}"],
        ["", "{#$sproll=1d2}{#$sp=$sproll>1?'plu':'sing'}{[:VERB]} i{$sproll>1?'':'l'} {[$sp:CONCEPT]}"],
        ["", "{#$sproll=1d2}{#$sp=$sproll>1?'plu':'sing'}{[:VERB]} i{$sproll>1?'':'l'} {[$sp:CONCEPT]}"],
        ["", "{#$sproll=1d2}{#$sp=$sproll>1?'plu':'sing'}{[:VERB]} i{$sproll>1?'':'l'} {[$sp:CONCEPT]}"],
        ["", "{#$sproll=1d2}{#$sp=$sproll>1?'plu':'sing'}{[:VERB]} i{$sproll>1?'':'l'} {[$sp:CONCEPT]}"]
    ];
    QuotesTables.VERB = [
        ["", "ricordare"],
        ["", "trovare"],
        ["", "capire"],
        ["", "salvare"],
        ["", "realizzare"],
        ["", "immaginare"],
        ["", "vincere"],
        ["", "equilibrare"],
        ["", "esaudire"]
    ];
    return QuotesTables;
}());
exports.QuotesTables = QuotesTables;


/***/ }),

/***/ "./src/app/master/generators/tables/random-tables.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var RandomTablesService = /** @class */ (function () {
    function RandomTablesService() {
    }
    RandomTablesService.eval = function (sentence, context) {
        var _this = this;
        if (context === undefined) {
            context = {};
        }
        if (context['@listIndex'] === undefined) {
            context['@listIndex'] = 1;
        }
        if (context['@tables'] === undefined) {
            context['@tables'] = {};
        }
        console.log("------------- BEGIN -------------");
        if (this.CMD_REGEX.test(sentence)) {
            var sentence = sentence.replace(this.CMD_REGEX, function (sub, silent, cmd) {
                var replace = _this.execCmd(cmd, context);
                return silent ? "" : replace;
            });
        }
        console.log("------------- END -------------");
        return sentence;
    };
    RandomTablesService.execCmd = function (cmd, context) {
        var _this = this;
        console.log("Command", cmd);
        if (this.ASSIGN_REGEX.test(cmd)) {
            var a = this.ASSIGN_REGEX.exec(cmd);
            console.log("Assign ", a[1], " = ", a[2]);
            return context[a[1]] = this.execCmd(a[2], context);
        }
        else {
            // Replace all variables with values
            cmd = cmd.replace(this.VAR_REGEX, function (sub, varName, idx) {
                var value = context[varName];
                console.log("Variable", sub, varName, value);
                if (value === undefined) {
                    return sub;
                }
                else if (typeof value === "string") {
                    return ["'", value, "'"].join('');
                }
                else if (typeof value === "number") {
                    return "" + value;
                }
                else if (value.length > 0) {
                    if (idx > 0 && cmd.charAt(idx - 1) == "d") {
                        // It's a collection meant for a roll
                        console.log("collection variabile for roll");
                        return sub;
                    }
                    else {
                        return _this.asStringValue(value);
                    }
                }
            });
            // Resolve collections
            cmd = cmd.replace(this.COLLDEF_REGEX, function (sub, listDef) {
                console.log("Collection", sub);
                return _this.resolveCollection(listDef, context);
            });
            // Replace all rolls with values
            cmd = cmd.replace(this.ROLL_REGEX, function (sub, samples, collection, explode, reduction, asList) {
                console.log("Roll", sub, samples, collection, explode, reduction, asList);
                return "" + _this.roll(parseInt(samples), collection, explode !== undefined, reduction, asList !== undefined, context);
            });
            // Lookup tables
            cmd = cmd.replace(this.TABLE_LOOKUP_REGEX, function (sub, tags, lookup, tableName) {
                console.log("Table lookup", sub, tableName, tags, lookup);
                var lookupId = lookup === undefined ? null : parseInt(_this.execCmd(lookup, context));
                var tokenizedTags = tags === undefined ? [] : tags.replace(/'/g, "").split(" ").filter(function (t) { return t.length > 0; });
                var evaluatedLookup = _this.tableLookup(tableName, tokenizedTags, lookupId, context);
                return _this.asStringValue(evaluatedLookup);
            });
            // See if it's just a value!
            return this.evalInContext(cmd, context);
        }
    };
    RandomTablesService.tableLookup = function (tableName, tags, id, context) {
        var table = context['@tables'][tableName];
        if (tags.length) {
            table = table.filter(function (entry) {
                var entryTags = entry[0].split(" ").filter(function (t) { return t.length; });
                for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
                    var tag = tags_1[_i];
                    if (entryTags.includes(tag)) {
                        return true;
                    }
                }
                return false;
            });
        }
        if (table === undefined) {
            return "unknown table";
        }
        else {
            var lastId = table.length - 1;
            id = id !== null ? Math.min(id, lastId) : this.randInt(0, lastId);
            var tableSample = table[id];
            return this.eval(tableSample[1], context);
        }
    };
    RandomTablesService.resolveCollection = function (listDef, context) {
        var listIndex = '$' + context['@listIndex']++;
        if (this.LIST_REGEX.test(listDef)) {
            context[listIndex] = listDef.split(",").map(function (item) { return parseInt(item); });
        }
        else if (this.RANGE_REGEX.test(listDef)) {
            var rangeDef = this.RANGE_REGEX.exec(listDef);
            console.log(rangeDef);
            var range = [];
            var min = parseInt(rangeDef[1]);
            var max = parseInt(rangeDef[2]);
            for (var i = min; i <= max; i++)
                range.push(i);
            context[listIndex] = range;
        }
        return listIndex;
    };
    RandomTablesService.roll = function (samples, collection, explode, reduction, asList, context) {
        var allRolls;
        if (collection.charAt(0) == '$') {
            allRolls = this.rollCollection(samples, context[collection], explode);
        }
        else {
            allRolls = this.rollDie(samples, parseInt(collection), explode);
        }
        if (reduction) {
            var target = parseInt(reduction.substring(1));
            if (this.RED_BEST_REGEX.test(reduction)) {
                allRolls = this.reduceBestSubset(allRolls, target);
            }
            else if (this.RED_WORST_REGEX.test(reduction)) {
                allRolls = this.reduceWorstSubset(allRolls, target);
            }
            else if (this.RED_SUCC_REGEX.test(reduction)) {
                allRolls = this.reduceSuccesses(allRolls, reduction, target);
            }
        }
        if (asList) {
            var listIndex = '$' + context['@listIndex']++;
            context[listIndex] = allRolls;
            return listIndex;
        }
        else {
            return allRolls.reduce(function (prev, curr) {
                return prev + curr;
            }, 0);
        }
    };
    RandomTablesService.rollDie = function (samples, dieType, explode) {
        var n = samples;
        var rolledSamples = [];
        while (n > 0) {
            var sample = this.randInt(1, dieType);
            rolledSamples.push(sample);
            if (!explode || sample != dieType) {
                n--;
            }
        }
        return rolledSamples;
    };
    RandomTablesService.rollCollection = function (samples, collection, explode) {
        var n = samples;
        var rolledSamples = [];
        while (n > 0) {
            var roll = this.randInt(0, collection.length - 1);
            var sample = collection[roll];
            rolledSamples.push(sample);
            if (!explode || roll != collection.length - 1) {
                n--;
            }
        }
        return rolledSamples;
    };
    RandomTablesService.reduceBestSubset = function (rolledSamples, keep) {
        rolledSamples.sort().splice(0, rolledSamples.length - keep);
        return rolledSamples;
    };
    RandomTablesService.reduceWorstSubset = function (rolledSamples, keep) {
        rolledSamples.sort().reverse().splice(0, rolledSamples.length - keep);
        return rolledSamples;
    };
    RandomTablesService.reduceSuccesses = function (rolledSamples, successCondition, target) {
        if (successCondition.charAt(0) == ">") {
            return rolledSamples.filter(function (s) {
                return s > target;
            });
        }
        else if (successCondition.charAt(0) == "<") {
            return rolledSamples.filter(function (s) {
                return s < target;
            });
        }
    };
    RandomTablesService.asStringValue = function (value) {
        return ["'", value, "'"].join("");
    };
    RandomTablesService.randInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    RandomTablesService.evalInContext = function (scr, context) {
        // execute script in private context
        console.log("EVAL", scr, context);
        var r;
        try {
            r = (new Function("with(this) { return " + scr + "}")).call(context);
        }
        catch (e) {
            console.error(e);
        }
        return r;
    };
    RandomTablesService.CMD_REGEX = /\{\s*(\#)?([^\}]+)\s*\}/g;
    RandomTablesService.ASSIGN_REGEX = /(\$[a-z][a-z0-9_]*)=([^=].*)/;
    RandomTablesService.VAR_REGEX = /(\$[a-z][a-z0-9_]*)/g;
    RandomTablesService.COLLDEF_REGEX = /\[([0-9\.\,]+)\]/g;
    RandomTablesService.RANGE_REGEX = /^([0-9]+)\.\.([0-9]+)$/;
    RandomTablesService.LIST_REGEX = /^([0-9]+(,[0-9]+)+)$/;
    RandomTablesService.ROLL_REGEX = /([0-9]*)d([0-9]+|\$[0-9a-z_]+)(\!)?([BW<>][1-9]+)?([L])?/g;
    RandomTablesService.TABLE_LOOKUP_REGEX = /^\[(\'[^\']*\')?([^\:\']+)?\:([A-Z_]+)\]$/;
    RandomTablesService.RED_BEST_REGEX = /^B([0-9]+)$/;
    RandomTablesService.RED_WORST_REGEX = /^W([0-9]+)$/;
    RandomTablesService.RED_SUCC_REGEX = /^([<>][0-9]+)$/;
    RandomTablesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], RandomTablesService);
    return RandomTablesService;
}());
exports.RandomTablesService = RandomTablesService;


/***/ }),

/***/ "./src/app/master/gevaluator.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GevaluatorService = /** @class */ (function () {
    function GevaluatorService() {
    }
    GevaluatorService.eval = function (sentence) {
        var _this = this;
        var context = {};
        console.log("-------------");
        // Try to execute all assignments first
        var sentence = sentence.replace(this.G_ASSIGN_CMD_REGEX, function (sub, cmd) {
            return _this.execCmd(cmd, context);
        });
        // Then all the rest
        var result = sentence.replace(this.CMD_REGEX, function (sub, cmd) {
            return _this.execCmd(cmd, context);
        });
        console.log(context);
        return result;
    };
    GevaluatorService.execCmd = function (cmd, context) {
        if (this.MUTE_CMD_REGEX.test(cmd)) {
            var m = this.MUTE_CMD_REGEX.exec(cmd);
            this.execCmd(m[1], context);
            return "";
        }
        else if (this.ASSIGN_CMD_REGEX.test(cmd)) {
            var a = this.ASSIGN_CMD_REGEX.exec(cmd);
            return context[a[1]] = this.execCmd(a[2], context);
        }
        else if (this.COND_CMD_REGEX.test(cmd)) {
            return this.evaluateCondition(cmd, context);
        }
        else if (this.ROLL_CMD_REGEX.test(cmd)) {
            return this.roll(cmd);
        }
        else {
            return context[cmd] || cmd;
        }
    };
    GevaluatorService.evaluateCondition = function (cmd, context) {
        var match = this.COND_CMD_REGEX.exec(cmd);
        var A = this.execCmd(match[1], context);
        var B = this.execCmd(match[3], context);
        var op = match[2];
        return eval("" + A + op + B) ? this.execCmd(match[4], context) : this.execCmd(match[5], context);
    };
    GevaluatorService.roll = function (rollCmd) {
        var _this = this;
        return rollCmd.replace(this.ROLL_CMD_REGEX, function (sub, rolls, dieType) {
            rolls = rolls ? rolls : 1;
            var result = 0;
            while (rolls > 0) {
                result += _this.randInt(1, dieType);
                rolls--;
            }
            return result;
        });
    };
    GevaluatorService.randInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    GevaluatorService.evalInContext = function (scr, context) {
        // execute script in private context
        var r;
        try {
            r = (new Function("with(this) { return " + scr + "}")).call(context);
        }
        catch (e) {
            console.error(e);
        }
        return r;
    };
    GevaluatorService.CMD_REGEX = /\[\[([^\]]+)\]\]/g;
    GevaluatorService.G_ASSIGN_CMD_REGEX = /\[\[(\$?[a-z_]+\=[^\]]+)\]\]/g;
    GevaluatorService.MUTE_CMD_REGEX = /^\$(.+)$/;
    GevaluatorService.ROLL_CMD_REGEX = /^([0-9]+)?d([0-9]+)?$/;
    GevaluatorService.ASSIGN_CMD_REGEX = /^([a-z_]+)\=([^=]+)$/;
    GevaluatorService.COND_CMD_REGEX = /^([0-9a-z_]+)(\<|\>|!=|==)([0-9a-z_]+)\?([^:]+):(.+)?$/;
    GevaluatorService.OPERATOR_CMD_REGEX = /^([^\+\-\/\*\%\=]+)([\+\-\/\*\%])(.+)$/;
    GevaluatorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GevaluatorService);
    return GevaluatorService;
}());
exports.GevaluatorService = GevaluatorService;


/***/ }),

/***/ "./src/app/master/gevaluator2.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Gevaluator2Service = /** @class */ (function () {
    function Gevaluator2Service() {
    }
    Gevaluator2Service.eval = function (sentence, context) {
        var _this = this;
        if (context === undefined) {
            context = {};
        }
        if (context['@listIndex'] === undefined) {
            context['@listIndex'] = 1;
        }
        if (context['@tables'] === undefined) {
            context['@tables'] = {};
        }
        console.log("------------- BEGIN -------------");
        if (this.CMD_REGEX.test(sentence)) {
            var sentence = sentence.replace(this.CMD_REGEX, function (sub, silent, cmd) {
                var replace = _this.execCmd(cmd, context);
                return silent ? "" : replace;
            });
        }
        console.log(context);
        console.log("------------- END -------------");
        return sentence;
    };
    Gevaluator2Service.execCmd = function (cmd, context) {
        var _this = this;
        console.log("Command", cmd);
        if (this.ASSIGN_REGEX.test(cmd)) {
            var a = this.ASSIGN_REGEX.exec(cmd);
            return context[a[1]] = this.execCmd(a[2], context);
        }
        else {
            // Replace all variables with values
            cmd = cmd.replace(this.VAR_REGEX, function (sub, varName, idx) {
                var value = context[varName];
                console.log("Variable", sub, varName, value);
                if (value === undefined) {
                    return sub;
                }
                else if (typeof value === "string") {
                    return ["'", value, "'"].join('');
                }
                else if (typeof value === "number") {
                    return "" + value;
                }
                else if (value.length > 0) {
                    if (idx > 0 && cmd.charAt(idx - 1) == "d") {
                        // It's a collection meant for a roll
                        console.log("collection variabile for roll");
                        return sub;
                    }
                    else {
                        return _this.asStringValue(value);
                    }
                }
            });
            console.log(cmd);
            // Resolve collections
            cmd = cmd.replace(this.COLLDEF_REGEX, function (sub, listDef) {
                console.log("Collection", sub);
                return _this.resolveCollection(listDef, context);
            });
            // Replace all rolls with values
            cmd = cmd.replace(this.ROLL_REGEX, function (sub, samples, collection, explode, reduction, asList) {
                console.log("Roll", sub);
                console.log(samples, collection, explode, reduction, asList);
                return "" + _this.roll(parseInt(samples), collection, explode !== undefined, reduction, asList !== undefined, context);
            });
            // Lookup tables
            cmd = cmd.replace(this.TABLE_LOOKUP_REGEX, function (sub, tags, lookup, tableName) {
                console.log("Table lookup", sub, tableName, tags, lookup);
                var lookupId = lookup === undefined ? null : parseInt(_this.execCmd(lookup, context));
                var tokenizedTags = tags === undefined ? [] : tags.replace(/'/g, "").split(" ").filter(function (t) { return t.length > 0; });
                var evaluatedLookup = _this.tableLookup(tableName, tokenizedTags, lookupId, context);
                return _this.asStringValue(evaluatedLookup);
            });
            console.log(cmd);
            // See if it's just a value!
            return this.evalInContext(cmd, context);
        }
    };
    Gevaluator2Service.tableLookup = function (tableName, tags, id, context) {
        var table = context['@tables'][tableName];
        if (tags.length) {
            table = table.filter(function (entry) {
                var entryTags = entry[0].split(" ").filter(function (t) { return t.length; });
                for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
                    var tag = tags_1[_i];
                    if (entryTags.includes(tag)) {
                        return true;
                    }
                }
                return false;
            });
        }
        if (table === undefined) {
            return "unknown table";
        }
        else {
            var lastId = table.length - 1;
            console.log(table, tags, lastId, id);
            id = id !== null ? Math.min(id, lastId) : this.randInt(0, lastId);
            var tableSample = table[id];
            return this.eval(tableSample[1], context);
        }
    };
    Gevaluator2Service.resolveCollection = function (listDef, context) {
        var listIndex = '$' + context['@listIndex']++;
        if (this.LIST_REGEX.test(listDef)) {
            context[listIndex] = listDef.split(",").map(function (item) { return parseInt(item); });
        }
        else if (this.RANGE_REGEX.test(listDef)) {
            var rangeDef = this.RANGE_REGEX.exec(listDef);
            console.log(rangeDef);
            var range = [];
            var min = parseInt(rangeDef[1]);
            var max = parseInt(rangeDef[2]);
            for (var i = min; i <= max; i++)
                range.push(i);
            context[listIndex] = range;
        }
        return listIndex;
    };
    Gevaluator2Service.roll = function (samples, collection, explode, reduction, asList, context) {
        var allRolls;
        if (collection.charAt(0) == '$') {
            allRolls = this.rollCollection(samples, context[collection], explode);
        }
        else {
            allRolls = this.rollDie(samples, parseInt(collection), explode);
        }
        console.log(allRolls);
        if (reduction) {
            var target = parseInt(reduction.substring(1));
            if (this.RED_BEST_REGEX.test(reduction)) {
                allRolls = this.reduceBestSubset(allRolls, target);
            }
            else if (this.RED_WORST_REGEX.test(reduction)) {
                allRolls = this.reduceWorstSubset(allRolls, target);
            }
            else if (this.RED_SUCC_REGEX.test(reduction)) {
                allRolls = this.reduceSuccesses(allRolls, reduction, target);
            }
        }
        console.log(allRolls, asList);
        if (asList) {
            var listIndex = '$' + context['@listIndex']++;
            context[listIndex] = allRolls;
            return listIndex;
        }
        else {
            return allRolls.reduce(function (prev, curr) {
                return prev + curr;
            }, 0);
        }
    };
    Gevaluator2Service.rollDie = function (samples, dieType, explode) {
        var n = samples;
        var rolledSamples = [];
        while (n > 0) {
            var sample = this.randInt(1, dieType);
            rolledSamples.push(sample);
            if (!explode || sample != dieType) {
                n--;
            }
        }
        return rolledSamples;
    };
    Gevaluator2Service.rollCollection = function (samples, collection, explode) {
        var n = samples;
        var rolledSamples = [];
        while (n > 0) {
            var roll = this.randInt(0, collection.length - 1);
            var sample = collection[roll];
            rolledSamples.push(sample);
            if (!explode || roll != collection.length - 1) {
                n--;
            }
        }
        return rolledSamples;
    };
    Gevaluator2Service.reduceBestSubset = function (rolledSamples, keep) {
        rolledSamples.sort().splice(0, rolledSamples.length - keep);
        return rolledSamples;
    };
    Gevaluator2Service.reduceWorstSubset = function (rolledSamples, keep) {
        rolledSamples.sort().reverse().splice(0, rolledSamples.length - keep);
        return rolledSamples;
    };
    Gevaluator2Service.reduceSuccesses = function (rolledSamples, successCondition, target) {
        if (successCondition.charAt(0) == ">") {
            return rolledSamples.filter(function (s) {
                return s > target;
            });
        }
        else if (successCondition.charAt(0) == "<") {
            return rolledSamples.filter(function (s) {
                return s < target;
            });
        }
    };
    Gevaluator2Service.asStringValue = function (value) {
        return ["'", value, "'"].join("");
    };
    Gevaluator2Service.randInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Gevaluator2Service.evalInContext = function (scr, context) {
        // execute script in private context
        console.log("EVAL", scr, context);
        var r;
        try {
            r = (new Function("with(this) { return " + scr + "}")).call(context);
        }
        catch (e) {
            console.error(e);
        }
        return r;
    };
    Gevaluator2Service.CMD_REGEX = /\{\s*(\#)?([^\}]+)\s*\}/g;
    Gevaluator2Service.ASSIGN_REGEX = /(\$[a-z][a-z0-9_]*)=([^=$].*)/;
    Gevaluator2Service.VAR_REGEX = /(\$[a-z][a-z0-9_]*)/g;
    Gevaluator2Service.COLLDEF_REGEX = /\[([0-9\.\,]+)\]/g;
    Gevaluator2Service.RANGE_REGEX = /^([0-9]+)\.\.([0-9]+)$/;
    Gevaluator2Service.LIST_REGEX = /^([0-9]+(,[0-9]+)+)$/;
    Gevaluator2Service.ROLL_REGEX = /([0-9]*)d([0-9]+|\$[0-9a-z_]+)(\!)?([BW<>][1-9]+)?([L])?/g;
    Gevaluator2Service.TABLE_LOOKUP_REGEX = /^\[(\'[^\']*\')?([^\:\']+)?\:([A-Z_]+)\]$/;
    Gevaluator2Service.RED_BEST_REGEX = /^B([0-9]+)$/;
    Gevaluator2Service.RED_WORST_REGEX = /^W([0-9]+)$/;
    Gevaluator2Service.RED_SUCC_REGEX = /^([<>][0-9]+)$/;
    Gevaluator2Service = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Gevaluator2Service);
    return Gevaluator2Service;
}());
exports.Gevaluator2Service = Gevaluator2Service;


/***/ }),

/***/ "./src/app/master/master-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var master_component_1 = __webpack_require__("./src/app/master/master.component.ts");
var generator_component_1 = __webpack_require__("./src/app/master/generators/generator.component.ts");
var basic_generators_component_1 = __webpack_require__("./src/app/master/generators/basic-generators/basic-generators.component.ts");
var test_generator_component_1 = __webpack_require__("./src/app/master/test-generator/test-generator.component.ts");
var routes = [{
        path: 'master',
        component: master_component_1.MasterComponent,
        children: [
            {
                path: 'generators',
                component: generator_component_1.GeneratorComponent,
                children: [
                    {
                        path: 'test',
                        component: test_generator_component_1.TestGeneratorComponent
                    },
                    {
                        path: 'basic',
                        component: basic_generators_component_1.BasicGeneratorsComponent
                    }
                ]
            }
        ]
    }];
var MasterRoutingModule = /** @class */ (function () {
    function MasterRoutingModule() {
    }
    MasterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
}());
exports.MasterRoutingModule = MasterRoutingModule;


/***/ }),

/***/ "./src/app/master/master.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master/master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"master nav\">\n  <a routerLink=\"generators/basic\" routerLinkActive=\"active\">{{ \"PAGE.MASTER.NAV.GEN\" | translate }}</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/master/master.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent = __decorate([
        core_1.Component({
            selector: 'app-master',
            template: __webpack_require__("./src/app/master/master.component.html"),
            styles: [__webpack_require__("./src/app/master/master.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MasterComponent);
    return MasterComponent;
}());
exports.MasterComponent = MasterComponent;


/***/ }),

/***/ "./src/app/master/master.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var master_routing_module_1 = __webpack_require__("./src/app/master/master-routing.module.ts");
var master_component_1 = __webpack_require__("./src/app/master/master.component.ts");
var test_generator_component_1 = __webpack_require__("./src/app/master/test-generator/test-generator.component.ts");
var gevaluator_service_1 = __webpack_require__("./src/app/master/gevaluator.service.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var generators_module_1 = __webpack_require__("./src/app/master/generators/generators.module.ts");
var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                master_routing_module_1.MasterRoutingModule,
                generators_module_1.GeneratorsModule
            ],
            declarations: [
                master_component_1.MasterComponent,
                test_generator_component_1.TestGeneratorComponent
            ],
            providers: [gevaluator_service_1.GevaluatorService]
        })
    ], MasterModule);
    return MasterModule;
}());
exports.MasterModule = MasterModule;


/***/ }),

/***/ "./src/app/master/test-generator/TestGenTables.class.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TestGenTables = /** @class */ (function () {
    function TestGenTables() {
    }
    TestGenTables.EXAMPLES = [
        ["", "Elemento di tabella statico."],
        ["", "Tira 2d6: {1d6}"],
        ["", "Tira 2d6L (mostra lista) : {1d6L}"],
        ["", "Tira 5d6! (esplode): {5d6!L}; Tira 5d6>4 (successi 5 e 6): {5d6>4L}; Tira 5d6B2 (tieni i 2 migliori): {5d6B2L}"],
        ["", "Dado come lista 3d[3,5,8,13,21]: {3d[3,5,8,13,21]L}"],
        ["", "Dado come intervallo 3d[8..15]: {3d[8..15]L}"],
        ["", "Variabili a = {$a=2}, b = {$b=3}, a+b = {$a+$b}"],
        ["", "Variabili e dadi: $hit = {$hit=8}, 3d$hit = {3d$hitL}"],
        ["", "Variabili e intervalli: $hitmin = {$hitmin=8}, $hitmax = {$hitmax=21}, 3d[$hitmin..$hitmax] = {3d[$hitmin..$hitmax]L}"],
        ["", "Combinare dadi e espressioni: a={$a=3}, 1d4+a+2d3 = {1d4+$a+2d3}"],
        ["", "Comandi nascosti: {#$a=3d6L} {#$b=3d[10..16]L} {$a}<{$b}"],
        ["", "Importa da tabella (casuale): {[:CHAR_ATTR]}"],
        ["", "Importa da tabella (id={$id=4}): {[$id:CHAR_ATTR]}"],
        ["", "Importa da tabella (id=4+1d4): {[4+1d4:CHAR_ATTR]}"],
        ["", "Importa da tabella (per tag): {['skill':CHAR_ATTR]}"],
        ["", "Importa da tabella (per tag): {['hr var':DURATION]}"],
    ];
    TestGenTables.EX_CHAR_ATTR = [
        ["ability", "Forza {$str=4d6B3}"],
        ["ability", "Destrezza {$dex=4d6B3}"],
        ["ability", "Costituzione {$cos=4d6B3}"],
        ["ability", "Intelligenza {$int=4d6B3}"],
        ["ability", "Saggezza {$sag=4d6B3}"],
        ["ability", "Carisma {$car=4d6B3}"],
        ["skill", "Conoscenza (dungeon) {$kno_dungeon=1d6}"],
        ["skill", "Conoscenza (arcano) {$kno_arcane=1d6}"],
        ["skill", "Stealth {$kno_stealth=1d6}"],
    ];
    TestGenTables.DURATION = [
        ["sec ltday", "{$r=1d6} second{$r>1?'i':'o'}"],
        ["sec ltday", "{$r=6d10} second{$r>1?'i':'o'}"],
        ["min ltday", "{$r=1d6} minut{$r>1?'i':'o'}"],
        ["min ltday", "{$r=6d10} minut{$r>1?'i':'o'}"],
        ["hr ltday", "{$r=1d6} or{$r>1?'e':'a'}"],
        ["var ltday", "fino a mezzogiorno"],
        ["var ltday", "fino a mezzanotte"],
        ["var ltday", "fino al tramonto"],
        ["var ltday", "fino all\\'alba"],
        ["hr", "{2d20} ore"],
        ["day gtday", "{1d6} giorni"],
        ["day gtday", "{1d20} giorni"]
    ];
    return TestGenTables;
}());
exports.TestGenTables = TestGenTables;


/***/ }),

/***/ "./src/app/master/test-generator/test-generator.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <button (click)=\"reroll()\">REROLL</button>\n</p>\n\n<div class=\"list\">\n  <div *ngFor=\"let roll of rolls; let even = even\" [ngClass]=\"{'even': even}\">{{roll}}</div>\n</div>\n\n<div class=\"list\">\n  <div *ngFor=\"let roll of durationRolls; let even = even\" [ngClass]=\"{'even': even}\">{{roll}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/test-generator/test-generator.component.scss":
/***/ (function(module, exports) {

module.exports = ".list {\n  -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.75);\n  padding: 15px; }\n  .list > div {\n    padding: 3px 0; }\n  .list .even {\n    background: rgba(0, 0, 0, 0.1); }\n"

/***/ }),

/***/ "./src/app/master/test-generator/test-generator.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TestGenTables_class_1 = __webpack_require__("./src/app/master/test-generator/TestGenTables.class.ts");
var gevaluator2_service_1 = __webpack_require__("./src/app/master/gevaluator2.service.ts");
var BasicTables_class_1 = __webpack_require__("./src/app/master/generators/tables/BasicTables.class.ts");
var random_tables_service_1 = __webpack_require__("./src/app/master/generators/tables/random-tables.service.ts");
var TestGeneratorComponent = /** @class */ (function () {
    function TestGeneratorComponent() {
        this.rolls = [];
        this.durationRolls = [];
    }
    TestGeneratorComponent.prototype.ngOnInit = function () {
        this.reroll();
    };
    TestGeneratorComponent.prototype.reroll = function () {
        var table = TestGenTables_class_1.TestGenTables.EXAMPLES;
        this.rolls = [];
        for (var _i = 0, table_1 = table; _i < table_1.length; _i++) {
            var entry = table_1[_i];
            var line = gevaluator2_service_1.Gevaluator2Service.eval(entry[1], {
                "@tables": {
                    EXAMPLES: table,
                    CHAR_ATTR: TestGenTables_class_1.TestGenTables.EX_CHAR_ATTR,
                    DURATION: TestGenTables_class_1.TestGenTables.DURATION
                }
            });
            this.rolls.push(line);
        }
        var durationTable = BasicTables_class_1.BasicTables.DURATION;
        this.durationRolls = [];
        for (var _a = 0, durationTable_1 = durationTable; _a < durationTable_1.length; _a++) {
            var entry = durationTable_1[_a];
            this.durationRolls.push(random_tables_service_1.RandomTablesService.eval(entry[1], {
                "@tables": BasicTables_class_1.BasicTables
            }));
        }
    };
    TestGeneratorComponent = __decorate([
        core_1.Component({
            selector: 'app-test-generator',
            template: __webpack_require__("./src/app/master/test-generator/test-generator.component.html"),
            styles: [__webpack_require__("./src/app/master/test-generator/test-generator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestGeneratorComponent);
    return TestGeneratorComponent;
}());
exports.TestGeneratorComponent = TestGeneratorComponent;


/***/ }),

/***/ "./src/app/move-page/move-page.component.css":
/***/ (function(module, exports) {

module.exports = "@media (min-width: 768px) {\n  .move-page {\n    width: 768px;\n    margin: 0 auto;\n  }\n}\n"

/***/ }),

/***/ "./src/app/move-page/move-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"move-page\">\n  <move-component [move]=\"move\"></move-component>\n</div>\n\n"

/***/ }),

/***/ "./src/app/move-page/move-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var move_data_service_1 = __webpack_require__("./src/app/data/move-data.service.ts");
var MovePageComponent = /** @class */ (function () {
    function MovePageComponent(route, moveDataService) {
        this.route = route;
        this.moveDataService = moveDataService;
    }
    MovePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.move = _this.moveDataService.get(params['moveId']);
        });
    };
    MovePageComponent = __decorate([
        core_1.Component({
            selector: 'app-move-page',
            template: __webpack_require__("./src/app/move-page/move-page.component.html"),
            styles: [__webpack_require__("./src/app/move-page/move-page.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            move_data_service_1.MoveDataService])
    ], MovePageComponent);
    return MovePageComponent;
}());
exports.MovePageComponent = MovePageComponent;


/***/ }),

/***/ "./src/app/player/basic-moves/basic-moves.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-moves\">\n  <div class=\"multi-column-list\">\n    <div class=\"multi-column-item\" *ngFor=\"let move of basicMoves\">\n      <move-component [move]=\"move\" cardOnly=\"true\"></move-component>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player/basic-moves/basic-moves.component.scss":
/***/ (function(module, exports) {

module.exports = "@media (min-width: 960px) and (max-width: 1280px) {\n  .basic-moves .multi-column-list {\n    width: 940px;\n    height: 1400px; }\n    .basic-moves .multi-column-list .multi-column-item {\n      width: 50%; } }\n\n@media (min-width: 1281px) and (max-width: 1599px) {\n  .basic-moves .multi-column-list {\n    width: 1260px;\n    height: 1200px; }\n    .basic-moves .multi-column-list .multi-column-item {\n      width: 33%; } }\n\n@media (min-width: 1600px) {\n  .basic-moves .multi-column-list {\n    width: 1560px;\n    height: 800px; }\n    .basic-moves .multi-column-list .multi-column-item {\n      width: 25%; } }\n"

/***/ }),

/***/ "./src/app/player/basic-moves/basic-moves.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var move_data_service_1 = __webpack_require__("./src/app/data/move-data.service.ts");
var core_2 = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
var BasicMovesComponent = /** @class */ (function () {
    function BasicMovesComponent(moveDataService, translateService) {
        this.moveDataService = moveDataService;
        this.translateService = translateService;
    }
    BasicMovesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.getTranslation(this.translateService.currentLang).subscribe(function (e) {
            _this.basicMoves = _this.moveDataService.findAll(function (m) {
                return m.tags.find(function (t) { return t.name == 'TAG.BASEMOVE'; }) != null;
            }).sort(function (a, b) {
                return _this.translateService.instant(a.name) < _this.translateService.instant(b.name) ? -1 : 1;
            });
        });
        this.translateService.onLangChange.subscribe(function (e) {
            _this.translateService.getTranslation(_this.translateService.currentLang).subscribe(function (e) {
                _this.basicMoves = _this.basicMoves.sort(function (a, b) {
                    return _this.translateService.instant(a.name) < _this.translateService.instant(b.name) ? -1 : 1;
                });
            });
        });
    };
    BasicMovesComponent = __decorate([
        core_1.Component({
            selector: 'app-basic-moves',
            template: __webpack_require__("./src/app/player/basic-moves/basic-moves.component.html"),
            styles: [__webpack_require__("./src/app/player/basic-moves/basic-moves.component.scss")]
        }),
        __metadata("design:paramtypes", [move_data_service_1.MoveDataService,
            core_2.TranslateService])
    ], BasicMovesComponent);
    return BasicMovesComponent;
}());
exports.BasicMovesComponent = BasicMovesComponent;


/***/ }),

/***/ "./src/app/player/classes/classes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/classes/classes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"playbooks\">\n\n  <div class=\"multi-column-list\">\n    <div class=\"multi-column-item\" *ngFor=\"let playbook of playbooks\">\n      <playbook-card-component [playbook]=\"playbook\"></playbook-card-component>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/player/classes/classes.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FighterClass_1 = __webpack_require__("./src/app/data/FighterClass.ts");
var ClassesComponent = /** @class */ (function () {
    function ClassesComponent() {
        this.playbooks = [];
    }
    ClassesComponent.prototype.ngOnInit = function () {
        var f = FighterClass_1.Fighter.factory();
        this.playbooks.push(f);
    };
    ClassesComponent = __decorate([
        core_1.Component({
            selector: 'app-classes',
            template: __webpack_require__("./src/app/player/classes/classes.component.html"),
            styles: [__webpack_require__("./src/app/player/classes/classes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassesComponent);
    return ClassesComponent;
}());
exports.ClassesComponent = ClassesComponent;


/***/ }),

/***/ "./src/app/player/classes/fighter/fighter.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/classes/fighter/fighter.component.html":
/***/ (function(module, exports) {

module.exports = "<show-character [character]=\"fighterClass\"></show-character>\n\n"

/***/ }),

/***/ "./src/app/player/classes/fighter/fighter.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FighterClass_1 = __webpack_require__("./src/app/data/FighterClass.ts");
var FighterComponent = /** @class */ (function () {
    function FighterComponent() {
    }
    FighterComponent.prototype.ngOnInit = function () {
        this.fighterClass = FighterClass_1.Fighter.factory();
        console.log(this.fighterClass);
    };
    FighterComponent = __decorate([
        core_1.Component({
            selector: 'app-fighter',
            template: __webpack_require__("./src/app/player/classes/fighter/fighter.component.html"),
            styles: [__webpack_require__("./src/app/player/classes/fighter/fighter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FighterComponent);
    return FighterComponent;
}());
exports.FighterComponent = FighterComponent;


/***/ }),

/***/ "./src/app/player/equipment/equipment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"equipment-component\">\n  <h2>{{ \"PAGE.EQUIPMENT.EQUIPMENT\" | translate }}</h2>\n  <div class=\"list\">\n    <div *ngFor=\"let item of equipment; let odd = odd\" [ngClass]=\"{'odd': odd}\">\n      <gear-stack-component [item]=\"item\"></gear-stack-component>\n    </div>\n  </div>\n\n  <h2>{{ \"PAGE.EQUIPMENT.WEAPONS\" | translate }}</h2>\n  <div class=\"list\">\n    <div *ngFor=\"let item of weapons; let even = even\" [ngClass]=\"{'even': even}\">\n      <gear-stack-component [item]=\"item\"></gear-stack-component>\n    </div>\n  </div>\n\n  <h2>{{ \"PAGE.EQUIPMENT.ARMOR\" | translate }}</h2>\n  <div class=\"list\">\n    <div *ngFor=\"let item of armor\">\n      <gear-stack-component [item]=\"item\"></gear-stack-component>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/player/equipment/equipment.component.scss":
/***/ (function(module, exports) {

module.exports = ".equipment-component {\n  width: 940px;\n  margin: 0 auto; }\n  .equipment-component h2 {\n    margin-bottom: 0px; }\n  .equipment-component .list {\n    -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n            box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n    background: rgba(255, 255, 255, 0.75);\n    padding: 15px; }\n  .equipment-component .list > div {\n      padding: 3px 0; }\n  .equipment-component .list .even {\n      background: rgba(0, 0, 0, 0.1); }\n  @media (max-width: 920px) {\n  .equipment-component {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/player/equipment/equipment.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var gear_data_service_1 = __webpack_require__("./src/app/data/gear-data.service.ts");
var EquipmentComponent = /** @class */ (function () {
    function EquipmentComponent(gearData) {
        this.gearData = gearData;
        this.equipment = [];
        this.weapons = [];
        this.armor = [];
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        this.equipment = this.gearData.findAll(function (g) { return g.tags.findIndex(function (t) { return t.name === "TAG.GEAR.EQUIPMENT_ITEM"; }) > -1; });
        this.armor = this.gearData.findAll(function (g) { return g.tags.findIndex(function (t) { return t.name === "TAG.GEAR.ARMOR_ITEM"; }) > -1; });
        this.weapons = this.gearData.findAll(function (g) { return g.tags.findIndex(function (t) { return t.name === "TAG.GEAR.WEAPON_ITEM"; }) > -1; });
    };
    EquipmentComponent = __decorate([
        core_1.Component({
            selector: 'app-equipment',
            template: __webpack_require__("./src/app/player/equipment/equipment.component.html"),
            styles: [__webpack_require__("./src/app/player/equipment/equipment.component.scss")]
        }),
        __metadata("design:paramtypes", [gear_data_service_1.GearDataService])
    ], EquipmentComponent);
    return EquipmentComponent;
}());
exports.EquipmentComponent = EquipmentComponent;


/***/ }),

/***/ "./src/app/player/heritages/heritages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/heritages/heritages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"heritages\">\n  <div class=\"multi-column-list\">\n    <div class=\"multi-column-item\" *ngFor=\"let h of heritages\">\n      <heritage-component [heritage]=\"h\"></heritage-component>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player/heritages/heritages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var heritage_data_service_1 = __webpack_require__("./src/app/data/heritage-data.service.ts");
var HeritagesComponent = /** @class */ (function () {
    function HeritagesComponent(heritageData) {
        this.heritageData = heritageData;
        this.heritages = [];
    }
    HeritagesComponent.prototype.ngOnInit = function () {
        this.heritages = this.heritageData.findAll(function (h) { return true; });
    };
    HeritagesComponent = __decorate([
        core_1.Component({
            selector: 'app-heritages',
            template: __webpack_require__("./src/app/player/heritages/heritages.component.html"),
            styles: [__webpack_require__("./src/app/player/heritages/heritages.component.css")]
        }),
        __metadata("design:paramtypes", [heritage_data_service_1.HeritageDataService])
    ], HeritagesComponent);
    return HeritagesComponent;
}());
exports.HeritagesComponent = HeritagesComponent;


/***/ }),

/***/ "./src/app/player/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rule-section\">\n  <h2>Cos'è Dungeon World - Unchained</h2>\n  <div>\n    <p>\n      Dungeon World - Unchained è un gioco di ruolo per 2 o più<a href=\"#fn1\" class=\"fn\">*</a> giocatori.\n      Per giocare servono questa app, carta e penna, un tavolo e delle sedie o un software di videochiamata.\n    </p>\n    <p>\n      Nella pratica, Dungeon World - Unchained è una conversazione.\n      I giocatori parlano tra loro delle caratteristiche, azioni ed emozioni di personaggi di loro invenzione.\n      Le regole del gioco intervengono nella conversazione tramite le Mosse.\n      Le Mosse aggiungono un pizzico di imprevedibilità tramite il tiro di dadi e rinforzano gli stereotipi del genere fantasy.\n    </p>\n    <p class=\"foot-note\" id=\"fn1\">\n      È consigliato limitare il numero di giocatori a 5-7 massimo per motivi pratici\n    </p>\n  </div>\n</div>\n\n<div class=\"rule-section\">\n  <h2>Terminologia</h2>\n  <div>\n    <p>\n      Dungeon World - Unchained serve a guidare la <b>Narrazione</b>, cioè l'attività di parlare di fatti e personaggi di fantasia.\n      Quando i giocatori interrompono la <b>Narrazione</b>, l'insieme delle cose dette può essere riassunto in una <b>Storia</b>.\n      Durante il gioco invece, mentre la <b>Narrazione</b> è in corso la <b>Storia</b> si chiama <b>Racconto</b>.\n      Al contrario della <b>Storia</b>, il <b>Racconto</b> è dinamico. Cresce e si trasforma con ogni frase pronunciata dai giocatori.\n    </p>\n    <p>\n      Se invece di giochi di ruolo parlassimo di scultura: il <b>Racconto</b> sarebbe l'<i>argilla</i>.\n      La <b>Narrazione</b> sarebbe l'attività di <i>modallare</i> l'argilla.\n      Quando si smette di modellare l'argilla e la si cuoce, la sua forma non può più essere modificata.\n      Lo stesso vale per la <b>Storia</b>.\n    </p>\n  </div>\n</div>\n\n<div class=\"rule-section\">\n  <h2>Come si gioca</h2>\n  <div>\n    <p>\n      Uno dei giocatori ricopre il ruolo di Game Master (abbreviato GM), in genere quello che conosce meglio le regole.\n      Ciascuno degli altri controlla direttamente un personaggio protagonista (abbreviato PG).\n      Il GM ha il compito di guidare la conversazione e di gestire gli antagonisti e i pericoli.\n      È possibile, ma non obbligatorio, interpretare in modo teatrale i personaggi.\n      Tutti sono incoraggiati a descrivere le azioni dei PG in modo dettagliato e dinamico.\n    </p>\n    <p>\n      Dungeon World non ha un rigida struttura a turni.\n      Come in ogni altra conversazione è essenziale saper ascoltare.\n      Altrettanto importante è collaborare attivamente facendo domande, dando e accettando suggerimenti.\n    </p>\n    <p>\n      Una tipica sessione di gioco si svolge così:\n    </p>\n    <ul style=\"list-style-type: decimal;\">\n      <li>Il GM descrive l'ambiente e la situazione in cui si trovano i PG.</li>\n      <li>Il GM chiede a tutti o alcuni giocatori: 'Cosa fai?'.</li>\n      <li>Il/I giocatori descrivono le azioni/reazioni dei propri PG.</li>\n      <li>Il GM indica se e quali Mosse sono state innescate.</li>\n      <li>Le Mosse innescate vengono risolte e i rispettivi risultati incorporati nella narrazione.</li>\n      <li>Ripeti dall'inizio.</li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"rule-section\">\n  <h2>Le Mosse</h2>\n  <div>\n    <p>\n      Una Mossa è fatta di pochi semplici elementi:\n    </p>\n    <ul style=\"list-style-type: decimal;\">\n      <li>Innesco</li>\n      <li>Tiro e Risoluzione</li>\n      <li>Effetto</li>\n    </ul>\n    <p>\n      Esempio:\n    </p>\n    <move-component [move]=\"parleyMove\" cardOnly=\"true\"></move-component>\n    <br/>\n    <p>\n      L'<b>innesco</b> (in grassetto) è una frase che descrive le circostanze in cui una Mossa interviene nella conversazione.\n      Non è possibile, tranne rare eccezioni, invocare l'uso di una Mossa direttamente.\n      La Mossa <i>Negoziare</i> è innescata quando un PG cerca di convincere un personaggio del GM\n      promettendogli qualcosa in cambio o minacciando ripercussioni. Interagire con personaggi del GM senza cercare\n      attivamente di manipolarne il comportamente non innesca <i>Negoziare</i>.\n    </p>\n    <p>\n      Alcune Mosse richiedono di fare un <b class=\"roll\">tiro</b> di dadi (testo in viola).\n      Se una Mossa dice <span class=\"roll\">tira+X</span> bisogna tirare 2 normali dadi a 6 facce e sommare il risultato a <b class=\"roll\">X</b>.\n      Di solito <b class=\"roll\">X</b> è un attributo del PG, in questo caso il valore di <b class=\"roll\">Carisma</b>.\n    </p>\n    <p>\n      Il meccanismo di <b>risoluzione</b> di un <b class=\"roll\">tiro</b> è molto semplice.\n      Basta trovare nella lista l'effetto corrispondente al valore totalizzato.\n      Gli effetti delle Mosse sono di norma suddivisi in 3:\n    </p>\n    <ul>\n      <li>10+. Se il totale è maggiore o pari a 10: l'azione del PG è considerata un successo.</li>\n      <li>7-9. Se il totale è 7, 8 o 9: il PG ottiene quello che voleva ma ci sono delle complicazioni.</li>\n      <li>6-. Se il totale è 6 o meno: in genere il PG non ottiene quello che sperava e, in ogni caso, il GM fa una Mossa.</li>\n    </ul>\n    <p>\n      Se una Mossa non elenca un effetto per il risultato <i>6-</i> è perchè da per scontato quanto scritto qui sopra.\n    </p>\n    <p>\n      La Mossa ha <b>effetto</b> quando il giocatore, aiutato dal GM, incorpora le indicazioni della risoluzione della Mossa nel contesto narrativo.\n      Che la Mossa abbia successo o meno, è imperativo fare in modo che le azioni dei PG abbiano conseguenze.\n      In mancanza di conseguenze dirette plausibili, specialmente in caso di 6-, il GM si occuperà di portare avanti la narrazioni per mezzo di una Mossa del GM.\n    </p>\n  </div>\n</div>\n\n<div class=\"rule-section\">\n    <h2>Mosse del GM</h2>\n    <div>\n      <p>\n        Le Mosse del GM sono un elenco di effetti da applicare direttamente al contesto narrativo.\n        Tuttavia queste Mosse non sono molto diverse dalle altre, hanno infatti un <b>innesco</b>:<br/>\n        <i><b>\n          Quando un giocatore tira un 6-,<br/>\n          Quando i giocatori guardano te per vedere cosa farai,<br/>\n          Quando si presenta un'occasione d'oro\n        </b></i>\n      </p>\n      <p>\n        Nessuna Mossa del GM prevede un <b>tiro</b> di dadi.\n      </p>\n      <p>\n        Il GM non dirà quale Mossa sta usando durante il gioco. Si limiterà ad applicarne l'<b>effetto</b>.\n      </p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player/intro/intro.component.scss":
/***/ (function(module, exports) {

module.exports = ".rule-section h2 {\n  color: #FFF;\n  background: #000;\n  font-family: 'Marcellus SC';\n  font-size: 14px;\n  margin-bottom: 0px; }\n\n.rule-section > div {\n  -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.75);\n  padding: 4px 10px;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 15px; }\n\n.rule-section > div p {\n    margin: 0px 0px 10px; }\n\n.rule-section > div p a {\n      color: #000; }\n"

/***/ }),

/***/ "./src/app/player/intro/intro.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var move_data_service_1 = __webpack_require__("./src/app/data/move-data.service.ts");
var IntroComponent = /** @class */ (function () {
    function IntroComponent(moveData) {
        this.moveData = moveData;
    }
    IntroComponent.prototype.ngOnInit = function () {
        this.parleyMove = this.moveData.findOneBySlug("parley");
    };
    IntroComponent = __decorate([
        core_1.Component({
            selector: 'app-intro',
            template: __webpack_require__("./src/app/player/intro/intro.component.html"),
            styles: [__webpack_require__("./src/app/player/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [move_data_service_1.MoveDataService])
    ], IntroComponent);
    return IntroComponent;
}());
exports.IntroComponent = IntroComponent;


/***/ }),

/***/ "./src/app/player/player-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var player_component_1 = __webpack_require__("./src/app/player/player.component.ts");
var intro_component_1 = __webpack_require__("./src/app/player/intro/intro.component.ts");
var basic_moves_component_1 = __webpack_require__("./src/app/player/basic-moves/basic-moves.component.ts");
var localize_router_1 = __webpack_require__("./node_modules/localize-router/index.js");
var special_moves_component_1 = __webpack_require__("./src/app/player/special-moves/special-moves.component.ts");
var classes_component_1 = __webpack_require__("./src/app/player/classes/classes.component.ts");
var heritages_component_1 = __webpack_require__("./src/app/player/heritages/heritages.component.ts");
var equipment_component_1 = __webpack_require__("./src/app/player/equipment/equipment.component.ts");
var routes = [
    {
        path: 'player',
        component: player_component_1.PlayerComponent,
        children: [
            {
                path: 'intro',
                component: intro_component_1.IntroComponent
            },
            {
                path: 'basic-moves',
                component: basic_moves_component_1.BasicMovesComponent
            },
            {
                path: 'special-moves',
                component: special_moves_component_1.SpecialMovesComponent
            },
            {
                path: 'playbooks',
                component: classes_component_1.ClassesComponent
            },
            {
                path: 'heritages',
                component: heritages_component_1.HeritagesComponent
            },
            {
                path: 'equipment',
                component: equipment_component_1.EquipmentComponent
            }
        ]
    }
];
var PlayerRoutingModule = /** @class */ (function () {
    function PlayerRoutingModule() {
    }
    PlayerRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                localize_router_1.LocalizeRouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], PlayerRoutingModule);
    return PlayerRoutingModule;
}());
exports.PlayerRoutingModule = PlayerRoutingModule;


/***/ }),

/***/ "./src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"player nav\">\n  <a routerLink=\"intro\" routerLinkActive=\"active\">{{ \"PAGE.PLAYER.NAV.INTRO\" | translate }}</a>\n  <a routerLink=\"basic-moves\" routerLinkActive=\"active\">{{ \"PAGE.PLAYER.NAV.BASIC_MOVES\" | translate }}</a>\n  <a routerLink=\"special-moves\" routerLinkActive=\"active\">{{ \"PAGE.PLAYER.NAV.SPECIAL_MOVES\" | translate }}</a>\n  <a routerLink=\"heritages\" routerLinkActive=\"active\">{{ \"PAGE.PLAYER.NAV.HERITAGES\" | translate }}</a>\n  <a routerLink=\"playbooks\" routerLinkActive=\"active\">{{ \"PAGE.PLAYER.NAV.PLAYBOOKS\" | translate }}</a>\n  <a routerLink=\"equipment\" routerLinkActive=\"active\">{{ \"PAGE.PLAYER.NAV.EQUIPMENT\" | translate }}</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/player/player.component.scss":
/***/ (function(module, exports) {

module.exports = ".nav {\n  padding: 0px 25px 9px 25px; }\n"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        core_1.Component({
            selector: 'app-player',
            template: __webpack_require__("./src/app/player/player.component.html"),
            styles: [__webpack_require__("./src/app/player/player.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;


/***/ }),

/***/ "./src/app/player/player.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var player_routing_module_1 = __webpack_require__("./src/app/player/player-routing.module.ts");
var intro_component_1 = __webpack_require__("./src/app/player/intro/intro.component.ts");
var player_component_1 = __webpack_require__("./src/app/player/player.component.ts");
var basic_moves_component_1 = __webpack_require__("./src/app/player/basic-moves/basic-moves.component.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var special_moves_component_1 = __webpack_require__("./src/app/player/special-moves/special-moves.component.ts");
var fighter_component_1 = __webpack_require__("./src/app/player/classes/fighter/fighter.component.ts");
var classes_component_1 = __webpack_require__("./src/app/player/classes/classes.component.ts");
var heritages_component_1 = __webpack_require__("./src/app/player/heritages/heritages.component.ts");
var equipment_component_1 = __webpack_require__("./src/app/player/equipment/equipment.component.ts");
var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                player_routing_module_1.PlayerRoutingModule
            ],
            declarations: [
                player_component_1.PlayerComponent,
                intro_component_1.IntroComponent,
                basic_moves_component_1.BasicMovesComponent,
                special_moves_component_1.SpecialMovesComponent,
                fighter_component_1.FighterComponent,
                classes_component_1.ClassesComponent,
                heritages_component_1.HeritagesComponent,
                equipment_component_1.EquipmentComponent
            ]
        })
    ], PlayerModule);
    return PlayerModule;
}());
exports.PlayerModule = PlayerModule;


/***/ }),

/***/ "./src/app/player/special-moves/special-moves.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"special-moves\">\n  <div class=\"multi-column-list\">\n    <div class=\"multi-column-item\" *ngFor=\"let move of specialMoves\">\n      <move-component [move]=\"move\" cardOnly=\"true\"></move-component>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player/special-moves/special-moves.component.scss":
/***/ (function(module, exports) {

module.exports = "@media (min-width: 960px) and (max-width: 1280px) {\n  .special-moves .multi-column-list {\n    width: 940px;\n    height: 1600px; }\n    .special-moves .multi-column-list .multi-column-item {\n      width: 50%; } }\n\n@media (min-width: 1281px) and (max-width: 1599px) {\n  .special-moves .multi-column-list {\n    width: 1260px;\n    height: 1300px; }\n    .special-moves .multi-column-list .multi-column-item {\n      width: 33%; } }\n\n@media (min-width: 1600px) {\n  .special-moves .multi-column-list {\n    width: 1560px;\n    height: 980px; }\n    .special-moves .multi-column-list .multi-column-item {\n      width: 25%; } }\n"

/***/ }),

/***/ "./src/app/player/special-moves/special-moves.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var move_data_service_1 = __webpack_require__("./src/app/data/move-data.service.ts");
var core_2 = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
var SpecialMovesComponent = /** @class */ (function () {
    function SpecialMovesComponent(translateService, moveDataService) {
        this.translateService = translateService;
        this.moveDataService = moveDataService;
    }
    SpecialMovesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.getTranslation(this.translateService.currentLang).subscribe(function (e) {
            _this.specialMoves = _this.moveDataService.findAll(function (m) {
                return m.tags.find(function (t) { return t.name == 'TAG.SPECIALMOVE'; }) != null;
            }).sort(function (a, b) {
                return _this.translateService.instant(a.name) < _this.translateService.instant(b.name) ? -1 : 1;
            });
        });
        this.translateService.onLangChange.subscribe(function (e) {
            _this.translateService.getTranslation(_this.translateService.currentLang).subscribe(function (e) {
                _this.specialMoves.sort(function (a, b) {
                    return _this.translateService.instant(a.name) < _this.translateService.instant(b.name) ? -1 : 1;
                });
            });
        });
    };
    SpecialMovesComponent = __decorate([
        core_1.Component({
            selector: 'app-special-moves',
            template: __webpack_require__("./src/app/player/special-moves/special-moves.component.html"),
            styles: [__webpack_require__("./src/app/player/special-moves/special-moves.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            move_data_service_1.MoveDataService])
    ], SpecialMovesComponent);
    return SpecialMovesComponent;
}());
exports.SpecialMovesComponent = SpecialMovesComponent;


/***/ }),

/***/ "./src/app/shared/gear-stack/gear.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gear-stack\">\n  <span class=\"item-name\">{{ stack.item.name | translate }}</span>\n  <span *ngIf=\"stack.size > 1\" class=\"stack-size\">x{{ stack.size }}</span>\n  <div class=\"item-tags\" *ngIf=\"showTags\">\n    <span class=\"tag\" *ngFor=\"let tag of tags; last as isLast; first as isFirst\"><span *ngIf=\"isFirst\">( </span><tag-component [tag]=\"tag\"></tag-component><span *ngIf=\"!isLast\">, </span><span *ngIf=\"isLast\">)</span></span>\n  </div>\n  <div *ngIf=\"stack.item.description\" class=\"description\" [innerHTML]=\"stack.item.description | translate\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/gear-stack/gear.component.scss":
/***/ (function(module, exports) {

module.exports = ".gear-stack {\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 14px; }\n  .gear-stack .item-tags {\n    display: inline-block; }\n  .gear-stack .item-tags .tag {\n      margin-left: 5px;\n      font-size: 12px;\n      font-style: italic;\n      color: #333;\n      font-family: 'Roboto Condensed', sans-serif; }\n  .gear-stack .item-tags .tag span {\n        display: inline-block; }\n  .gear-stack .description {\n    padding: 3px 0 5px 15px;\n    color: #666;\n    font-style: italic; }\n"

/***/ }),

/***/ "./src/app/shared/gear-stack/gear.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var GearStackComponent = /** @class */ (function () {
    function GearStackComponent() {
        this.showTags = true;
    }
    GearStackComponent.prototype.ngOnInit = function () {
        if (!this.stack) {
            this.stack = {
                item: this.item,
                size: 1
            };
        }
        ;
        this.tags = this.stack.item.tags.filter(function (t) { return t.domain === 'GEAR'; });
    };
    __decorate([
        core_1.Input("stack"),
        __metadata("design:type", Object)
    ], GearStackComponent.prototype, "stack", void 0);
    __decorate([
        core_1.Input("item"),
        __metadata("design:type", Object)
    ], GearStackComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input("showTags"),
        __metadata("design:type", Boolean)
    ], GearStackComponent.prototype, "showTags", void 0);
    GearStackComponent = __decorate([
        core_1.Component({
            selector: 'gear-stack-component',
            template: __webpack_require__("./src/app/shared/gear-stack/gear.component.html"),
            styles: [__webpack_require__("./src/app/shared/gear-stack/gear.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GearStackComponent);
    return GearStackComponent;
}());
exports.GearStackComponent = GearStackComponent;


/***/ }),

/***/ "./src/app/shared/heritage/heritage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"heritage\">\n  <div class=\"name\">{{ heritage.name | translate }}</div>\n  <ul>\n    <li *ngFor=\"let hMove of heritage.moves\">\n      <move-component [move]=\"hMove\" [nameOnly]=\"true\"></move-component>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/heritage/heritage.component.scss":
/***/ (function(module, exports) {

module.exports = ".heritage {\n  -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.75);\n  padding: 0;\n  margin: 10px 3px 3px; }\n  .heritage .name {\n    padding: 4px 10px;\n    font-size: 17px;\n    font-weight: normal;\n    background: black;\n    color: white;\n    font-family: 'Marcellus SC'; }\n  .heritage ul {\n    margin: 0;\n    padding: 5px 15px 5px 30px; }\n"

/***/ }),

/***/ "./src/app/shared/heritage/heritage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeritageComponent = /** @class */ (function () {
    function HeritageComponent() {
    }
    HeritageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input("heritage"),
        __metadata("design:type", Object)
    ], HeritageComponent.prototype, "heritage", void 0);
    HeritageComponent = __decorate([
        core_1.Component({
            selector: 'heritage-component',
            template: __webpack_require__("./src/app/shared/heritage/heritage.component.html"),
            styles: [__webpack_require__("./src/app/shared/heritage/heritage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeritageComponent);
    return HeritageComponent;
}());
exports.HeritageComponent = HeritageComponent;


/***/ }),

/***/ "./src/app/shared/move-detail/move-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"nameOnly\" class=\"move-name\">\n  <div class=\"move-card\">\n    <div class=\"name\">\n      <span *ngIf=\"!cardOnly\">{{ move.i18nPrefix+move.name | translate }}</span>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!nameOnly\" class=\"move-detail\">\n  <div class=\"move-card\">\n    <div class=\"name\">\n      <a *ngIf=\"cardOnly || linkOnly\" routerLink=\"/move/{{move._id}}\">{{ move.i18nPrefix+move.name | translate }}</a>\n      <span *ngIf=\"!cardOnly && !linkOnly\">{{ move.i18nPrefix+move.name | translate }}</span>\n      <span *ngIf=\"showTags && move.tags && move.tags.length > 0\" class=\"tags\">\n        <span *ngFor=\"let tag of move.tags; last as isLast\" class=\"tag\">{{ tag.name | translate }}\n          <span *ngIf=\"!isLast\">, </span>\n        </span>\n      </span>\n    </div>\n    <div *ngIf=\"!linkOnly\" class=\"rules\">\n      <div class=\"body\">\n        <span *ngIf=\"move.trigger\"><span class=\"trigger\" [innerHTML]=\"move.i18nPrefix+move.trigger | translate\"></span>,</span>\n        <span *ngIf=\"move.rollModifier\" class=\"roll\">{{ 'MOVE.UI.ROLL' | translate }}+<span class=\"roll-modifier\" [innerHTML]=\"move.rollModifier | translate\"></span>.</span>\n        <span *ngIf=\"move.effect\" class=\"effect\" [innerHTML]=\"move.i18nPrefix+move.effect | translate\"></span>\n        <ul *ngIf=\"move.rollResultBreakdown && move.rollResultBreakdown.length > 0\" class=\"result-breakdown\">\n          <li *ngFor=\"let rollResult of move.rollResultBreakdown\" class=\"result-breakdown-item\">\n            <div class=\"result-range\" [innerHTML]=\"rollResult.range\"></div>\n            <div class=\"result-effect\" [innerHTML]=\"move.i18nPrefix+rollResult.effect | translate\"></div>\n          </li>\n        </ul>\n        <div *ngIf=\"move.details\" class=\"details\" [innerHTML]=\"move.i18nPrefix+move.details | translate\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!linkOnly\" class=\"rules\">\n    <div *ngIf=\"!cardOnly\" class=\"comments\">\n      <div *ngFor=\"let comment of move.comments\" class=\"comment\" [innerHTML]=\"move.i18nPrefix+comment | translate\"></div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/move-detail/move-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".move-name {\n  color: black;\n  font-family: 'Marcellus SC';\n  font-size: 14px; }\n\n.move-detail {\n  margin: 10px 3px 3px;\n  font-family: 'Roboto Condensed', sans-serif; }\n\n.move-detail .rules {\n    background: transparent; }\n\n.move-detail .move-card {\n    -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n            box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n    background: rgba(255, 255, 255, 0.75); }\n\n.move-detail .move-card .name {\n      padding: 4px 10px;\n      font-size: 17px;\n      font-weight: normal;\n      background: black;\n      color: white;\n      font-family: 'Marcellus SC'; }\n\n.move-detail .move-card .name a {\n        color: white; }\n\n.move-detail .move-card .name a:hover {\n          color: #D1D1D1; }\n\n.move-detail .move-card .name .tags {\n        margin-left: 5px;\n        font-size: 12px;\n        font-style: italic;\n        color: silver;\n        font-family: 'Roboto Condensed', sans-serif; }\n\n.move-detail .move-card .body {\n      padding: 10px; }\n\n.move-detail .move-card .body .result-breakdown {\n        list-style-type: none;\n        padding-left: 22px;\n        margin: 3px 0; }\n\n.move-detail .move-card .body .result-breakdown .result-breakdown-item {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row; }\n\n.move-detail .move-card .body .result-breakdown .result-breakdown-item .result-range {\n            -webkit-box-flex: 0;\n                -ms-flex: 0 0 25px;\n                    flex: 0 0 25px;\n            padding-right: 3px;\n            display: inline-block;\n            font-weight: bold;\n            text-align: right; }\n\n.move-detail .move-card .body .result-breakdown .result-breakdown-item .result-effect {\n            -webkit-box-flex: 1;\n                -ms-flex: 1 1 auto;\n                    flex: 1 1 auto;\n            vertical-align: middle; }\n\n.move-detail .comments {\n    margin-top: 25px; }\n\n.move-detail .comment {\n    -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n            box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n    padding: 10px;\n    margin-bottom: 5px;\n    background: rgba(255, 255, 255, 0.75); }\n"

/***/ }),

/***/ "./src/app/shared/move-detail/move-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MoveDetailComponent = /** @class */ (function () {
    function MoveDetailComponent() {
        this.nameOnly = false;
        this.cardOnly = false;
        this.linkOnly = false;
        this.showTags = true;
    }
    MoveDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input("move"),
        __metadata("design:type", Object)
    ], MoveDetailComponent.prototype, "move", void 0);
    __decorate([
        core_1.Input("nameOnly"),
        __metadata("design:type", Boolean)
    ], MoveDetailComponent.prototype, "nameOnly", void 0);
    __decorate([
        core_1.Input("cardOnly"),
        __metadata("design:type", Boolean)
    ], MoveDetailComponent.prototype, "cardOnly", void 0);
    __decorate([
        core_1.Input("linkOnly"),
        __metadata("design:type", Boolean)
    ], MoveDetailComponent.prototype, "linkOnly", void 0);
    __decorate([
        core_1.Input("showTags"),
        __metadata("design:type", Boolean)
    ], MoveDetailComponent.prototype, "showTags", void 0);
    MoveDetailComponent = __decorate([
        core_1.Component({
            selector: 'move-component',
            template: __webpack_require__("./src/app/shared/move-detail/move-detail.component.html"),
            styles: [__webpack_require__("./src/app/shared/move-detail/move-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MoveDetailComponent);
    return MoveDetailComponent;
}());
exports.MoveDetailComponent = MoveDetailComponent;


/***/ }),

/***/ "./src/app/shared/playbook-card/playbook-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"playbook {{ playbook.slug }}\">\n\n  <h2 class=\"playbook-name\">\n    {{ playbook.className | translate }}\n  </h2>\n\n  <div class=\"playbook-sheet\">\n\n    <div class=\"base-stats\">\n      <div class=\"base-stat\">\n        <span class=\"stat\">{{ 'CHARACTER.ATTRIBUTE.MAX_HP' | translate }}</span><span class=\"value\">{{ playbook.maximumHP }}</span>\n      </div>\n      <div class=\"base-stat\">\n          <span class=\"stat\">{{ 'CHARACTER.ATTRIBUTE.DAMAGE' | translate }}</span><span class=\"value\">1d6{{ playbook.damageMod > -1 ? \"+\" : \"-\" }}{{ playbook.damageMod }}</span>\n      </div>\n      <div class=\"base-stat\">\n        <span class=\"stat\">{{ 'CHARACTER.ATTRIBUTE.LOAD' | translate }}</span><span class=\"value\">{{ playbook.load }}</span>\n      </div>\n    </div>\n\n    <div class=\"starting-gear\">\n      <h3 class=\"playbook-section-title\">{{ 'CHARACTER.ATTRIBUTE.STARTING_GEAR' | translate }}</h3>\n      <div class=\"gear-block\" *ngFor=\"let block of playbook.startingGear\">\n        <ul class=\"gear-list\" *ngIf=\"block.items\">\n          <li *ngFor=\"let stack of block.items\">\n            <gear-stack-component [stack]=\"stack\"></gear-stack-component>\n          </li>\n        </ul>\n        <div class=\"gear-selection\" *ngIf=\"block.title\">\n          <h4 class=\"gear-selection-title\">{{ block.titke | translate }}</h4>\n          <div>{{ 'CHOOSE '+block.arity }}</div>\n          <ul class=\"options\">\n            <li *ngFor=\"let option of block.options\">\n              <ul class=\"option-items\">\n                <li *ngFor=\"let stack of option.items\">\n                    <gear-stack-component [stack]=\"stack\"></gear-stack-component>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"starting-moves\">\n      <h3 class=\"playbook-section-title\">{{ 'CHARACTER.ATTRIBUTE.STARTING_MOVES' | translate }}</h3>\n      <div *ngFor=\"let moveBlock of playbook.startingMoves\">\n          <move-component *ngIf=\"moveBlock.move\" [move]=\"moveBlock.move\" [linkOnly]=\"true\" [showTags]=\"false\"></move-component>\n      </div>\n    </div>\n\n    <div class=\"advanced-moves\">\n      <h3 class=\"playbook-section-title\">{{ 'CHARACTER.ATTRIBUTE.ADVANCED_MOVES' | translate }}</h3>\n      <div *ngFor=\"let moveBlock of playbook.advancedMoves\">\n          <move-component *ngIf=\"moveBlock.move\" [move]=\"moveBlock.move\" [linkOnly]=\"true\" [showTags]=\"false\"></move-component>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/playbook-card/playbook-card.component.scss":
/***/ (function(module, exports) {

module.exports = ".playbook {\n  -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.75);\n  padding: 15px; }\n  .playbook h2 {\n    background: transparent;\n    color: black;\n    font-size: 31px;\n    font-weight: bold;\n    padding-left: 0px;\n    margin: 0px; }\n  .playbook .playbook-sheet .base-stats {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0px; }\n  .playbook .playbook-sheet .base-stats .base-stat {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      margin: 5px; }\n  .playbook .playbook-sheet .base-stats .base-stat .stat {\n        display: inline-block;\n        font-family: 'Marcellus SC', sans-serif;\n        border: 1px solid black;\n        background: black;\n        color: white;\n        padding: 5px 10px 5px 5px; }\n  .playbook .playbook-sheet .base-stats .base-stat .value {\n        display: inline-block;\n        padding: 5px 10px;\n        border: 1px solid black;\n        font-family: 'Marcellus SC', sans-serif;\n        font-weight: bold;\n        vertical-align: bottom; }\n  .playbook .playbook-sheet .starting-gear .gear-selection .options {\n    padding-left: 20px; }\n  .playbook .playbook-sheet .starting-gear .gear-selection .options > li {\n    list-style-type: none;\n    margin-bottom: 5px; }\n  .playbook .playbook-sheet .starting-gear .gear-selection .options > li:before {\n      content: \"\\2610\";\n      margin-right: 5px;\n      float: left; }\n  .playbook .playbook-sheet .starting-gear .gear-selection .option-items {\n    list-style-type: disc; }\n"

/***/ }),

/***/ "./src/app/shared/playbook-card/playbook-card.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CharacterClass_1 = __webpack_require__("./src/app/data/CharacterClass.ts");
var PlaybookCardComponent = /** @class */ (function () {
    function PlaybookCardComponent() {
    }
    PlaybookCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input("playbook"),
        __metadata("design:type", CharacterClass_1.CharacterClass)
    ], PlaybookCardComponent.prototype, "playbook", void 0);
    PlaybookCardComponent = __decorate([
        core_1.Component({
            selector: 'playbook-card-component',
            template: __webpack_require__("./src/app/shared/playbook-card/playbook-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/playbook-card/playbook-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaybookCardComponent);
    return PlaybookCardComponent;
}());
exports.PlaybookCardComponent = PlaybookCardComponent;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var move_detail_component_1 = __webpack_require__("./src/app/shared/move-detail/move-detail.component.ts");
var core_2 = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var show_character_component_1 = __webpack_require__("./src/app/shared/show-character/show-character.component.ts");
var heritage_component_1 = __webpack_require__("./src/app/shared/heritage/heritage.component.ts");
var playbook_card_component_1 = __webpack_require__("./src/app/shared/playbook-card/playbook-card.component.ts");
var gear_component_1 = __webpack_require__("./src/app/shared/gear-stack/gear.component.ts");
var tag_component_1 = __webpack_require__("./src/app/shared/tag/tag.component.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_2.TranslateModule,
                router_1.RouterModule.forChild([])
            ],
            declarations: [move_detail_component_1.MoveDetailComponent, show_character_component_1.ShowCharacterComponent, heritage_component_1.HeritageComponent, playbook_card_component_1.PlaybookCardComponent, gear_component_1.GearStackComponent, tag_component_1.TagComponent],
            exports: [
                move_detail_component_1.MoveDetailComponent,
                core_2.TranslateModule,
                show_character_component_1.ShowCharacterComponent,
                heritage_component_1.HeritageComponent,
                playbook_card_component_1.PlaybookCardComponent,
                gear_component_1.GearStackComponent,
                tag_component_1.TagComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/app/shared/show-character/show-character.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/show-character/show-character.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"character show-character {{ character.slug }}\">\n  <div *ngIf=\"character.name\">\n      <h1 class=\"title name\">\n        {{ character.name | translate }}<span class=\"class\">{{ character.className | translate }}</span>\n        <span class=\"level\">{{ 'CHARACTER.ATTRIBUTE.LEVEL' | translate }}<span class=\"value\">{{ character.level }}</span></span>\n      </h1>\n  </div>\n  <div *ngIf=\"!character.name\">\n      <h1 class=\"title class-name\">{{ character.className | translate }}</h1>\n  </div>\n\n  <div *ngIf=\"character.name\" class=\"look\">\n    <h2>{{ 'CHARACTER.ATTRIBUTE.LOOK' | translate }}</h2>\n    <div *ngFor=\"let aspect of character.aspects\" class=\"aspect\">\n      <span class=\"aspect-name\">{{ aspect.subject | translate }}</span>\n      <span class=\"aspect-value\">{{ aspect.adjective }}</span>\n    </div>\n  </div>\n\n  <div *ngIf=\"character.heritage\">\n    <h2>{{ character.heritage.name | translate }}</h2>\n    <move-component *ngFor=\"let move of character.heritage.moves\" [move]=\"move\" nameOnly=\"true\"></move-component>\n  </div>\n\n  <div class=\"starting-moves\">\n    <div *ngFor=\"let moveBlock of character.startingMoves\">\n        <move-component *ngIf=\"moveBlock.move\" [move]=\"moveBlock.move\" cardOnly=\"true\"></move-component>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/show-character/show-character.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CharacterClass_1 = __webpack_require__("./src/app/data/CharacterClass.ts");
var ShowCharacterComponent = /** @class */ (function () {
    function ShowCharacterComponent() {
    }
    ShowCharacterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input("character"),
        __metadata("design:type", CharacterClass_1.CharacterClass)
    ], ShowCharacterComponent.prototype, "character", void 0);
    ShowCharacterComponent = __decorate([
        core_1.Component({
            selector: 'show-character',
            template: __webpack_require__("./src/app/shared/show-character/show-character.component.html"),
            styles: [__webpack_require__("./src/app/shared/show-character/show-character.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowCharacterComponent);
    return ShowCharacterComponent;
}());
exports.ShowCharacterComponent = ShowCharacterComponent;


/***/ }),

/***/ "./src/app/shared/tag/tag.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"tag-component\">{{ tag.name | translate : {value: tag.value, sign:tag.value > -1 ? \"+\" : \"-\"} }}</span>\n"

/***/ }),

/***/ "./src/app/shared/tag/tag.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  font-size: 0px; }\n\n.tag-component {\n  font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/shared/tag/tag.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TagComponent = /** @class */ (function () {
    function TagComponent() {
    }
    TagComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input("tag"),
        __metadata("design:type", Object)
    ], TagComponent.prototype, "tag", void 0);
    TagComponent = __decorate([
        core_1.Component({
            selector: 'tag-component',
            template: __webpack_require__("./src/app/shared/tag/tag.component.html"),
            styles: [__webpack_require__("./src/app/shared/tag/tag.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TagComponent);
    return TagComponent;
}());
exports.TagComponent = TagComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map