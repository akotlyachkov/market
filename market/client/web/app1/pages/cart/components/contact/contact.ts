import {Component, Output, EventEmitter} from "@angular/core";
import {Contract} from "entities/contract";
import {DeliveryMode} from "entities/delivery";
@Component({
    selector: 'cart-contact',
    host: {'class': 'form-horizontal'},
    templateUrl: 'contact.html'
})
export class ComponentCartContact {
    showError: boolean = false;
    contract: Contract = new Contract();
    deliveryMode = DeliveryMode;

    @Output()
    onSubmit = new EventEmitter<Contract>();

    constructor() {
        this.contract.delivery = DeliveryMode.Auto;
        this.contract.sendSms = true;
    }

    submit() {
        this.onSubmit.emit(this.contract);
    }

}