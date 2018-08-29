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

module.exports = "<h1>{{ \"PAGE.HOME.TITLE\" | translate }}</h1>\n\n<div class=\"nav\">\n  <div class=\"lang\">\n    <button (click)=\"selectLanguage('it')\">IT</button>\n    <button (click)=\"selectLanguage('en')\">EN</button>\n  </div>\n  <a routerLink=\"player/intro\" routerLinkActive=\"active\">{{ \"PAGE.HOME.NAV.PLAYER\" | translate }}</a>\n  <a routerLink=\"dungeon-master\" routerLinkActive=\"active\">{{ \"PAGE.HOME.NAV.GM\" | translate }}</a>\n  <!-- <span class=\"separator\">.</span> -->\n</div>\n\n<div class=\"main\">\n  <router-outlet></router-outlet>\n</div>\n\n<div class=\"footer\">\n  <div class=\"attribution\" [innerHTML]=\"'PAGE.HOME.ATTRIBUTION.DW' | translate\"></div>\n</div>\n"

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
                shared_module_1.SharedModule
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
    MoveDataService.prototype.findBySlug = function (slug) {
        return this.findAll(function (move) { return move.slug == slug; });
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
            rollModifier: "ROLL_MODIFIER",
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
                Object.assign({ value: 1 }, armor),
                Object.assign({ value: 1 }, weight),
                Object.assign({ value: 10 }, coin)
            ]
        });
        this.gearDataService.insert({
            slug: "armor_chain",
            name: "GEAR.ARMOR_CHAIN.NAME",
            tags: [
                armorItem,
                worn,
                Object.assign({ value: 1 }, armor),
                Object.assign({ value: 1 }, weight),
                Object.assign({ value: 10 }, coin)
            ]
        });
        this.gearDataService.insert({
            slug: "armor_scale",
            name: "GEAR.ARMOR_SCALE.NAME",
            tags: [
                armorItem,
                worn,
                clumsy,
                Object.assign({ value: 2 }, armor),
                Object.assign({ value: 3 }, weight),
                Object.assign({ value: 50 }, coin)
            ]
        });
        this.gearDataService.insert({
            slug: "armor_plate",
            name: "GEAR.ARMOR_PLATE.NAME",
            tags: [
                armorItem,
                worn,
                clumsy,
                Object.assign({ value: 3 }, armor),
                Object.assign({ value: 4 }, weight),
                Object.assign({ value: 350 }, coin)
            ]
        });
        this.gearDataService.insert({
            slug: "shield",
            name: "GEAR.SHIELD.NAME",
            tags: [
                armorItem,
                Object.assign({ value: 1 }, armor),
                Object.assign({ value: 2 }, weight),
                Object.assign({ value: 15 }, coin)
            ]
        });
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
            rollModifier: "ROLL_MODIFIER",
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
    };
    InitTagsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [tag_data_service_1.TagDataService])
    ], InitTagsService);
    return InitTagsService;
}());
exports.InitTagsService = InitTagsService;


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

