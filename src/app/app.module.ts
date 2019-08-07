import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './menu/list/list.component';
import { DetailComponent } from './menu/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { SiginwithComponent } from './siginwith/siginwith.component';
import { HeaderComponent } from './header/header.component';
import { PlaceholderComponent } from './menu/placeholder/placeholder.component';
import { CheckoutComponent } from './checkout/checkout.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'menu', component: MenuComponent, children: [
    {path: '', component: PlaceholderComponent},
    {path: ':category', component: DetailComponent},
    {path: 'detail/:cat/:item', component: DetailComponent},
    {path: 'detail', component: DetailComponent},

  ]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path:'**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    DetailComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    SiginwithComponent,
    HeaderComponent,
    PlaceholderComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
