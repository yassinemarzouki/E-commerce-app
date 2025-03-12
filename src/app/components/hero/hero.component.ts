import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  products = [
    { title: 'Product 1', price: 19.99, stockStatus: 'in-stock', imageUrl: 'product/T-Shirt-1.png' },
    { title: 'Product 2', price: 29.99, stockStatus: 'out-of-stock', imageUrl: 'product/T-Shirt-2.png' },
    { title: 'Product 3', price: 15.99, stockStatus: 'in-stock', imageUrl: 'product/T-Shirt-3.png' },
    { title: 'Product 4', price: 39.99, stockStatus: 'in-stock', imageUrl: 'product/T-Shirt-4.png' },
    { title: 'Product 5', price: 25.00, stockStatus: 'out-of-stock', imageUrl: 'product/T-Shirt-5.png' }
  ];
  
}