import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: ProductsComponent },  // ✅ Fix: Set ProductsComponent as default
    ]),
  ],
};


