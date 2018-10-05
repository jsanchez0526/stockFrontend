import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonsModule, AlertModule, TabsModule} from 'ngx-bootstrap';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Login2Component} from './components/login2/login2.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { BillingComponent } from './components/billing/billing.component';
import { StockStockComponent } from './components/stock-stock/stock-stock.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    DashboardComponent,
    ProductComponent,
    BillingComponent,
    StockStockComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ButtonsModule, AlertModule.forRoot(),
    TabsModule.forRoot()

  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
