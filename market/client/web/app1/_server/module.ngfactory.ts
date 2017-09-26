/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './module';
import * as i2 from '../layouts/root';
import * as i3 from '../layouts/default.ngfactory';
import * as i4 from '../pages/specials/specials.ngfactory';
import * as i5 from '../pages/delivery/delivery.ngfactory';
import * as i6 from '../pages/contacts/contacts.ngfactory';
import * as i7 from '../pages/cart/cart/cart.ngfactory';
import * as i8 from '../pages/cart/history/history.ngfactory';
import * as i9 from '../pages/stocks/stocks.ngfactory';
import * as i10 from '../pages/notfound/page-notfound.ngfactory';
import * as i11 from '../pages/view/view.ngfactory';
import * as i12 from '../pages/catalog/catalog.ngfactory';
import * as i13 from '../layouts/root.ngfactory';
import * as i14 from '@angular/common';
import * as i15 from '@angular/platform-browser';
import * as i16 from '@angular/animations/browser';
import * as i17 from '@angular/platform-browser/animations';
import * as i18 from '@angular/platform-server';
import * as i19 from '@angular/common/http';
import * as i20 from '@angular/animations';
import * as i21 from '@angular/forms';
import * as i22 from '@angular/router';
import * as i23 from '../providers/category';
import * as i24 from '@angular/http';
import * as i25 from '../providers/parameter';
import * as i26 from '../providers/product';
import * as i27 from '../services/parameters';
import * as i28 from '../services/sort';
import * as i29 from '../services/config';
import * as i30 from '../providers/settings';
import * as i31 from '../providers/index';
import * as i32 from '../layouts/default';
import * as i33 from '../pages/specials/specials';
import * as i34 from '../pages/delivery/delivery';
import * as i35 from '../pages/contacts/contacts';
import * as i36 from '../pages/cart/cart/cart';
import * as i37 from '../pages/cart/history/history';
import * as i38 from '../pages/stocks/stocks';
import * as i39 from '../pages/notfound/page-notfound';
import * as i40 from '../pages/view/view';
import * as i41 from '../pages/catalog/catalog';
import * as i42 from '../controls/module';
import * as i43 from '../pages/specials/components/module';
import * as i44 from '../pages/view/components/module';
import * as i45 from '../pages/cart/components/module';
import * as i46 from '../pages/catalog/components/module';
import * as i47 from '../pages/module';
import * as i48 from '../layouts/module';
import * as i49 from '../services/global';
import * as i50 from '../providers/contract';
import * as i51 from '../services/navbar';
import * as i52 from '../module';
export const ServerAppModuleNgFactory:i0.NgModuleFactory<i1.ServerAppModule> = i0.ɵcmf(i1.ServerAppModule,
    [i2.RootLayout],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.DefaultLayoutNgFactory,i4.SpecialsPageNgFactory,i5.DeliveryPageNgFactory,
              i6.ContactsPageNgFactory,i7.CartPageNgFactory,i8.HistoryPageNgFactory,
              i9.StocksPageNgFactory,i10.NotfoundPageNgFactory,i11.ViewPageNgFactory,
              i12.CatalogPageNgFactory,i13.RootLayoutNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),
          i0.ɵmpd(4608,i14.NgLocalization,i14.NgLocaleLocalization,[i0.LOCALE_ID]),
          i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,
              i0.ɵl,([] as any[])),i0.ɵmpd(4608,i15.DomSanitizer,i15.ɵe,[i14.DOCUMENT]),
          i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i15.DomSanitizer]),i0.ɵmpd(4608,
              i15.HAMMER_GESTURE_CONFIG,i15.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,
              i15.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i15.ɵDomEventsPlugin(p0_0),new i15.ɵKeyEventsPlugin(p1_0),
                    new i15.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i14.DOCUMENT,i14.DOCUMENT,i14.DOCUMENT,i15.HAMMER_GESTURE_CONFIG]),
          i0.ɵmpd(4608,i15.EventManager,i15.EventManager,[i15.EVENT_MANAGER_PLUGINS,
              i0.NgZone]),i0.ɵmpd(135680,i15.ɵDomSharedStylesHost,i15.ɵDomSharedStylesHost,
              [i14.DOCUMENT]),i0.ɵmpd(4608,i15.ɵDomRendererFactory2,i15.ɵDomRendererFactory2,
              [i15.EventManager,i15.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i16.AnimationDriver,
              i17.ɵc,([] as any[])),i0.ɵmpd(5120,i16.ɵAnimationStyleNormalizer,i17.ɵd,
              ([] as any[])),i0.ɵmpd(4608,i16.ɵAnimationEngine,i17.ɵb,[i16.AnimationDriver,
              i16.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,i0.RendererFactory2,i17.ɵe,
              [i15.ɵDomRendererFactory2,i16.ɵAnimationEngine,i0.NgZone]),i0.ɵmpd(4608,
              i18.ɵb,i18.ɵb,[i15.DOCUMENT,[2,i15.ɵTRANSITION_ID]]),i0.ɵmpd(6144,i15.ɵSharedStylesHost,
              (null as any),[i18.ɵb]),i0.ɵmpd(4352,i0.Testability,(null as any),([] as any[])),
          i0.ɵmpd(4608,i15.Meta,i15.Meta,[i14.DOCUMENT]),i0.ɵmpd(4608,i15.Title,i15.Title,
              [i14.DOCUMENT]),i0.ɵmpd(4608,i19.HttpXsrfTokenExtractor,i19.ɵg,[i14.DOCUMENT,
              i0.PLATFORM_ID,i19.ɵe]),i0.ɵmpd(4608,i19.ɵh,i19.ɵh,[i19.HttpXsrfTokenExtractor,
              i19.ɵf]),i0.ɵmpd(5120,i19.HTTP_INTERCEPTORS,(p0_0:any) => {
            return [p0_0];
          },[i19.ɵh]),i0.ɵmpd(4608,i19.XhrFactory,i18.ɵc,([] as any[])),i0.ɵmpd(4608,
              i19.HttpXhrBackend,i19.HttpXhrBackend,[i19.XhrFactory]),i0.ɵmpd(6144,
              i19.HttpBackend,(null as any),[i19.HttpXhrBackend]),i0.ɵmpd(5120,i19.HttpHandler,
              i18.ɵf,[i19.HttpBackend,[2,i19.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i19.HttpClient,
              i19.HttpClient,[i19.HttpHandler]),i0.ɵmpd(4608,i19.ɵd,i19.ɵd,([] as any[])),
          i0.ɵmpd(4608,i20.AnimationBuilder,i17.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
              i15.DOCUMENT]),i0.ɵmpd(4608,i18.ɵServerRendererFactory2,i18.ɵServerRendererFactory2,
              [i0.NgZone,i15.DOCUMENT,i15.ɵSharedStylesHost]),i0.ɵmpd(4608,i21.ɵi,
              i21.ɵi,([] as any[])),i0.ɵmpd(5120,i22.ActivatedRoute,i22.ɵf,[i22.Router]),
          i0.ɵmpd(4608,i22.NoPreloading,i22.NoPreloading,([] as any[])),i0.ɵmpd(6144,
              i22.PreloadingStrategy,(null as any),[i22.NoPreloading]),i0.ɵmpd(135680,
              i22.RouterPreloader,i22.RouterPreloader,[i22.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i22.PreloadingStrategy]),i0.ɵmpd(4608,i22.PreloadAllModules,
              i22.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i22.ROUTER_INITIALIZER,
              i22.ɵi,[i22.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i22.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i23.CategoryProvider,i23.CategoryProvider,
              [i24.Http]),i0.ɵmpd(4608,i25.ParameterProvider,i25.ParameterProvider,
              [i24.Http]),i0.ɵmpd(4608,i26.ProductProvider,i26.ProductProvider,[i24.Http]),
          i0.ɵmpd(4608,i27.ParametersService,i27.ParametersService,([] as any[])),
          i0.ɵmpd(4608,i28.SortingService,i28.SortingService,([] as any[])),i0.ɵmpd(512,
              i14.CommonModule,i14.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i15.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i22.ɵb()];
          },([] as any[])),i0.ɵmpd(512,i22.ɵg,i22.ɵg,[i0.Injector]),i0.ɵmpd(512,i24.BrowserXhr,
              i18.ɵc,([] as any[])),i0.ɵmpd(512,i24.ResponseOptions,i24.BaseResponseOptions,
              ([] as any[])),i0.ɵmpd(512,i24.XSRFStrategy,i18.ɵd,([] as any[])),i0.ɵmpd(512,
              i24.XHRBackend,i24.XHRBackend,[i24.BrowserXhr,i24.ResponseOptions,i24.XSRFStrategy]),
          i0.ɵmpd(512,i24.RequestOptions,i24.BaseRequestOptions,([] as any[])),i0.ɵmpd(1024,
              i24.Http,i18.ɵe,[i24.XHRBackend,i24.RequestOptions]),i0.ɵmpd(512,i29.ConfigService,
              i29.ConfigService,([] as any[])),i0.ɵmpd(512,i30.SettingsProvider,i30.SettingsProvider,
              [i24.Http,i29.ConfigService]),i0.ɵmpd(256,i0.APP_ID,'BD484954-6626-4699-86BD-AF9CA21F0DE8',
              ([] as any[])),i0.ɵmpd(2048,i15.ɵTRANSITION_ID,(null as any),[i0.APP_ID]),
          i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any,p2_0:any,p3_0:any,
              p3_1:any,p3_2:any) => {
            return [i15.ɵc(p0_0,p0_1),i22.ɵh(p1_0),i31.SettingsFactory(p2_0),i15.ɵf(p3_0,
                p3_1,p3_2)];
          },[[2,i15.NgProbeToken],[2,i0.NgProbeToken],i22.ɵg,i30.SettingsProvider,
              i15.ɵTRANSITION_ID,i14.DOCUMENT,i0.Injector]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i15.BrowserModule,i15.BrowserModule,[[3,i15.BrowserModule]]),
          i0.ɵmpd(512,i24.HttpModule,i24.HttpModule,([] as any[])),i0.ɵmpd(512,i19.HttpClientXsrfModule,
              i19.HttpClientXsrfModule,([] as any[])),i0.ɵmpd(512,i19.HttpClientModule,
              i19.HttpClientModule,([] as any[])),i0.ɵmpd(512,i17.NoopAnimationsModule,
              i17.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,i18.ServerModule,
              i18.ServerModule,([] as any[])),i0.ɵmpd(512,i17.BrowserAnimationsModule,
              i17.BrowserAnimationsModule,([] as any[])),i0.ɵmpd(1024,i22.ɵa,i22.ɵd,
              [[3,i22.Router]]),i0.ɵmpd(512,i22.UrlSerializer,i22.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i22.ChildrenOutletContexts,i22.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i22.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i14.LocationStrategy,i22.ɵc,[i14.PlatformLocation,[2,i14.APP_BASE_HREF],
              i22.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i14.Location,i14.Location,[i14.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i22.ROUTES,() => {
            return [[{path:'',component:i32.DefaultLayout,children:[{path:'',component:i33.SpecialsPage},
                {path:'delivery',component:i34.DeliveryPage},{path:'contacts',component:i35.ContactsPage},
                {path:'cart',component:i36.CartPage},{path:'cart/:contract',component:i37.HistoryPage},
                {path:'stocks',component:i38.StocksPage},{path:'notfound',component:i39.NotfoundPage},
                {path:':categoryName/:productId',component:i40.ViewPage},{path:':categoryName',
                    component:i41.CatalogPage},{path:'**',redirectTo:'/notfound'}]}]];
          },([] as any[])),i0.ɵmpd(1024,i22.Router,i22.ɵe,[i0.ApplicationRef,i22.UrlSerializer,
              i22.ChildrenOutletContexts,i14.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i22.ROUTES,i22.ROUTER_CONFIGURATION,[2,i22.UrlHandlingStrategy],
              [2,i22.RouteReuseStrategy]]),i0.ɵmpd(512,i22.RouterModule,i22.RouterModule,
              [[2,i22.ɵa],[2,i22.Router]]),i0.ɵmpd(512,i42.ControlsModule,i42.ControlsModule,
              ([] as any[])),i0.ɵmpd(512,i43.ModuleComponentsSpecials,i43.ModuleComponentsSpecials,
              ([] as any[])),i0.ɵmpd(512,i44.ModuleComponentsView,i44.ModuleComponentsView,
              ([] as any[])),i0.ɵmpd(512,i21.ɵba,i21.ɵba,([] as any[])),i0.ɵmpd(512,
              i21.FormsModule,i21.FormsModule,([] as any[])),i0.ɵmpd(512,i45.ModuleComponentsCart,
              i45.ModuleComponentsCart,([] as any[])),i0.ɵmpd(512,i46.ModuleComponentsCatalog,
              i46.ModuleComponentsCatalog,([] as any[])),i0.ɵmpd(512,i47.PagesModule,
              i47.PagesModule,([] as any[])),i0.ɵmpd(512,i48.LayoutsModule,i48.LayoutsModule,
              ([] as any[])),i0.ɵmpd(512,i49.GlobalService,i49.GlobalService,([] as any[])),
          i0.ɵmpd(512,i50.ContractProvider,i50.ContractProvider,[i24.Http]),i0.ɵmpd(512,
              i51.NavbarService,i51.NavbarService,([] as any[])),i0.ɵmpd(512,i52.ApplicationModule,
              i52.ApplicationModule,[i22.Router,i49.GlobalService,i50.ContractProvider,
                  i51.NavbarService]),i0.ɵmpd(512,i1.ServerAppModule,i1.ServerAppModule,
              ([] as any[])),i0.ɵmpd(256,i19.ɵe,'XSRF-TOKEN',([] as any[])),i0.ɵmpd(256,
              i19.ɵf,'X-XSRF-TOKEN',([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvX3NlcnZlci9tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvX3NlcnZlci9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
