import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ Fix: Import CommonModule
import { Product } from '../product.model';  // ✅ Ensure correct path
import { products } from '../products';  // ✅ Ensure correct path

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],  // ✅ Fix: Add CommonModule
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = products;  // ✅ Fix: Make sure products exist
  shareOnTelegram(product: Product) {
    const telegramLink = `https://t.me/nurzhasb?text=Check out this camera: ${product.name} - ${product.link}`;
    window.open(telegramLink, '_blank');
  }
  
}




