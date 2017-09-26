/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './gallery';
const styles_ComponentViewGallery:any[] = ([] as any[]);
export const RenderType_ComponentViewGallery:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ComponentViewGallery,data:{}});
function View_ComponentViewGallery_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),8,'td',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      5,'a',[['class','me-link']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.imageSelect(_v.context.index)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i1.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'mm-active':0}),(_l()(),i0.ɵted((null as any),
      ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'img',
      [['class','img-responsive']],[[8,'src',4]],(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
      ['\n        ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'me-link';
    const currVal_1:any = _ck(_v,4,0,(_co.selected == _v.context.index));
    _ck(_v,3,0,currVal_0,currVal_1);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_2:any = i0.ɵinlineInterpolate(1,'',((('/photos/' + _co.productId) + '/m_') + _v.context.$implicit),
        '');
    _ck(_v,6,0,currVal_2);
  });
}
export function View_ComponentViewGallery_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),8,'table',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),6,'tbody',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),4,'tr',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ComponentViewGallery_1)),
      i0.ɵdid(802816,(null as any),0,i1.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i2.ComponentViewGallery = _v.component;
    const currVal_0:any = _co.images;
    _ck(_v,7,0,currVal_0);
  },(null as any));
}
export function View_ComponentViewGallery_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'v-gallery',[['class',
      'me-screens col-xs-12']],(null as any),(null as any),(null as any),View_ComponentViewGallery_0,
      RenderType_ComponentViewGallery)),i0.ɵdid(49152,(null as any),0,i2.ComponentViewGallery,
      ([] as any[]),(null as any),(null as any))],(null as any),(null as any));
}
export const ComponentViewGalleryNgFactory:i0.ComponentFactory<i2.ComponentViewGallery> = i0.ɵccf('v-gallery',
    i2.ComponentViewGallery,View_ComponentViewGallery_Host_0,{images:'images',productId:'productId'},
    {onImageSelect:'onImageSelect'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvcGFnZXMvdmlldy9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Qcm9qZWN0cy9tYXJrZXQvbWFya2V0L2NsaWVudC93ZWIvYXBwMS9wYWdlcy92aWV3L2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LnRzIiwibmc6Ly8vQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvcGFnZXMvdmlldy9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS50cy5Db21wb25lbnRWaWV3R2FsbGVyeS5odG1sIiwibmc6Ly8vQzovUHJvamVjdHMvbWFya2V0L21hcmtldC9jbGllbnQvd2ViL2FwcDEvcGFnZXMvdmlldy9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS50cy5Db21wb25lbnRWaWV3R2FsbGVyeV9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuPHRhYmxlPlxuICAgIDx0cj5cbiAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBpbWFnZSBvZiBpbWFnZXM7IGxldCBpPWluZGV4O1wiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJtZS1saW5rXCIgKGNsaWNrKT1cImltYWdlU2VsZWN0KGkpXCIgW25nQ2xhc3NdPVwieydtbS1hY3RpdmUnOnNlbGVjdGVkPT1pfVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7Jy9waG90b3MvJytwcm9kdWN0SWQrICcvbV8nKyAgaW1hZ2V9fVwiPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3RhYmxlPlxuIiwiPHYtZ2FsbGVyeT48L3YtZ2FsbGVyeT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7b0JDR1E7TUFBQSx3RUFBK0M7YUFBQSxvQ0FDM0M7TUFBQTtRQUFBO1FBQUE7UUFBbUI7VUFBQTtVQUFBO1FBQUE7UUFBbkI7TUFBQSx1Q0FBQTtrREFBQTtNQUFBLGtDQUE0QyxrQkFBc0M7TUFBQSx5QkFDOUU7TUFBQTtNQUFBLGdCQUEwRSxtREFDMUU7TUFBQTs7SUFGRDtJQUF5QztJQUE1QyxXQUFHLFVBQXlDLFNBQTVDOzs7SUFDZ0M7UUFBQTtJQUE1QixXQUE0QixTQUE1Qjs7OztvQkFMaEIsdUNBQ0E7TUFBQTtNQUFBLDhCQUFPLDJDQUNIO2FBQUE7VUFBQTtNQUFBO01BQUEsNENBQUk7TUFDQTthQUFBOzRCQUFBLHlDQUlLO1VBQUEsYUFDSix1Q0FDRDtVQUFBOztJQU5JO0lBQUosV0FBSSxTQUFKOzs7O29CQ0hSO01BQUE7cUNBQUEsVUFBQTtNQUFBOzs7OyJ9
