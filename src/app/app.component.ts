import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',  // This should be 'app-root', NOT 'app-products'
  standalone: true,
  imports: [ProductsComponent],  // Import the ProductsComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected from "styleUrl" to "styleUrls"
})
export class AppComponent {
  title = 'digicams-store';
}

