import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import {AngularFireModule} from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import { AppService } from './shared/app.service';
import { UtilService } from './shared/app.utils.service';

import { OrdersComponent } from './orders/orders.component';
import { TestfeatureComponent } from './testfeature/testfeature.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    OrdersComponent,
    TestfeatureComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AppService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
