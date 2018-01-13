import { NgModule } from "@angular/core";
import { CartPage } from "./cart/cart/cart";
import { HistoryPage } from "./cart/history/history";
import { CatalogPage } from "./catalog/catalog";
import { DeliveryPage } from "./delivery/delivery";
import { SpecialsPage } from "./specials/specials";
import { StocksPage } from "./stocks/stocks";
import { ViewPage } from "./view/view";
import { ControlsModule } from "controls/module";
import { RouterModule } from "@angular/router";
import { ModuleComponentsSpecials } from "./specials/components/module";
import { BrowserModule } from "@angular/platform-browser";
import { NotfoundPage } from "./notfound/page-notfound";
import { ContactsPage } from "./contacts/contacts";
import { ModuleComponentsView } from "./view/components/module";
import { ModuleComponentsCart } from "./cart/components/module";
import { ModuleComponentsCatalog } from "./catalog/components/module";
import { DefaultLayout } from "../layouts/default";
const appRoutes = [
    {
        path: '', component: DefaultLayout, children: [
            { path: '', component: SpecialsPage },
            { path: 'delivery', component: DeliveryPage },
            { path: 'contacts', component: ContactsPage },
            { path: 'cart', component: CartPage },
            { path: 'cart/:contract', component: HistoryPage },
            { path: 'stocks', component: StocksPage },
            { path: ':categoryName/:productId', component: ViewPage },
            { path: ':categoryName', component: CatalogPage },
            { path: '**', component: NotfoundPage }
        ]
    }
];
class PagesModule {
}
PagesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CartPage,
                    HistoryPage,
                    CatalogPage,
                    DeliveryPage,
                    SpecialsPage,
                    StocksPage,
                    ViewPage,
                    NotfoundPage,
                    ContactsPage
                ],
                imports: [
                    BrowserModule,
                    ControlsModule,
                    ModuleComponentsSpecials,
                    ModuleComponentsView,
                    ModuleComponentsCart,
                    ModuleComponentsCatalog,
                    RouterModule.forRoot(appRoutes)
                ],
                exports: [
                    CartPage,
                    HistoryPage,
                    CatalogPage,
                    DeliveryPage,
                    SpecialsPage,
                    StocksPage,
                    ViewPage,
                    NotfoundPage,
                    ContactsPage
                ]
            },] },
];
PagesModule.ctorParameters = () => [];
export { PagesModule, CartPage, HistoryPage, CatalogPage, DeliveryPage, SpecialsPage, StocksPage, ViewPage, NotfoundPage, ContactsPage };
//# sourceMappingURL=module.js.map