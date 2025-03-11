import { signal } from '@angular/core';
import { Component } from '@angular/core';
import { StoreButtonComponent } from "../store-button/store-button.component";

@Component({
  selector: 'app-header',
  imports: [StoreButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title =signal('Welcome TO ChwayaShop');

}
