"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductProvider = /** @class */ (function () {
    function ProductProvider(http) {
        this.http = http;
    }
    ProductProvider.prototype.list = function (query) {
        return this.http.post('/api/product/list', query)
            .map(function (r) {
            return r.json();
        });
    };
    ProductProvider.prototype.view = function (id) {
        return this.http.post('/api/product/view', { id: id })
            .map(function (r) {
            return r.json();
        });
    };
    ProductProvider.prototype.special = function () {
        return this.http.post('/api/product/special', {})
            .map(function (r) {
            return r.json();
        });
    };
    ProductProvider = __decorate([
        core_1.Injectable()
    ], ProductProvider);
    return ProductProvider;
}());
exports.ProductProvider = ProductProvider;
