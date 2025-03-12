import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-button',
  imports: [CommonModule],
  templateUrl: './store-button.component.html',
  styleUrl: './store-button.component.scss'
})
export class StoreButtonComponent {
  @Input() label = '';
  @Output() btnClicked = new EventEmitter();
  cartItemCount = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }

  goToCart() {
    this.router.navigate(['/cart']); 
  }
}