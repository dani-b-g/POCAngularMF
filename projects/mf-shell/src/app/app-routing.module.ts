import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('mfShopping/ProductsModule').then((s) => s.ProductsModule),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('mfPayment/PaymentComponent').then((parent) => parent.PaymentComponent),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('mfAuth/AuthComponent').then((a) => a.AuthComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
