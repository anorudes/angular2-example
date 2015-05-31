/// <reference path="../../typings/angular2/angular2.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var menuStore_js_1 = require('../services/menuStore.js');
var menuNav = (function () {
    function menuNav(menuStore) {
        this.data = menuStore.getAll();
    }
    menuNav = __decorate([
        angular2_1.Component({
            selector: 'menu-nav',
            injectables: [menuStore_js_1.menuStore]
        }),
        angular2_1.View({
            template: "\n  <ul>\n    <li *for=\"#item of data\">\n      {{ item }\n    </li>\n  </ul>\n  ",
            directives: [angular2_1.For]
        })
    ], menuNav);
    return menuNav;
})();
exports.menuNav = menuNav;
//# sourceMappingURL=menu-nav.js.map