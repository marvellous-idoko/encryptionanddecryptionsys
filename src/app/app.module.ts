import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Angular4PaystackModule } from 'angular4-paystack';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
// import { PortalComponent } from './portal/portal.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {  MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import {MatRippleModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { 
   MatInputModule, MatSelectModule, MatRadioModule, 
   MatCardModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
// import { PayPremiumComponent } from './pay-premium/pay-premium.component';
// import { PremiumHistoryComponent } from './premium-history/premium-history.component';
// import { MakeClaimsComponent } from './make-claims/make-claims.component';
// import { UpdateMetricsComponent } from './update-metrics/update-metrics.component';
// import { AgriMtericsComponent } from './agri-mterics/agri-mterics.component';
// import { PayAgricPremComponent } from './pay-agric-prem/pay-agric-prem.component';
// import { MakeClaimHistoryComponent } from './make-claim-history/make-claim-history.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    // PortalComponent,
    RegisterComponent,
    LoginComponent,
    // PayPremiumComponent,
    // PremiumHistoryComponent,
    // MakeClaimsComponent,
    // UpdateMetricsComponent,
    // AgriMtericsComponent,
    // PayAgricPremComponent,
    // MakeClaimHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    MatButtonModule,
    // MatButtonToggleModule,
    MatCardModule,
    MatSliderModule,
    MatButtonToggleModule,
    // MatCheckboxModule,
    // MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,  
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    MatRippleModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    // Angular4PaystackModule.forRoot('pk_test_c5bc80647b60c1bf05f3f6fdac32a99f82b598ce'),

  ],



  
  // exports: [ MatButtonModule ],
  providers: [  
    MatDatepickerModule,  
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
