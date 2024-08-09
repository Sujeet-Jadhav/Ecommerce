import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ManageCataloguePageComponent } from './pages/manage-catalogue-page/manage-catalogue-page.component';
import { ManageProductDetailsComponent } from './pages/manage-product-details/manage-product-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'category/:type',
    component: ProductsPageComponent,
    title: 'Category',
  },
  {
    path: 'product/:id',
    component: ProductDetailPageComponent,
    title: 'Details',
  },
  {
    path: 'cart',
    component: CartPageComponent,
    title: 'Cart ',
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    title: 'Checkout',
  },
  {
    path: 'orders',
    component: OrdersPageComponent,
    title: 'Ordered Products',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    title: 'Dashboard',
  },
  {
    path: 'manage-catalogue',
    component: ManageCataloguePageComponent,
    title: 'Manage Catalogue',
  },
  {
    path: 'manage-product/:id',
    component: ManageProductDetailsComponent,
    title: 'Manage Product',
  },
  {
    path: '**',
    component: ErrorPageComponent,
    title: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
