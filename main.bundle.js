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

module.exports = "<h1>{{ \"PAGE.HOME.TITLE\" | translate }}</h1>\n\n<div class=\"nav\">\n  <button (click)=\"selectLanguage('it')\">IT</button>\n  <button (click)=\"selectLanguage('en')\">EN</button>\n  <a routerLink=\"player\">Player</a>\n  <a routerLink=\"dungeon-master\">Dugneon Master</a>\n</div>\n\n<div class=\"main\">\n  <router-outlet></router-outlet>\n</div>\n"

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
var init_basic_moves_service_1 = __webpack_require__("./src/app/init-basic-moves.service.ts");
var core_2 = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
var init_tags_service_1 = __webpack_require__("./src/app/init-tags.service.ts");
var init_special_moves_service_1 = __webpack_require__("./src/app/init-special-moves.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router, route, initTags, initBasicMoves, initSpecialMoves) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.initTags = initTags;
        this.initBasicMoves = initBasicMoves;
        this.initSpecialMoves = initSpecialMoves;
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
        this.initBasicMoves.initData();
        this.initSpecialMoves.initData();
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
            init_basic_moves_service_1.InitBasicMovesService,
            init_special_moves_service_1.InitSpecialMovesService])
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
var init_basic_moves_service_1 = __webpack_require__("./src/app/init-basic-moves.service.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var move_page_component_1 = __webpack_require__("./src/app/move-page/move-page.component.ts");
var init_special_moves_service_1 = __webpack_require__("./src/app/init-special-moves.service.ts");
var init_tags_service_1 = __webpack_require__("./src/app/init-tags.service.ts");
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
            providers: [init_basic_moves_service_1.InitBasicMovesService, init_special_moves_service_1.InitSpecialMovesService, init_tags_service_1.InitTagsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


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
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [],
            providers: [move_data_service_1.MoveDataService, tag_data_service_1.TagDataService, class_data_service_1.ClassDataService]
        })
    ], DataModule);
    return DataModule;
}());
exports.DataModule = DataModule;


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

