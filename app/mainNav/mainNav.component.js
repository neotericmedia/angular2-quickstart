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
var core_1 = require('@angular/core');
var MainNavComponent = (function () {
    function MainNavComponent() {
        this.nav = [
            { id: 1, url: '#about', name: 'Technology' },
            { id: 2, url: '#download', name: 'Events' },
            { id: 3, url: '#contact', name: 'Partners' },
            { id: 4, url: '#contact', name: 'Aviva Digital Global' },
            { id: 5, url: '#contact', name: 'Careers' },
            { id: 6, url: '#contact', name: 'Social Media' },
            { id: 7, url: '#contact', name: 'Contact Us' }
        ];
    }
    MainNavComponent = __decorate([
        core_1.Component({
            selector: 'main-nav',
            templateUrl: 'app/mainNav/mainNav.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], MainNavComponent);
    return MainNavComponent;
}());
exports.MainNavComponent = MainNavComponent;
//# sourceMappingURL=mainNav.component.js.map