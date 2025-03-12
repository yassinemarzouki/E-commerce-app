import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

 alertMessage: string | null = null;

  products = [
    { id: 1, title: 'Product 1', price: 19.99, stockStatus: 'in-stock', imageUrl: 'product/T-Shirt-1.png' },
    { id: 2, title: 'Product 2', price: 29.99, stockStatus: 'out-of-stock', imageUrl: 'product/T-Shirt-2.png' },
    { id: 3, title: 'Product 3', price: 15.99, stockStatus: 'in-stock', imageUrl: 'product/T-Shirt-3.png' },
    { id: 4, title: 'Product 4', price: 39.99, stockStatus: 'in-stock', imageUrl: 'product/T-Shirt-4.png' },
    { id: 5, title: 'Product 5', price: 25.00, stockStatus: 'out-of-stock', imageUrl: 'product/T-Shirt-5.png' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
   if (product.stockStatus === 'out-of-stock') {
      this.alertMessage = 'This product will be available soon!'; 
    } else {
      this.cartService.addToCart(product);
      this.alertMessage = null; 
    }
  }

  closeAlert() {
    this.alertMessage = null;
  }
}