/***/ "./src/app/init-basic-moves.service.ts":
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
            name: "MOVE.ADVANTAGE.NAME",
            trigger: "MOVE.ADVANTAGE.TRIGGER",
            effect: "MOVE.ADVANTAGE.EFFECT"
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag, unchainedTag],
            slug: "disadvantage",
            name: "MOVE.DISADVANTAGE.NAME",
            trigger: "MOVE.DISADVANTAGE.TRIGGER",
            effect: "MOVE.DISADVANTAGE.EFFECT"
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "discern_realities",
            name: "MOVE.DISCERN_REALITIES.NAME",
            trigger: "MOVE.DISCERN_REALITIES.TRIGGER",
            rollModifier: "ATTRIBUTE.WIS",
            effect: "MOVE.DISCERN_REALITIES.EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.DISCERN_REALITIES.RES.10+" },
                { range: "7-9", effect: "MOVE.DISCERN_REALITIES.RES.7-9" }
            ],
            details: "MOVE.DISCERN_REALITIES.DETAILS",
            comments: [
                "MOVE.DISCERN_REALITIES.COMMENT.1",
                "MOVE.DISCERN_REALITIES.COMMENT.2",
                "MOVE.DISCERN_REALITIES.COMMENT.3",
                "MOVE.DISCERN_REALITIES.COMMENT.4"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "spout_lore",
            name: "MOVE.SPOUT_LORE.NAME",
            trigger: "MOVE.SPOUT_LORE.TRIGGER",
            rollModifier: "ATTRIBUTE.INT",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.SPOUT_LORE.RES.10+" },
                { range: "7-9", effect: "MOVE.SPOUT_LORE.RES.7-9" }
            ],
            details: "MOVE.SPOUT_LORE.DETAILS",
            comments: [
                "MOVE.SPOUT_LORE.COMMENT.1",
                "MOVE.SPOUT_LORE.COMMENT.2"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "defy_danger",
            name: "MOVE.DEFY_DANGER.NAME",
            trigger: "MOVE.DEFY_DANGER.TRIGGER",
            effect: "MOVE.DEFY_DANGER.EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.DEFY_DANGER.RES.10+" },
                { range: "7-9", effect: "MOVE.DEFY_DANGER.RES.7-9" }
            ],
            comments: [
                "MOVE.DEFY_DANGER.COMMENT.1"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "aid_or_interfere",
            name: "MOVE.AID_OR_INTERFERE.NAME",
            trigger: "MOVE.AID_OR_INTERFERE.TRIGGER",
            rollModifier: "MOVE.AID_OR_INTERFERE.ROLL_MODIFIER",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.AID_OR_INTERFERE.RES.10+" },
                { range: "7-9", effect: "MOVE.AID_OR_INTERFERE.RES.7-9" }
            ],
            comments: [
                "MOVE.AID_OR_INTERFERE.COMMENT.1"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag, unchainedTag],
            slug: "assist",
            name: "MOVE.ASSIST.NAME",
            trigger: "MOVE.ASSIST.TRIGGER",
            effect: "MOVE.ASSIST.EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.ASSIST.RES.10+" },
                { range: "7-9", effect: "MOVE.ASSIST.RES.7-9" }
            ],
            details: "MOVE.ASSIST.DETAILS",
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "parley",
            name: "MOVE.PARLEY.NAME",
            trigger: "MOVE.PARLEY.TRIGGER",
            rollModifier: "ATTRIBUTE.CHA",
            effect: "MOVE.PARLEY.EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.PARLEY.RES.10+" },
                { range: "7-9", effect: "MOVE.PARLEY.RES.7-9" }
            ],
            comments: [
                "MOVE.PARLEY.COMMENT.1",
                "MOVE.PARLEY.COMMENT.2"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "hack_and_slash",
            name: "MOVE.HACK_AND_SLASH.NAME",
            trigger: "MOVE.HACK_AND_SLASH.TRIGGER",
            rollModifier: "ATTRIBUTE.STR",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.HACK_AND_SLASH.RES.10+" },
                { range: "7-9", effect: "MOVE.HACK_AND_SLASH.RES.7-9" }
            ],
            comments: [
                "MOVE.HACK_AND_SLASH.COMMENT.1",
                "MOVE.HACK_AND_SLASH.COMMENT.2",
                "MOVE.HACK_AND_SLASH.COMMENT.3",
                "MOVE.HACK_AND_SLASH.COMMENT.4"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "volley",
            name: "MOVE.VOLLEY.NAME",
            trigger: "MOVE.VOLLEY.TRIGGER",
            rollModifier: "ATTRIBUTE.DEX",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.VOLLEY.RES.10+" },
                { range: "7-9", effect: "MOVE.VOLLEY.RES.7-9" }
            ],
            details: "MOVE.VOLLEY.DETAILS",
            comments: [
                "MOVE.VOLLEY.COMMENT.1",
                "MOVE.VOLLEY.COMMENT.2"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, basicMoveTag],
            slug: "defend",
            name: "MOVE.DEFEND.NAME",
            trigger: "MOVE.DEFEND.TRIGGER",
            rollModifier: "ATTRIBUTE.CON",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.DEFEND.RES.10+" },
                { range: "7-9", effect: "MOVE.DEFEND.RES.7-9" }
            ],
            details: "MOVE.DEFEND.DETAILS",
            comments: [
                "MOVE.DEFEND.COMMENT.1",
                "MOVE.DEFEND.COMMENT.2"
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

/***/ "./src/app/init-special-moves.service.ts":
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
            name: "MOVE.LAST_BREATH.NAME",
            trigger: "MOVE.LAST_BREATH.TRIGGER",
            rollModifier: "ATTRIBUTE.CON",
            effect: "MOVE.LAST_BREATH.EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.LAST_BREATH.RES.10+" },
                { range: "7-9", effect: "MOVE.LAST_BREATH.RES.7-9" },
                { range: "6-", effect: "MOVE.LAST_BREATH.RES.6-" }
            ],
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "encumbrance",
            name: "MOVE.ENCUMBRANCE.NAME",
            trigger: "MOVE.ENCUMBRANCE.TRIGGER",
            effect: "MOVE.ENCUMBRANCE.EFFECT",
            details: "MOVE.ENCUMBRANCE.DETAILS",
            rollResultBreakdown: [],
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "make_camp",
            name: "MOVE.MAKE_CAMP.NAME",
            trigger: "MOVE.MAKE_CAMP.TRIGGER",
            effect: "MOVE.MAKE_CAMP.EFFECT",
            rollResultBreakdown: [],
            comments: [
                "MOVE.MAKE_CAMP.COMMENT.1",
                "MOVE.MAKE_CAMP.COMMENT.2"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "take_watch",
            name: "MOVE.TAKE_WATCH.NAME",
            trigger: "MOVE.TAKE_WATCH.TRIGGER",
            rollModifier: "ATTRIBUTE.WIS",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.TAKE_WATCH.RES.10+" },
                { range: "7-9", effect: "MOVE.TAKE_WATCH.RES.7-9" },
                { range: "6-", effect: "MOVE.TAKE_WATCH.RES.6-" }
            ],
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "UAPJ",
            name: "MOVE.UAPJ.NAME",
            trigger: "MOVE.UAPJ.TRIGGER",
            effect: "MOVE.UAPJ.EFFECT",
            rollModifier: "ATTRIBUTE.WIS",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.UAPJ.RES.10+" },
                { range: "7-9", effect: "MOVE.UAPJ.RES.7-9" }
            ],
            comments: [
                "MOVE.UAPJ.COMMENT.1",
                "MOVE.UAPJ.COMMENT.2",
                "MOVE.UAPJ.COMMENT.3"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "CAROUSE",
            name: "MOVE.CAROUSE.NAME",
            trigger: "MOVE.CAROUSE.TRIGGER",
            effect: "MOVE.CAROUSE.EFFECT",
            rollModifier: "MOVE.CAROUSE.ROLL_MODIFIER",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.CAROUSE.RES.10+" },
                { range: "7-9", effect: "MOVE.CAROUSE.RES.7-9" },
                { range: "6-", effect: "MOVE.CAROUSE.RES.6-" }
            ],
            details: "MOVE.CAROUSE.DETAILS",
            comments: [
                "MOVE.CAROUSE.COMMENT.1",
                "MOVE.CAROUSE.COMMENT.2",
                "MOVE.CAROUSE.COMMENT.3"
            ]
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "SUPPLY",
            name: "MOVE.SUPPLY.NAME",
            trigger: "MOVE.SUPPLY.TRIGGER",
            rollModifier: "ATTRIBUTE.CHA",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.SUPPLY.RES.10+" },
                { range: "7-9", effect: "MOVE.SUPPLY.RES.7-9" }
            ],
            details: "MOVE.SUPPLY.DETAILS"
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "RECOVER",
            name: "MOVE.RECOVER.NAME",
            trigger: "MOVE.RECOVER.TRIGGER",
            effect: "MOVE.RECOVER.EFFECT"
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "BOLSTER",
            name: "MOVE.BOLSTER.NAME",
            trigger: "MOVE.BOLSTER.TRIGGER",
            effect: "MOVE.BOLSTER.EFFECT",
            details: "MOVE.BOLSTER.DETAILS"
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "RECRUIT",
            name: "MOVE.RECRUIT.NAME",
            trigger: "MOVE.RECRUIT.TRIGGER",
            effect: "MOVE.RECRUIT.EFFECT",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.RECRUIT.RES.10+" },
                { range: "7-9", effect: "MOVE.RECRUIT.RES.7-9" },
                { range: "6-", effect: "MOVE.RECRUIT.RES.6-" }
            ],
            details: "MOVE.RECRUIT.DETAILS",
            comments: []
        });
        this.moveData.insert({
            tags: [playerMoveTag, specialMoveTag],
            slug: "OUTSTANDING_WARRANTS",
            name: "MOVE.OUTSTANDING_WARRANTS.NAME",
            trigger: "MOVE.OUTSTANDING_WARRANTS.TRIGGER",
            rollResultBreakdown: [
                { range: "10+", effect: "MOVE.OUTSTANDING_WARRANTS.RES.10+" },
                { range: "7-9", effect: "MOVE.OUTSTANDING_WARRANTS.RES.7-9" }
            ],
            details: "MOVE.OUTSTANDING_WARRANTS.DETAILS",
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

/***/ "./src/app/init-tags.service.ts":
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

module.exports = "<div class=\"basic-moves\">\n  <h1>{{ 'PAGE.BASIC_MOVES.TITLE' | translate }}</h1>\n  <div class=\"multi-column-list\">\n    <div class=\"multi-column-item\" *ngFor=\"let move of basicMoves\">\n      <move-component [move]=\"move\" cardOnly=\"true\"></move-component>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player/basic-moves/basic-moves.component.scss":
/***/ (function(module, exports) {

module.exports = ""

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

/***/ "./src/app/player/intro/intro.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  intro works!\n</p>\n"

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
            styles: [__webpack_require__("./src/app/player/intro/intro.component.css")]
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
var routes = [
    {
        path: 'player',
        component: player_component_1.PlayerComponent,
        children: [
            {
                path: '',
                component: intro_component_1.IntroComponent
            },
            {
                path: 'basic-moves',
                component: basic_moves_component_1.BasicMovesComponent
            },
            {
                path: 'special-moves',
                component: special_moves_component_1.SpecialMovesComponent
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

/***/ "./src/app/player/player.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n  <a routerLink=\"player\">Intro</a>\n  <a routerLink=\"basic-moves\">Basic Moves</a>\n  <a routerLink=\"special-moves\">Special Moves</a>\n</div>\n<router-outlet></router-outlet>\n"

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
            styles: [__webpack_require__("./src/app/player/player.component.css")]
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
                special_moves_component_1.SpecialMovesComponent
            ]
        })
    ], PlayerModule);
    return PlayerModule;
}());
exports.PlayerModule = PlayerModule;


/***/ }),

