import {NgModule} from "@angular/core";
import {ComponentCatalogSorting} from "./sorting/sorting";
import {ComponentCatalogFilter} from "./filter/filter";
import {ComponentCatalogProduct} from "./product/product";
import {ComponentCatalogAlert} from "./alert/alert";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ModuleComponents} from "components/module";
import {FormsModule} from "@angular/forms";
import {ComponentFilterButtons} from "./filter/buttons/buttons";
import {ComponentFilterCheckbox} from "./filter/checkbox/checkbox";
import {ComponentFilterCheckboxlist} from "./filter/checkboxlist/checkboxlist";
import {ComponentFilterRadiolist} from "./filter/radiolist/radiolist";
import {ComponentFilterInputs} from "./filter/inputs/inputs";

@NgModule({
    declarations: [
        ComponentCatalogSorting,
        ComponentCatalogFilter,
        ComponentCatalogProduct,
        ComponentCatalogAlert,
        ComponentFilterButtons,
        ComponentFilterCheckbox,
        ComponentFilterCheckboxlist,
        ComponentFilterRadiolist,
        ComponentFilterInputs
    ],
    imports: [BrowserModule, RouterModule, ModuleComponents, FormsModule],
    exports: [
        ComponentCatalogSorting,
        ComponentCatalogFilter,
        ComponentCatalogProduct,
        ComponentCatalogAlert,
        ComponentFilterButtons,
        ComponentFilterCheckbox,
        ComponentFilterCheckboxlist,
        ComponentFilterRadiolist,
        ComponentFilterInputs
    ]
})
export class ModuleComponentsCatalog {

}