import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>(this.cart);
  cartItems$ = this.cartItemsSubject.asObservable();

  getCartItems() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cart); // Mettre à jour l'observable
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.cartItemsSubject.next(this.cart);
  }

  updateQuantity(id: number, quantity: number) {
    const product = this.cart.find(item => item.id === id);
    if (product && quantity > 0) {
      product.quantity = quantity;
    } else {
      this.removeFromCart(id);
    }
    this.cartItemsSubject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartItemsSubject.next(this.cart);
  }
}