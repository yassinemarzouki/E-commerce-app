import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: '', component: HeroComponent },
  { path: 'cart', component: CartComponent }
];
