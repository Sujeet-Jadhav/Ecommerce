import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  cartProducts: any[] = [];
  productPrice: number = 0;
  totalCartPrice: number = 0;
  totalProducts: number = 0;
  totalQuantity: number = 0;
  isAccepted: boolean = true;

  constructor(private cartService: CartService) {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartProducts = this.cartService.getCartProducts();
    this.totalProducts = this.cartProducts.length || 0;
    this.totalQuantity = 0;
    this.totalCartPrice = 0;
    let index = 0;
    for (let i of this.cartProducts) {
      this.totalQuantity += i.quantity;
      this.totalCartPrice += this.productPrice;
      this.totalCartPrice +=
        this.cartProducts[index].quantity * this.cartProducts[index].price;
      index++;
    }
  }

  decrementQuantity(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      this.totalQuantity--;
      this.totalCartPrice -= this.cartProducts[index].price;
    }
  }

  incrementQuantity(index: number) {
    this.cartProducts[index].quantity++;
    this.totalQuantity++;
    this.totalCartPrice += this.cartProducts[index].price;
  }

  removeProduct(index: number) {
    this.cartService.removeFromCart(index);
    this.getCartProducts();
  }
}
