import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ManageCataloguePageComponent } from './pages/manage-catalogue-page/manage-catalogue-page.component';
import { ManageProductDetailsComponent } from './pages/manage-product-details/manage-product-details.component';
import { FileUploadModule } from 'primeng/fileupload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImageModule } from 'primeng/image';
import { EditorModule } from 'primeng/editor';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    ProductDetailPageComponent,
    CartPageComponent,
    OrdersPageComponent,
    DashboardPageComponent,
    ManageCataloguePageComponent,
    ManageProductDetailsComponent,
    HomePageComponent,
    CheckoutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    BrowserAnimationsModule,
    ToastModule,
    ImageModule,
    EditorModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
