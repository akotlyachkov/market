/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './components/navbar-item/navbar-item.ngfactory';
import * as i2 from './components/navbar-item/navbar-item';
import * as i3 from './components/navbar-cart/navbar-cart.ngfactory';
import * as i4 from './components/navbar-cart/navbar-cart';
import * as i5 from './navbar';
import * as i6 from '../../services/navbar';
const styles_NavbarControl:any[] = ([] as any[]);
export const RenderType_NavbarControl:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_NavbarControl,data:{}});
export function View_NavbarControl_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),32,'div',[['class',
      'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          29,'div',[['class','row']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'navbar-item',[['class','navbar-item navbar-item--brand navbar-block']],
          (null as any),(null as any),(null as any),i1.View_NavbarItemComponent_0,
          i1.RenderType_NavbarItemComponent)),i0.ɵdid(49152,(null as any),0,i2.NavbarItemComponent,
          ([] as any[]),{data:[0,'data']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),10,'div',[['class','d-flex justify-content-end ml-auto']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'navbar-item',[['class','navbar-item navbar-item--delivery hidden-md-down']],
          (null as any),(null as any),(null as any),i1.View_NavbarItemComponent_0,
          i1.RenderType_NavbarItemComponent)),i0.ɵdid(49152,(null as any),0,i2.NavbarItemComponent,
          ([] as any[]),{data:[0,'data']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'navbar-cart',
          [['class','navbar-item navbar-item--cart hidden-md-down']],(null as any),
          (null as any),(null as any),i3.View_NavbarCartComponent_0,i3.RenderType_NavbarCartComponent)),
      i0.ɵdid(49152,(null as any),0,i4.NavbarCartComponent,([] as any[]),{data:[0,
          'data'],cartData:[1,'cartData']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'navbar-item',
          [['class','navbar-item navbar-item--phone']],(null as any),(null as any),
          (null as any),i1.View_NavbarItemComponent_0,i1.RenderType_NavbarItemComponent)),
      i0.ɵdid(49152,(null as any),0,i2.NavbarItemComponent,([] as any[]),{data:[0,
          'data']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          10,'div',[['class','d-flex hidden-lg-up']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'navbar-item',[['class','navbar-item navbar-item--stocks ']],
          (null as any),(null as any),(null as any),i1.View_NavbarItemComponent_0,
          i1.RenderType_NavbarItemComponent)),i0.ɵdid(49152,(null as any),0,i2.NavbarItemComponent,
          ([] as any[]),{data:[0,'data']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'navbar-item',
          [['class','navbar-item navbar-item--delivery']],(null as any),(null as any),
          (null as any),i1.View_NavbarItemComponent_0,i1.RenderType_NavbarItemComponent)),
      i0.ɵdid(49152,(null as any),0,i2.NavbarItemComponent,([] as any[]),{data:[0,
          'data']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'navbar-cart',[['class','navbar-item navbar-item--cart']],
          (null as any),(null as any),(null as any),i3.View_NavbarCartComponent_0,
          i3.RenderType_NavbarCartComponent)),i0.ɵdid(49152,(null as any),0,i4.NavbarCartComponent,
          ([] as any[]),{data:[0,'data'],cartData:[1,'cartData']},(null as any)),(_l()(),
          i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i5.NavbarControl = _v.component;
    const currVal_0:any = _co.settings.brand;
    _ck(_v,5,0,currVal_0);
    const currVal_1:any = _co.settings.delivery;
    _ck(_v,11,0,currVal_1);
    const currVal_2:any = _co.settings.cart;
    const currVal_3:any = _co.cartData;
    _ck(_v,14,0,currVal_2,currVal_3);
    const currVal_4:any = _co.settings.phone;
    _ck(_v,17,0,currVal_4);
    const currVal_5:any = _co.settings.stocks;
    _ck(_v,23,0,currVal_5);
    const currVal_6:any = _co.settings.delivery;
    _ck(_v,26,0,currVal_6);
    const currVal_7:any = _co.settings.cart;
    const currVal_8:any = _co.cartData;
    _ck(_v,29,0,currVal_7,currVal_8);
  },(null as any));
}
export function View_NavbarControl_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'market-navbar',
      [['class','navbar']],(null as any),(null as any),(null as any),View_NavbarControl_0,
      RenderType_NavbarControl)),i0.ɵdid(49152,(null as any),0,i5.NavbarControl,[i6.NavbarService],
      (null as any),(null as any))],(null as any),(null as any));
}
export const NavbarControlNgFactory:i0.ComponentFactory<i5.NavbarControl> = i0.ɵccf('market-navbar',
    i5.NavbarControl,View_NavbarControl_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvY29udHJvbHMvbmF2YmFyL25hdmJhci5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Qcm9qZWN0cy9tYXJrZXQvbWFya2V0L2NsaWVudC93ZWIvYXBwMS9jb250cm9scy9uYXZiYXIvbmF2YmFyLnRzIiwibmc6Ly8vQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvY29udHJvbHMvbmF2YmFyL25hdmJhci5odG1sIiwibmc6Ly8vQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvY29udHJvbHMvbmF2YmFyL25hdmJhci50cy5OYXZiYXJDb250cm9sX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxuYXZiYXItaXRlbSBbZGF0YV09XCJzZXR0aW5ncy5icmFuZFwiIGNsYXNzPVwibmF2YmFyLWl0ZW0gbmF2YmFyLWl0ZW0tLWJyYW5kIG5hdmJhci1ibG9ja1wiPjwvbmF2YmFyLWl0ZW0+XHJcbiAgICAgICAgPCEtLTxuYXZiYXItaXRlbSBbZGF0YV09XCJzZXR0aW5ncy5zdG9ja3NcIiBjbGFzcz1cIm5hdmJhci1pdGVtIG5hdmJhci1pdGVtJiM0NTsmIzQ1O3N0b2NrcyBoaWRkZW4tbWQtZG93blwiPjwvbmF2YmFyLWl0ZW0+LS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgPG5hdmJhci1pdGVtIFtkYXRhXT1cInNldHRpbmdzLmRlbGl2ZXJ5XCIgY2xhc3M9XCJuYXZiYXItaXRlbSBuYXZiYXItaXRlbS0tZGVsaXZlcnkgaGlkZGVuLW1kLWRvd25cIj48L25hdmJhci1pdGVtPlxyXG4gICAgICAgICAgICA8bmF2YmFyLWNhcnQgW2RhdGFdPVwic2V0dGluZ3MuY2FydFwiIFtjYXJ0RGF0YV09XCJjYXJ0RGF0YVwiIGNsYXNzPVwibmF2YmFyLWl0ZW0gbmF2YmFyLWl0ZW0tLWNhcnQgaGlkZGVuLW1kLWRvd25cIj48L25hdmJhci1jYXJ0PlxyXG4gICAgICAgICAgICA8bmF2YmFyLWl0ZW0gW2RhdGFdPVwic2V0dGluZ3MucGhvbmVcIiBjbGFzcz1cIm5hdmJhci1pdGVtIG5hdmJhci1pdGVtLS1waG9uZVwiPjwvbmF2YmFyLWl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBoaWRkZW4tbGctdXBcIj5cclxuICAgICAgICAgICAgPG5hdmJhci1pdGVtIFtkYXRhXT1cInNldHRpbmdzLnN0b2Nrc1wiIGNsYXNzPVwibmF2YmFyLWl0ZW0gbmF2YmFyLWl0ZW0tLXN0b2NrcyBcIj48L25hdmJhci1pdGVtPlxyXG4gICAgICAgICAgICA8bmF2YmFyLWl0ZW0gW2RhdGFdPVwic2V0dGluZ3MuZGVsaXZlcnlcIiBjbGFzcz1cIm5hdmJhci1pdGVtIG5hdmJhci1pdGVtLS1kZWxpdmVyeVwiPjwvbmF2YmFyLWl0ZW0+XHJcbiAgICAgICAgICAgIDxuYXZiYXItY2FydCBbZGF0YV09XCJzZXR0aW5ncy5jYXJ0XCIgW2NhcnREYXRhXT1cImNhcnREYXRhXCIgY2xhc3M9XCJuYXZiYXItaXRlbSBuYXZiYXItaXRlbS0tY2FydFwiPjwvbmF2YmFyLWNhcnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IiwiPG1hcmtldC1uYXZiYXI+PC9tYXJrZXQtbmF2YmFyPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtNQUF1QiwyQ0FDbkI7VUFBQTtVQUFBLGdCQUFpQiwrQ0FDYjtVQUFBO1VBQUE7MkNBQUEsVUFBQTtVQUFBLCtDQUF1RztVQUFBLGlCQUNtQiwrQ0FDMUg7aUJBQUE7Y0FBQTtNQUFnRCxtREFDNUM7VUFBQTtVQUFBOzJDQUFBLFVBQUE7VUFBQSwrQ0FBK0c7VUFBQSxxQkFDL0c7VUFBQTtVQUFBO2FBQUE7VUFBQSxnREFBNkg7VUFBQSxxQkFDN0g7VUFBQTtVQUFBO2FBQUE7VUFBQSx3QkFBMEYsK0NBQ3hGO2lCQUFBLGdDQUNOO1VBQUE7VUFBQSw4QkFBaUM7TUFDN0I7VUFBQTsyQ0FBQSxVQUFBO1VBQUEsK0NBQTZGO1VBQUEscUJBQzdGO1VBQUE7VUFBQTthQUFBO1VBQUEsd0JBQWdHO01BQ2hHO1VBQUE7MkNBQUEsVUFBQTtVQUFBLHVFQUE4RztpQkFBQSxnQ0FDNUc7TUFDSjs7SUFaVztJQUFiLFdBQWEsU0FBYjtJQUdpQjtJQUFiLFlBQWEsU0FBYjtJQUNhO0lBQXVCO0lBQXBDLFlBQWEsVUFBdUIsU0FBcEM7SUFDYTtJQUFiLFlBQWEsU0FBYjtJQUdhO0lBQWIsWUFBYSxTQUFiO0lBQ2E7SUFBYixZQUFhLFNBQWI7SUFDYTtJQUF1QjtJQUFwQyxZQUFhLFVBQXVCLFNBQXBDOzs7O29CQ1paO01BQUE7OEJBQUEsVUFBQTtNQUFBOzs7In0=
