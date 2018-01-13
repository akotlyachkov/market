import * as i0 from "@angular/core";
import * as i1 from "./module";
import * as i2 from "../layouts/default.ngfactory";
import * as i3 from "./specials/specials.ngfactory";
import * as i4 from "./delivery/delivery.ngfactory";
import * as i5 from "./contacts/contacts.ngfactory";
import * as i6 from "./cart/cart/cart.ngfactory";
import * as i7 from "./cart/history/history.ngfactory";
import * as i8 from "./stocks/stocks.ngfactory";
import * as i9 from "./view/view.ngfactory";
import * as i10 from "./catalog/catalog.ngfactory";
import * as i11 from "./notfound/page-notfound.ngfactory";
import * as i12 from "@angular/common";
import * as i13 from "@angular/platform-browser";
import * as i14 from "@angular/forms";
import * as i15 from "@angular/router";
import * as i16 from "../layouts/default";
import * as i17 from "./specials/specials";
import * as i18 from "./delivery/delivery";
import * as i19 from "./contacts/contacts";
import * as i20 from "./cart/cart/cart";
import * as i21 from "./cart/history/history";
import * as i22 from "./stocks/stocks";
import * as i23 from "./view/view";
import * as i24 from "./catalog/catalog";
import * as i25 from "./notfound/page-notfound";
import * as i26 from "../controls/module";
import * as i27 from "./specials/components/module";
import * as i28 from "./view/components/module";
import * as i29 from "./cart/components/module";
import * as i30 from "./catalog/components/module";
var PagesModuleNgFactory = i0.ɵcmf(i1.PagesModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.DefaultLayoutNgFactory, i3.SpecialsPageNgFactory, i4.DeliveryPageNgFactory, i5.ContactsPageNgFactory, i6.CartPageNgFactory, i7.HistoryPageNgFactory, i8.StocksPageNgFactory, i9.ViewPageNgFactory, i10.CatalogPageNgFactory, i11.NotfoundPageNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i12.NgLocalization, i12.NgLocaleLocalization, [i0.LOCALE_ID, [2, i12.ɵa]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i13.DomSanitizer, i13.ɵe, [i12.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i13.DomSanitizer]), i0.ɵmpd(4608, i13.HAMMER_GESTURE_CONFIG, i13.HammerGestureConfig, []), i0.ɵmpd(5120, i13.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i13.ɵDomEventsPlugin(p0_0, p0_1), new i13.ɵKeyEventsPlugin(p1_0), new i13.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i12.DOCUMENT, i0.NgZone, i12.DOCUMENT, i12.DOCUMENT, i13.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i13.EventManager, i13.EventManager, [i13.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i13.ɵDomSharedStylesHost, i13.ɵDomSharedStylesHost, [i12.DOCUMENT]), i0.ɵmpd(4608, i13.ɵDomRendererFactory2, i13.ɵDomRendererFactory2, [i13.EventManager, i13.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i13.ɵDomRendererFactory2]), i0.ɵmpd(6144, i13.ɵSharedStylesHost, null, [i13.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i13.Meta, i13.Meta, [i12.DOCUMENT]), i0.ɵmpd(4608, i13.Title, i13.Title, [i12.DOCUMENT]), i0.ɵmpd(4608, i14.ɵi, i14.ɵi, []), i0.ɵmpd(5120, i15.ActivatedRoute, i15.ɵf, [i15.Router]), i0.ɵmpd(4608, i15.NoPreloading, i15.NoPreloading, []), i0.ɵmpd(6144, i15.PreloadingStrategy, null, [i15.NoPreloading]), i0.ɵmpd(135680, i15.RouterPreloader, i15.RouterPreloader, [i15.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i15.PreloadingStrategy]), i0.ɵmpd(4608, i15.PreloadAllModules, i15.PreloadAllModules, []), i0.ɵmpd(5120, i15.ROUTER_INITIALIZER, i15.ɵi, [i15.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i15.ROUTER_INITIALIZER]), i0.ɵmpd(512, i12.CommonModule, i12.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i13.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i15.ɵb()]; }, []), i0.ɵmpd(512, i15.ɵg, i15.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0) { return [i13.ɵh(p0_0), i15.ɵh(p1_0)]; }, [[2, i0.NgProbeToken], i15.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i13.BrowserModule, i13.BrowserModule, [[3, i13.BrowserModule]]), i0.ɵmpd(1024, i15.ɵa, i15.ɵd, [[3, i15.Router]]), i0.ɵmpd(512, i15.UrlSerializer, i15.DefaultUrlSerializer, []), i0.ɵmpd(512, i15.ChildrenOutletContexts, i15.ChildrenOutletContexts, []), i0.ɵmpd(256, i15.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i12.LocationStrategy, i15.ɵc, [i12.PlatformLocation, [2, i12.APP_BASE_HREF], i15.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i12.Location, i12.Location, [i12.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i15.ROUTES, function () { return [[{ path: "", component: i16.DefaultLayout, children: [{ path: "", component: i17.SpecialsPage }, { path: "delivery", component: i18.DeliveryPage }, { path: "contacts", component: i19.ContactsPage }, { path: "cart", component: i20.CartPage }, { path: "cart/:contract", component: i21.HistoryPage }, { path: "stocks", component: i22.StocksPage }, { path: ":categoryName/:productId", component: i23.ViewPage }, { path: ":categoryName", component: i24.CatalogPage }, { path: "**", component: i25.NotfoundPage }] }]]; }, []), i0.ɵmpd(1024, i15.Router, i15.ɵe, [i0.ApplicationRef, i15.UrlSerializer, i15.ChildrenOutletContexts, i12.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i15.ROUTES, i15.ROUTER_CONFIGURATION, [2, i15.UrlHandlingStrategy], [2, i15.RouteReuseStrategy]]), i0.ɵmpd(512, i15.RouterModule, i15.RouterModule, [[2, i15.ɵa], [2, i15.Router]]), i0.ɵmpd(512, i26.ControlsModule, i26.ControlsModule, []), i0.ɵmpd(512, i27.ModuleComponentsSpecials, i27.ModuleComponentsSpecials, []), i0.ɵmpd(512, i28.ModuleComponentsView, i28.ModuleComponentsView, []), i0.ɵmpd(512, i14.ɵba, i14.ɵba, []), i0.ɵmpd(512, i14.FormsModule, i14.FormsModule, []), i0.ɵmpd(512, i29.ModuleComponentsCart, i29.ModuleComponentsCart, []), i0.ɵmpd(512, i30.ModuleComponentsCatalog, i30.ModuleComponentsCatalog, []), i0.ɵmpd(512, i1.PagesModule, i1.PagesModule, [])]); });
export { PagesModuleNgFactory as PagesModuleNgFactory };
//# sourceMappingURL=module.ngfactory.js.map