module.exports = "<div class=\"rule-section\">\n  <h2>Cos'è Dungeon World - Unchained</h2>\n  <div>\n    <p>\n      Dungeon World - Unchained è un gioco di ruolo per 2 o più<a href=\"#fn1\" class=\"fn\">*</a> giocatori.\n      Per giocare servono questa app, carta e penna, un tavolo e delle sedie o un software di videochiamata.\n    </p>\n    <p>\n      Nella pratica, Dungeon World - Unchained è una conversazione.\n      I giocatori parlano tra loro delle caratteristiche, azioni ed emozioni di personaggi di loro invenzione.\n      Le regole del gioco intervengono nella conversazione tramite le Mosse.\n      Le Mosse aggiungono un pizzico di imprevedibilità tramite il tiro di dadi e rinforzano gli stereotipi del genere fantasy.\n    </p>\n    <p class=\"foot-note\" id=\"fn1\">\n      È consigliato limitare il numero di giocatori a 5-7 massimo per motivi pratici\n    </p>\n  </div>\n</div>\n\n<div class=\"rule-section\">\n  <h2>Come si gioca</h2>\n  <div>\n    <p>\n      Uno dei giocatori verrà scelto per fare il Game Master (abbreviato GM).\n      Ciascuno degli altri controllerà un personaggio protagonista (abbreviato PG).\n      Il GM si occuperà di guidare la conversazione e di gestire gli antagonisti.\n      È possibile, ma non obbligatorio, interpretare in modo teatrale i personaggi.\n      Incoraggiate sono invece descrizioni ricche di dettagli e dinamismo.\n    </p>\n    <p>\n      Dungeon World non ha un rigida struttura a turni.\n      I giocatori vorranno ricordare che ascoltare è una qualità preziosa in ogni conversazione.\n      Collaborare attivamente facendo domande, dando e accettando suggerimenti di solito porta buoni risultati.\n    </p>\n    <p>\n      Una tipica sessione di gioco si svolge così:\n    </p>\n    <ul style=\"list-style-type: decimal;\">\n      <li>Il GM descrive l'ambiente e la situazione in cui si trovano i PG.</li>\n      <li>Il GM chiede a tutti o alcuni giocatori: 'Cosa fai?'.</li>\n      <li>Il/I giocatori descrivono le azioni/reazioni dei propri PG.</li>\n      <li>Il GM indica se e quali Mosse sono state innescate.</li>\n      <li>Le Mosse innescate vengono risolte e i rispettivi risultati incorporati nella narrazione.</li>\n      <li>Ripeti dall'inizio.</li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"rule-section\">\n  <h2>Le Mosse</h2>\n  <div>\n    <p>\n      Una Mossa è fatta di pochi semplici elementi:\n    </p>\n    <ul style=\"list-style-type: decimal;\">\n      <li>Innesco</li>\n      <li>Tiro e Risoluzione</li>\n      <li>Effetto</li>\n    </ul>\n    <p>\n      Esempio: Negoziare<br/>\n      <i>\n        <b>Quando influenzi un personaggio del GM facendo leva su desideri o paure</b> (innesco),\n        tira+Carisma (tiro):<br/>\n        * 10+ Ti accontentarà se gli prometti di fare la tua parte. (risoluzione)<br/>\n        * 7-9 Ti accontenterà, ma vuole subito una prova tangibile che farai la tua parte. (risoluzione)<br/>\n        * 6- Il GM fa una Mossa a sua scelta.\n      </i>\n    </p>\n    <p>\n      L'<b>innesco</b> è una frase che descrive le circostanze in cui una Mossa interviene nella conversazione.\n      Non è possibile, tranne rare eccezioni, invocare l'uso di una Mossa direttamente.\n      La Mossa <i>Negoziare</i> è innescata quando un PG sta chiaramente cercando di ottenere qualcosa da un personaggio del GM\n      ed è disposto a promettere qualcosa in cambio o minaccia ripercussioni. Interagire con personaggi del GM senza cercare\n      attivamente di manipolarne il comportamente non innesca questa Mossa.\n    </p>\n    <p>\n      Alcune Mosse richiedono di fare un <b>tiro</b> di dadi.\n      Quando una Mossa dice <i>tira+X</i> il giocatore tira 2 dadi a 6 facce e somma il risultato dei due dadi al valore di <i>X</i>.\n      Di solito <i>X</i> è un attributo del PG, in questo caso il valore di <i>Carisma</i>.\n    </p>\n    <p>\n      Il meccanismo di <b>risoluzione</b> di un tiro di dadi è molto semplice.\n      Le opzioni elencate solitamente coprono i casi in cui il valore del tiro risulti essere:\n    </p>\n    <ul>\n      <li>Superiore a 10 (10+). In questo caso l'azione del PG è considerata un successo.</li>\n      <li>Compreso tra 7 e 9 (7-9). Il PG ottiene quello che voleva ma ci sono delle complicazioni.</li>\n      <li>\n        Uguale o inferiore a 6 (6-).\n        In genere il PG non ottiene quello che sperava e, in ogni caso, il GM fa una Mossa.\n        Molto spesso le Mosse non elencano questo risultato esplicitamente.\n      </li>\n    </ul>\n    <p>\n      La Mossa ha <b>effetto</b> quando il giocatore, aiutato dal GM, incorpora le indicazioni della risoluzione della Mossa nel contesto narrativo.\n      Che la Mossa abbia successo o meno, è imperativo fare in modo che le azioni dei PG abbiano conseguenze.\n      In mancanza di conseguenze dirette plausibili, specialmente in caso di 6-, il GM si occuperà di portare avanti la narrazioni per mezzo di una Mossa del GM.\n    </p>\n  </div>\n</div>\n\n<div class=\"rule-section\">\n    <h2>Mosse del GM</h2>\n    <div>\n      <p>\n        Le Mosse del GM sono un elenco di effetti da applicare direttamente al contesto narrativo.\n        Tuttavia queste Mosse non sono molto diverse dalle altre, hanno infatti un <b>innesco</b>:<br/>\n        <i><b>\n          Quando un giocatore tira un 6-,<br/>\n          Quando i giocatori guardano te per vedere cosa farai,<br/>\n          Quando si presenta un'occasione d'oro\n        </b></i>\n      </p>\n      <p>\n        Nessuna Mossa del GM prevede un <b>tiro</b> di dadi.\n      </p>\n      <p>\n        Il GM non dirà quale Mossa sta usando durante il gioco. Si limiterà ad applicarne l'<b>effetto</b>.\n      </p>\n    </div>\n</div>\n"

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
var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        core_1.Component({
            selector: 'app-intro',
            template: __webpack_require__("./src/app/player/intro/intro.component.html"),
            styles: [__webpack_require__("./src/app/player/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"gear-stack\">\n  <span class=\"item-name\">{{ stack.item.name | translate }}</span>\n  <span *ngIf=\"stack.size > 1\" class=\"stack-size\">x{{ stack.size }}</span>\n  <div class=\"item-tags\" *ngIf=\"showTags\">\n    <span class=\"tag\" *ngFor=\"let tag of tags; last as isLast; first as isFirst\"><span *ngIf=\"isFirst\">( </span><tag-component [tag]=\"tag\"></tag-component><span *ngIf=\"!isLast\">, </span><span *ngIf=\"isLast\">)</span></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/gear-stack/gear.component.scss":
/***/ (function(module, exports) {

module.exports = ".gear-stack {\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 14px; }\n  .gear-stack .item-tags {\n    display: inline-block; }\n  .gear-stack .item-tags .tag {\n      margin-left: 5px;\n      font-size: 12px;\n      font-style: italic;\n      color: #333;\n      font-family: 'Roboto Condensed', sans-serif; }\n  .gear-stack .item-tags .tag span {\n        display: inline-block; }\n"

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

module.exports = ".move-name {\n  color: black;\n  font-family: 'Marcellus SC';\n  font-size: 14px; }\n\n.move-detail {\n  margin: 10px 3px 3px;\n  font-family: 'Roboto Condensed', sans-serif; }\n\n.move-detail .rules {\n    background: transparent; }\n\n.move-detail .move-card {\n    -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n            box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n    background: rgba(255, 255, 255, 0.75); }\n\n.move-detail .move-card .name {\n      padding: 4px 10px;\n      font-size: 17px;\n      font-weight: normal;\n      background: black;\n      color: white;\n      font-family: 'Marcellus SC'; }\n\n.move-detail .move-card .name a {\n        color: white; }\n\n.move-detail .move-card .name a:hover {\n          color: #D1D1D1; }\n\n.move-detail .move-card .name .tags {\n        margin-left: 5px;\n        font-size: 12px;\n        font-style: italic;\n        color: silver;\n        font-family: 'Roboto Condensed', sans-serif; }\n\n.move-detail .move-card .body {\n      padding: 10px; }\n\n.move-detail .move-card .body .trigger {\n        font-style: italic;\n        font-weight: bold; }\n\n.move-detail .move-card .body .roll {\n        color: #7000AA;\n        font-weight: bold; }\n\n.move-detail .move-card .body .result-breakdown {\n        list-style-type: none;\n        padding-left: 22px;\n        margin: 3px 0; }\n\n.move-detail .move-card .body .result-breakdown .result-breakdown-item {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row; }\n\n.move-detail .move-card .body .result-breakdown .result-breakdown-item .result-range {\n            -webkit-box-flex: 0;\n                -ms-flex: 0 0 25px;\n                    flex: 0 0 25px;\n            padding-right: 3px;\n            display: inline-block;\n            font-weight: bold;\n            text-align: right; }\n\n.move-detail .move-card .body .result-breakdown .result-breakdown-item .result-effect {\n            -webkit-box-flex: 1;\n                -ms-flex: 1 1 auto;\n                    flex: 1 1 auto;\n            vertical-align: middle; }\n\n.move-detail .comments {\n    margin-top: 25px; }\n\n.move-detail .comment {\n    -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n            box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n    padding: 10px;\n    margin-bottom: 5px;\n    background: rgba(255, 255, 255, 0.75); }\n"

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