import { Component } from '@angular/core';
import { CartService } from './../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title: string = 'Ecommerce Store';
  isUserLoggedIn: boolean = true;
  phone: string = '+91-9822222000';
  email: string = 'email@example.com';
  location: string = 'Shop 12, Nagar Road';
  count: number = 0;

  constructor(private cartService: CartService) {
    this.count = this.cartService.getCartProducts().length || 0;
  }
}
