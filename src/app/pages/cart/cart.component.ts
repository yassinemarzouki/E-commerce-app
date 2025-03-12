import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }

  updateQuantity(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}