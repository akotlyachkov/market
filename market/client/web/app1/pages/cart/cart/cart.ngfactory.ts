/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../components/positions/positions.ngfactory';
import * as i2 from '../components/positions/positions';
import * as i3 from '../components/contact/contact.ngfactory';
import * as i4 from '../components/contact/contact';
import * as i5 from '@angular/router';
import * as i6 from '@angular/common';
import * as i7 from './cart';
import * as i8 from '../../../providers/contract';
import * as i9 from '../../../services/navbar';
const styles_CartPage:any[] = ([] as any[]);
export const RenderType_CartPage:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_CartPage,
    data:{}});
function View_CartPage_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'div',[['class',
      'd-flex']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'div',[['class','alert alert-info']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,
          'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['В корзине пока нет ни одного товара'])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n        ']))],(null as any),(null as any));
}
function View_CartPage_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),9,'div',[['class',
      'd-flex']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),6,'div',[['class','alert alert-success']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,
          'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'strong',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Заказ № ',' принят.'])),(_l()(),i0.ɵted((null as any),
          [' Скоро наш менеджер свяжется с вами.'])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n        ']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.contract.number;
        _ck(_v,6,0,currVal_0);
      });
}
function View_CartPage_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),16,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      1,'cart-positions',([] as any[]),(null as any),[[(null as any),'onDelete'],[(null as any),
          'onMinus'],[(null as any),'onPlus']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('onDelete' === en)) {
          const pd_0:any = ((<any>_co.del($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('onMinus' === en)) {
          const pd_1:any = ((<any>_co.minus($event)) !== false);
          ad = (pd_1 && ad);
        }
        if (('onPlus' === en)) {
          const pd_2:any = ((<any>_co.plus($event)) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },i1.View_ComponentCartPositions_0,i1.RenderType_ComponentCartPositions)),i0.ɵdid(49152,
      (null as any),0,i2.ComponentCartPositions,([] as any[]),{contract:[0,'contract']},
      {onMinus:'onMinus',onPlus:'onPlus',onDelete:'onDelete'}),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'h2',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['Контакты'])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['Мы обещаем не использовать ваш номер телефона в рекламных целях. Так же обещаем не передавать его третьим лицам.'])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Если у вас имеются особые пожелания, напишите их в комментарии к заказу, мы обязательно прочитаем и постараемся выполнить.'])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'cart-contact',[['class','d-flex flex-column form-horizontal']],
          (null as any),[[(null as any),'onSubmit']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('onSubmit' === en)) {
              const pd_0:any = ((<any>_co.submit($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i3.View_ComponentCartContact_0,i3.RenderType_ComponentCartContact)),i0.ɵdid(49152,
          (null as any),0,i4.ComponentCartContact,([] as any[]),(null as any),{onSubmit:'onSubmit'}),
      (_l()(),i0.ɵted((null as any),['\n        ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.contract;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
function View_CartPage_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),10,'li',[['class',
      'cart-history-item']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),7,'a',([] as any[]),[[1,'target',0],[8,
          'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i5.RouterLinkWithHref,
      [i5.Router,i5.ActivatedRoute,i6.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'b',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),2,'span',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['',''])),i0.ɵppd(2),(_l()(),i0.ɵted((null as any),['\n                ']))],
      (_ck,_v) => {
        const currVal_2:any = i0.ɵinlineInterpolate(1,'/cart/',_v.context.$implicit._id,
            '');
        _ck(_v,3,0,currVal_2);
      },(_ck,_v) => {
        const currVal_0:any = i0.ɵnov(_v,3).target;
        const currVal_1:any = i0.ɵnov(_v,3).href;
        _ck(_v,2,0,currVal_0,currVal_1);
        const currVal_3:any = _v.context.$implicit.status;
        _ck(_v,5,0,currVal_3);
        const currVal_4:any = i0.ɵunv(_v,8,0,_ck(_v,9,0,i0.ɵnov((<any>(<any>_v.parent).parent),
            0),_v.context.$implicit.date,'dd.MM.yyyy HH:mm:ss'));
        _ck(_v,8,0,currVal_4);
      });
}
function View_CartPage_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),10,'div',[['class',
      'cart-history']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'h2',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['История заказов'])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'ul',[['class','list-unstyled']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_CartPage_5)),i0.ɵdid(802816,(null as any),0,i6.NgForOf,
          [i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,'ngForOf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵted((null as any),['\n        ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.history;
    _ck(_v,8,0,currVal_0);
  },(null as any));
}
export function View_CartPage_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i6.DatePipe,[i0.LOCALE_ID]),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),16,'div',[['class','container']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'h2',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['Корзина покупок'])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CartPage_1)),
      i0.ɵdid(16384,(null as any),0,i6.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CartPage_2)),
      i0.ɵdid(16384,(null as any),0,i6.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CartPage_3)),
      i0.ɵdid(16384,(null as any),0,i6.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CartPage_4)),
      i0.ɵdid(16384,(null as any),0,i6.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i7.CartPage = _v.component;
    const currVal_0:any = (_co.pageMode == _co.cartMode.Empty);
    _ck(_v,7,0,currVal_0);
    const currVal_1:any = (_co.pageMode == _co.cartMode.Success);
    _ck(_v,10,0,currVal_1);
    const currVal_2:any = (_co.pageMode == _co.cartMode.Form);
    _ck(_v,13,0,currVal_2);
    const currVal_3:any = _co.showHistory;
    _ck(_v,16,0,currVal_3);
  },(null as any));
}
export function View_CartPage_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'ng-component',
      ([] as any[]),(null as any),(null as any),(null as any),View_CartPage_0,RenderType_CartPage)),
      i0.ɵdid(49152,(null as any),0,i7.CartPage,[i8.ContractProvider,i9.NavbarService],
          (null as any),(null as any))],(null as any),(null as any));
}
export const CartPageNgFactory:i0.ComponentFactory<i7.CartPage> = i0.ɵccf('ng-component',
    i7.CartPage,View_CartPage_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvcGFnZXMvY2FydC9jYXJ0L2NhcnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvcGFnZXMvY2FydC9jYXJ0L2NhcnQudHMiLCJuZzovLy9DOi9Qcm9qZWN0cy9tYXJrZXQvbWFya2V0L2NsaWVudC93ZWIvYXBwMS9wYWdlcy9jYXJ0L2NhcnQvY2FydC5odG1sIiwibmc6Ly8vQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvcGFnZXMvY2FydC9jYXJ0L2NhcnQudHMuQ2FydFBhZ2VfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyPtCa0L7RgNC30LjQvdCwINC/0L7QutGD0L/QvtC6PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCIgKm5nSWY9XCJwYWdlTW9kZSA9PSBjYXJ0TW9kZS5FbXB0eVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+0JIg0LrQvtGA0LfQuNC90LUg0L/QvtC60LAg0L3QtdGCINC90Lgg0L7QtNC90L7Qs9C+INGC0L7QstCw0YDQsDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiICpuZ0lmPVwicGFnZU1vZGUgPT0gY2FydE1vZGUuU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz7Ql9Cw0LrQsNC3IOKEliB7e2NvbnRyYWN0Lm51bWJlcn19INC/0YDQuNC90Y/Rgi48L3N0cm9uZz4g0KHQutC+0YDQviDQvdCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4Ljwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInBhZ2VNb2RlID09IGNhcnRNb2RlLkZvcm1cIj5cclxuICAgICAgICAgICAgPGNhcnQtcG9zaXRpb25zIFtjb250cmFjdF09XCJjb250cmFjdFwiIChvbkRlbGV0ZSk9XCJkZWwoJGV2ZW50KVwiIChvbk1pbnVzKT1cIm1pbnVzKCRldmVudClcIiAob25QbHVzKT1cInBsdXMoJGV2ZW50KVwiPjwvY2FydC1wb3NpdGlvbnM+XHJcbiAgICAgICAgICAgIDxoMj7QmtC+0L3RgtCw0LrRgtGLPC9oMj5cclxuICAgICAgICAgICAgPHA+0JzRiyDQvtCx0LXRidCw0LXQvCDQvdC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQstCw0Ygg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwINCyINGA0LXQutC70LDQvNC90YvRhSDRhtC10LvRj9GFLiDQotCw0Log0LbQtSDQvtCx0LXRidCw0LXQvCDQvdC1INC/0LXRgNC10LTQsNCy0LDRgtGMINC10LPQviDRgtGA0LXRgtGM0LjQvCDQu9C40YbQsNC8LjwvcD5cclxuICAgICAgICAgICAgPHA+0JXRgdC70Lgg0YMg0LLQsNGBINC40LzQtdGO0YLRgdGPINC+0YHQvtCx0YvQtSDQv9C+0LbQtdC70LDQvdC40Y8sINC90LDQv9C40YjQuNGC0LUg0LjRhSDQsiDQutC+0LzQvNC10L3RgtCw0YDQuNC4INC6INC30LDQutCw0LfRgywg0LzRiyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC/0YDQvtGH0LjRgtCw0LXQvCDQuCDQv9C+0YHRgtCw0YDQsNC10LzRgdGPINCy0YvQv9C+0LvQvdC40YLRjC48L3A+XHJcbiAgICAgICAgICAgIDxjYXJ0LWNvbnRhY3QgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIiAob25TdWJtaXQpPVwic3VibWl0KCRldmVudClcIj48L2NhcnQtY29udGFjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1oaXN0b3J5XCIgKm5nSWY9XCJzaG93SGlzdG9yeVwiPlxyXG4gICAgICAgICAgICA8aDI+0JjRgdGC0L7RgNC40Y8g0LfQsNC60LDQt9C+0LI8L2gyPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGggb2YgaGlzdG9yeVwiIGNsYXNzPVwiY2FydC1oaXN0b3J5LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiL2NhcnQve3toLl9pZH19XCI+PGI+e3toLnN0YXR1c319PC9iPiA8c3Bhbj57e2guZGF0ZSB8IGRhdGU6J2RkLk1NLnl5eXkgSEg6bW06c3MnfX08L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+IiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0VRO01BQUE7TUFBdUQsbURBQ25EO1VBQUE7VUFBQSw0Q0FBOEI7VUFBQSx5QkFDMUI7VUFBQTtVQUFBLGdCQUFNO01BQTBDLG1EQUM5QztVQUFBOzs7b0JBRVY7TUFBQTtNQUF5RCxtREFDckQ7VUFBQTtVQUFBLDRDQUFpQztVQUFBLHlCQUM3QjtVQUFBO1VBQUEsZ0JBQU07VUFBQTtNQUFRLHdEQUE0QztVQUFBLDJDQUEyQztVQUFBLHFCQUNuRzs7O1FBRFk7UUFBQTs7OztvQkFHdEI7TUFBQSx3RUFBdUM7YUFBQSxvQ0FDbkM7TUFBQTtVQUFBO1FBQUE7UUFBQTtRQUFzQztVQUFBO1VBQUE7UUFBQTtRQUF5QjtVQUFBO1VBQUE7UUFBQTtRQUEwQjtVQUFBO1VBQUE7UUFBQTtRQUF6RjtNQUFBLGlGQUFBO01BQUE7TUFBQSx5REFBa0k7TUFBQSxxQkFDbEk7TUFBQSx3RUFBSTthQUFBLDhCQUFhO01BQ2pCO1VBQUEsMERBQUc7VUFBQTtNQUFvSCxtREFDdkg7VUFBQTtVQUFBLDhCQUFHO01BQThILG1EQUNqSTtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQXlDO2NBQUE7Y0FBQTtZQUFBO1lBQXpDO1VBQUEsNkVBQUE7VUFBQTtNQUFvRjs7SUFKcEU7SUFBaEIsV0FBZ0IsU0FBaEI7Ozs7b0JBU0k7TUFBQTtNQUFBLGdCQUF3RCwyREFDcEQ7YUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtNQUFBO01BQUEsZUFBZ0M7TUFBQSx3RUFBRzthQUFBLHlCQUFnQixzQ0FBQzthQUFBO1VBQUEsNENBQU07TUFBQSxxQkFBa0Q7O1FBQXpHO1lBQUE7UUFBSCxXQUFHLFNBQUg7O1FBQUE7UUFBQTtRQUFBLFdBQUEsbUJBQUE7UUFBbUM7UUFBQTtRQUF1QjtZQUFBO1FBQUE7Ozs7b0JBSnRFO01BQUE7TUFBOEMsbURBQzFDO1VBQUE7VUFBQSw4QkFBSTtNQUFvQixtREFDeEI7VUFBQTtVQUFBLDRDQUEwQjtVQUFBLHlCQUN0QjtVQUFBLHlDQUFBO1VBQUE7VUFBQSxlQUVLLG1EQUNKO2lCQUFBOztJQUhHO0lBQUosV0FBSSxTQUFKOzs7OzBEQXRCaEI7TUFBQTtNQUFBLDhCQUF1QjtNQUNmO1VBQUEsMERBQUk7VUFBQSxzQkFBb0IsK0NBQ3hCO2lCQUFBO2FBQUE7VUFBQSx3QkFJTSwrQ0FDTjtpQkFBQTthQUFBO1VBQUEsd0JBSU0sK0NBQ047aUJBQUE7YUFBQTtVQUFBLHdCQU1NLCtDQUNOO2lCQUFBO2FBQUE7VUFBQSx3QkFPTTs7SUF4QmM7SUFBcEIsV0FBb0IsU0FBcEI7SUFLb0I7SUFBcEIsWUFBb0IsU0FBcEI7SUFLSztJQUFMLFlBQUssU0FBTDtJQU8wQjtJQUExQixZQUEwQixTQUExQjs7OztvQkNuQlI7TUFBQTthQUFBO1VBQUE7OzsifQ==
