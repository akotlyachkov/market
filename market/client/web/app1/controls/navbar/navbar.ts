import {Component} from "@angular/core";
import {Settings,CartData} from "models";
import {NavbarService} from "services";

@Component({
    selector: 'market-navbar',
    host: {'class': 'navbar'},
    templateUrl: 'navbar.html'
})
export class NavbarControl {
     settings: Settings = {
        brand: {
            icon: 'fa-shopping-bag',
            name: 'GetYourBag.ru',
            label: 'Москва',
            link: '/'
        },
        delivery: {
            icon: 'fa-truck',
            name: 'Доставка',
            label: 'бесплатно',
            link: '/delivery'
        },
        stocks: {
            icon: 'fa-tag',
            name: 'Акции',
            label: 'полный список',
            link: '/stocks'
        },
        cart: {
            icon: 'fa-shopping-cart',
            name: 'Корзина',
            label: 'пока что пустая',
            link: '/cart'
        },
        phone: {
            icon: 'fa-phone-square',
            name: '+7(925)477-5001',
            label: '09:00-21:00',
            link: '/contacts'
        },
    };

     cartData: CartData;

    constructor(private navbarService: NavbarService) {
        this.cartData = {sum:0,count:0};
        navbarService.observable.subscribe(cartData => {
            this.cartData = cartData;
        })
    }

}