import { signal } from '@angular/core';
import { Component } from '@angular/core';
import { StoreButtonComponent } from "../store-button/store-button.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [StoreButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}
  showButtonClicked(){
    console.log('show button clicked');
  }

  goToHomePage() {
    this.router.navigate(['/']);  
  }
}