/***/ "./src/app/player/special-moves/special-moves.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"special-moves\">\n  <h1>{{ 'PAGE.SPECIAL_MOVES.TITLE' | translate }}</h1>\n  <div class=\"multi-column-list\">\n    <div class=\"multi-column-item\" *ngFor=\"let move of specialMoves\">\n      <move-component [move]=\"move\" cardOnly=\"true\"></move-component>\n    </div>\n  </div>\n</div>\n"

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

/***/ "./src/app/shared/move-detail/move-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"move-detail\">\n  <div class=\"move-card\">\n    <div class=\"name\">\n      <a *ngIf=\"cardOnly\" routerLink=\"/move/{{move._id}}\">{{ move.name | translate }}</a>\n      <span *ngIf=\"!cardOnly\">{{ move.name | translate }}</span>\n      <span *ngIf=\"move.tags && move.tags.length > 0\" class=\"tags\">\n        <span *ngFor=\"let tag of move.tags; last as isLast\" class=\"tag\">{{ tag.name | translate }}\n          <span *ngIf=\"!isLast\">, </span>\n        </span>\n      </span>\n    </div>\n    <div *ngIf=\"!linkOnly\" class=\"rules\">\n      <div class=\"body\">\n        <span *ngIf=\"move.trigger\" class=\"trigger\" [innerHTML]=\"move.trigger | translate\"></span>,\n        <span *ngIf=\"move.rollModifier\" class=\"roll\">{{ 'MOVE.UI.ROLL' | translate }}+<span class=\"roll-modifier\" [innerHTML]=\"move.rollModifier | translate\"></span>.</span>\n        <span *ngIf=\"move.effect\" class=\"effect\" [innerHTML]=\"move.effect | translate\"></span>\n        <ul *ngIf=\"move.rollResultBreakdown && move.rollResultBreakdown.length > 0\" class=\"result-breakdown\">\n          <li *ngFor=\"let rollResult of move.rollResultBreakdown\" class=\"result-breakdown-item\">\n            <div class=\"result-range\" [innerHTML]=\"rollResult.range\"></div>\n            <div class=\"result-effect\" [innerHTML]=\"rollResult.effect | translate\"></div>\n          </li>\n        </ul>\n        <div *ngIf=\"move.details\" class=\"details\" [innerHTML]=\"move.details | translate\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!linkOnly\" class=\"rules\">\n    <div *ngIf=\"!cardOnly\" class=\"comments\">\n      <div *ngFor=\"let comment of move.comments\" class=\"comment\" [innerHTML]=\"comment | translate\"></div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/move-detail/move-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".move-detail {\n  margin: 10px 3px 3px;\n  font-family: 'Roboto Condensed', sans-serif; }\n  .move-detail .rules {\n    background: transparent; }\n  .move-detail .move-card {\n    -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n            box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n    background: rgba(255, 255, 255, 0.75); }\n  .move-detail .move-card .name {\n      padding: 4px 10px;\n      font-size: 17px;\n      font-weight: normal;\n      background: black;\n      color: white;\n      font-family: 'Marcellus SC'; }\n  .move-detail .move-card .name a {\n        color: white; }\n  .move-detail .move-card .name a:hover {\n          color: #D1D1D1; }\n  .move-detail .move-card .name .tags {\n        margin-left: 5px;\n        font-size: 12px;\n        font-style: italic;\n        color: silver;\n        font-family: 'Roboto Condensed', sans-serif; }\n  .move-detail .move-card .body {\n      padding: 10px; }\n  .move-detail .move-card .body .trigger {\n        font-style: italic;\n        font-weight: bold; }\n  .move-detail .move-card .body .roll {\n        color: #7000AA;\n        font-weight: bold; }\n  .move-detail .move-card .body .result-breakdown {\n        list-style-type: none;\n        padding-left: 22px;\n        margin: 3px 0; }\n  .move-detail .move-card .body .result-breakdown .result-breakdown-item {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row; }\n  .move-detail .move-card .body .result-breakdown .result-breakdown-item .result-range {\n            -webkit-box-flex: 0;\n                -ms-flex: 0 0 25px;\n                    flex: 0 0 25px;\n            padding-right: 3px;\n            display: inline-block;\n            font-weight: bold;\n            text-align: right; }\n  .move-detail .move-card .body .result-breakdown .result-breakdown-item .result-effect {\n            -webkit-box-flex: 1;\n                -ms-flex: 1 1 auto;\n                    flex: 1 1 auto;\n            vertical-align: middle; }\n  .move-detail .comments {\n    margin-top: 25px; }\n  .move-detail .comment {\n    -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n            box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);\n    padding: 10px;\n    margin-bottom: 5px;\n    background: rgba(255, 255, 255, 0.75); }\n"

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
        this.cardOnly = false;
        this.linkOnly = false;
    }
    MoveDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input("move"),
        __metadata("design:type", Object)
    ], MoveDetailComponent.prototype, "move", void 0);
    __decorate([
        core_1.Input("cardOnly"),
        __metadata("design:type", Boolean)
    ], MoveDetailComponent.prototype, "cardOnly", void 0);
    __decorate([
        core_1.Input("linkOnly"),
        __metadata("design:type", Boolean)
    ], MoveDetailComponent.prototype, "linkOnly", void 0);
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
            declarations: [move_detail_component_1.MoveDetailComponent],
            exports: [
                move_detail_component_1.MoveDetailComponent,
                core_2.TranslateModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


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