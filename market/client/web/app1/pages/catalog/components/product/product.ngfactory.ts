/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '@angular/router';
import * as i3 from './product';
const styles_ComponentCatalogProduct:any[] = ([] as any[]);
export const RenderType_ComponentCatalogProduct:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ComponentCatalogProduct,data:{}});
function View_ComponentCatalogProduct_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'div',[['class',
      'stock']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.product.stockText;
    _ck(_v,1,0,currVal_0);
  });
}
function View_ComponentCatalogProduct_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['class',
      'incart']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'i',[['class','fa fa-check-circle rgap']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['В корзине']))],(null as any),(null as any));
}
function View_ComponentCatalogProduct_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['class',
      'available yes']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'i',[['class','fa fa-check-square-o rgap']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['В наличии']))],(null as any),(null as any));
}
function View_ComponentCatalogProduct_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'span',[['class',
      'available no']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i1.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,
          i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),
      i0.ɵpod({'blink':0}),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'i',[['class',
          'fa fa-ban rgap']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Отсутствует']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'available no';
    const currVal_1:any = _ck(_v,2,0,_co.product.blink);
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
export function View_ComponentCatalogProduct_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),10,'div',[['class',
      'image']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_ComponentCatalogProduct_1)),i0.ɵdid(16384,
          (null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),4,'a',[['class','link d-inline-block']],[[1,
              'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,6).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i1.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'img',([] as any[]),[[8,'src',4]],(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),
          ['\n'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),34,'div',[['class',
          'info']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'a',[['class','name']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,15).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i1.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),27,'div',[['class',
          'd-flex']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),0,'div',[['class','details']],[[8,'innerHTML',1]],(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),22,'div',
          [['class','money d-flex flex-column']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),10,'div',[['class','status']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_ComponentCatalogProduct_2)),
      i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ComponentCatalogProduct_3)),
      i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ComponentCatalogProduct_4)),
      i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),3,'div',[['class','price']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i1.NgClass,
          [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
              'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'no':0}),(_l()(),
          i0.ɵted((null as any),['',' руб.'])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',[['class','buy pointer d-block']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.ComponentCatalogProduct = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.postPosition()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'i',[['class','fa fa-shopping-cart rgap']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['в корзину'])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),
          ['\n\n']))],(_ck,_v) => {
    var _co:i3.ComponentCatalogProduct = _v.component;
    const currVal_0:any = _co.product.stock;
    _ck(_v,3,0,currVal_0);
    const currVal_3:any = i0.ɵinlineInterpolate(2,'/',_co.categoryName,'/',_co.product.url,
        '');
    _ck(_v,6,0,currVal_3);
    const currVal_7:any = i0.ɵinlineInterpolate(2,'/',_co.categoryName,'/',_co.product.url,
        '');
    _ck(_v,15,0,currVal_7);
    const currVal_10:any = _co.product.inCart;
    _ck(_v,27,0,currVal_10);
    const currVal_11:boolean = (!_co.product.inCart && _co.product.available);
    _ck(_v,30,0,currVal_11);
    const currVal_12:boolean = (!_co.product.inCart && !_co.product.available);
    _ck(_v,33,0,currVal_12);
    const currVal_13:any = 'price';
    const currVal_14:any = _ck(_v,38,0,!_co.product.available);
    _ck(_v,37,0,currVal_13,currVal_14);
  },(_ck,_v) => {
    var _co:i3.ComponentCatalogProduct = _v.component;
    const currVal_1:any = i0.ɵnov(_v,6).target;
    const currVal_2:any = i0.ɵnov(_v,6).href;
    _ck(_v,5,0,currVal_1,currVal_2);
    const currVal_4:any = i0.ɵinlineInterpolate(2,'/photos/',_co.product._id,'/l_',
        _co.product.cover,'');
    _ck(_v,8,0,currVal_4);
    const currVal_5:any = i0.ɵnov(_v,15).target;
    const currVal_6:any = i0.ɵnov(_v,15).href;
    _ck(_v,14,0,currVal_5,currVal_6);
    const currVal_8:any = _co.product.name;
    _ck(_v,16,0,currVal_8);
    const currVal_9:any = _co.product.details;
    _ck(_v,20,0,currVal_9);
    const currVal_15:any = _co.product.price;
    _ck(_v,39,0,currVal_15);
  });
}
export function View_ComponentCatalogProduct_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'cat-product',
      [['class','d-flex']],(null as any),(null as any),(null as any),View_ComponentCatalogProduct_0,
      RenderType_ComponentCatalogProduct)),i0.ɵdid(49152,(null as any),0,i3.ComponentCatalogProduct,
      ([] as any[]),(null as any),(null as any))],(null as any),(null as any));
}
export const ComponentCatalogProductNgFactory:i0.ComponentFactory<i3.ComponentCatalogProduct> = i0.ɵccf('cat-product',
    i3.ComponentCatalogProduct,View_ComponentCatalogProduct_Host_0,{product:'product',
        categoryName:'categoryName'},{onPostPosition:'onPostPosition'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvcGFnZXMvY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Qcm9qZWN0cy9tYXJrZXQvbWFya2V0L2NsaWVudC93ZWIvYXBwMS9wYWdlcy9jYXRhbG9nL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LnRzIiwibmc6Ly8vQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvcGFnZXMvY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5odG1sIiwibmc6Ly8vQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvcGFnZXMvY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC50cy5Db21wb25lbnRDYXRhbG9nUHJvZHVjdF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJpbWFnZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInN0b2NrXCIgKm5nSWY9XCJwcm9kdWN0LnN0b2NrXCI+e3twcm9kdWN0LnN0b2NrVGV4dH19PC9kaXY+XHJcbiAgICA8YSBjbGFzcz1cImxpbmsgZC1pbmxpbmUtYmxvY2tcIiByb3V0ZXJMaW5rPVwiL3t7Y2F0ZWdvcnlOYW1lfX0ve3twcm9kdWN0LnVybH19XCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvcGhvdG9zL3t7cHJvZHVjdC5faWR9fS9sX3t7cHJvZHVjdC5jb3Zlcn19XCI+XHJcbiAgICA8L2E+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgPGEgY2xhc3M9XCJuYW1lXCIgcm91dGVyTGluaz1cIi97e2NhdGVnb3J5TmFtZX19L3t7cHJvZHVjdC51cmx9fVwiPnt7cHJvZHVjdC5uYW1lfX08L2E+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIiBbaW5uZXJIdG1sXT1cInByb2R1Y3QuZGV0YWlsc1wiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb25leSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmNhcnRcIiAqbmdJZj1cInByb2R1Y3QuaW5DYXJ0XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVjay1jaXJjbGUgcmdhcFwiPjwvaT7QkiDQutC+0YDQt9C40L3QtTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXZhaWxhYmxlIHllc1wiICpuZ0lmPVwiIXByb2R1Y3QuaW5DYXJ0ICYmIHByb2R1Y3QuYXZhaWxhYmxlXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVjay1zcXVhcmUtbyByZ2FwXCI+PC9pPtCSINC90LDQu9C40YfQuNC4PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhdmFpbGFibGUgbm9cIiAqbmdJZj1cIiFwcm9kdWN0LmluQ2FydCAmJiAhcHJvZHVjdC5hdmFpbGFibGVcIiBbbmdDbGFzc109XCJ7J2JsaW5rJzpwcm9kdWN0LmJsaW5rfVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFuIHJnYXBcIj48L2k+0J7RgtGB0YPRgtGB0YLQstGD0LXRgjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZVwiIFtuZ0NsYXNzXT1cInsnbm8nOiFwcm9kdWN0LmF2YWlsYWJsZX1cIj57e3Byb2R1Y3QucHJpY2V9fSDRgNGD0LEuPC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV5IHBvaW50ZXIgZC1ibG9ja1wiIChjbGljayk9XCJwb3N0UG9zaXRpb24oKVwiPjxpIGNsYXNzPVwiZmEgZmEtc2hvcHBpbmctY2FydCByZ2FwXCI+PC9pPtCyINC60L7RgNC30LjQvdGDPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIiwiPGNhdC1wcm9kdWN0PjwvY2F0LXByb2R1Y3Q+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkNDSTtNQUFBO01BQXlDOztJQUFBO0lBQUE7Ozs7b0JBVzdCO01BQUE7TUFBNEM7VUFBQTtNQUF1Qzs7O29CQUNuRjtNQUFBO01BQXlFO1VBQUE7TUFBeUM7OztvQkFDbEg7TUFBQTthQUFBO21DQUFBO2FBQXlFLGNBQW9DO1VBQUE7VUFBQSxnQkFBOEI7O0lBQXJJO0lBQW1FO0lBQXpFLFdBQU0sVUFBbUUsU0FBekU7Ozs7b0JBZGhCO01BQUE7TUFBbUIsMkNBQ2Y7VUFBQSxzRUFBQTtVQUFBO1VBQUEsZUFBb0UsMkNBQ3BFO1VBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUE4RSwrQ0FDMUU7VUFBQTtVQUFBLDRDQUF1RDtVQUFBLGFBQ3ZELHVDQUNGO1VBQUEsU0FDTjtVQUFBO01BQWtCLDJDQUNkO1VBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUErRCx3Q0FBb0I7VUFBQSxhQUNuRjtVQUFBO01BQW9CLCtDQUNoQjtVQUFBO1VBQUEsNENBQXlEO1VBQUEsaUJBQ3pEO1VBQUE7VUFBQSw4QkFBc0M7TUFDbEM7VUFBQTtNQUFvQix1REFDaEI7VUFBQTthQUFBO1VBQUEsd0JBQW1HO01BQ25HO2FBQUE7VUFBQSx3QkFBa0k7TUFDbEk7YUFBQTtVQUFBLHdCQUE2SjtNQUMzSixtREFDTjtVQUFBO1VBQUEscUNBQUE7VUFBQTtjQUFBLHNEQUFtQixXQUFzQztpQkFBQSw4QkFBNEI7TUFDckY7VUFBQTtZQUFBO1lBQUE7WUFBK0I7Y0FBQTtjQUFBO1lBQUE7WUFBL0I7VUFBQSxnQ0FBd0Q7VUFBQTtVQUFBLDRDQUF3QztVQUFBLGdCQUFhLCtDQUMzRztVQUFBLGFBQ0osdUNBQ0o7VUFBQTs7SUFuQmlCO0lBQW5CLFdBQW1CLFNBQW5CO0lBQytCO1FBQUE7SUFBL0IsV0FBK0IsU0FBL0I7SUFLZ0I7UUFBQTtJQUFoQixZQUFnQixTQUFoQjtJQUtpQztJQUFyQixZQUFxQixVQUFyQjtJQUM0QjtJQUE1QixZQUE0QixVQUE1QjtJQUMyQjtJQUEzQixZQUEyQixVQUEzQjtJQUVDO0lBQWM7SUFBbkIsWUFBSyxXQUFjLFVBQW5COzs7SUFkUjtJQUFBO0lBQUEsV0FBQSxtQkFBQTtJQUNTO1FBQUE7SUFBTCxXQUFLLFNBQUw7SUFJSjtJQUFBO0lBQUEsWUFBQSxtQkFBQTtJQUErRDtJQUFBO0lBRXRDO0lBQXJCLFlBQXFCLFNBQXJCO0lBTzZEO0lBQUE7Ozs7b0JDaEJyRTtNQUFBO3dDQUFBLFVBQUE7TUFBQTs7OzsifQ==
