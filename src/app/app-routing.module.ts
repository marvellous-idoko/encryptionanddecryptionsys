import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
// import { PayPremiumComponent } from "./pay-premium/pay-premium.component";
// import { UpdateMetricsComponent } from "./update-metrics/update-metrics.component";
// import { PremiumHistoryComponent } from "./premium-history/premium-history.component";
// import { AgriMtericsComponent } from "./agri-mterics/agri-mterics.component";
// import { PayAgricPremComponent } from './pay-agric-prem/pay-agric-prem.component';
// import { MakeClaimHistoryComponent } from "./make-claim-history/make-claim-history.component";
// import { MakeClaimsComponent } from "./make-claims/make-claims.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  // {path:'pay-premium', component:PayPremiumComponent},
  // {path:'update-metric', component:UpdateMetricsComponent},
  // {path:'premium-history', component:PremiumHistoryComponent},
  // {path:'agric-metrics', component:AgriMtericsComponent},
  // {path:'payAgricPrem', component:PayAgricPremComponent},
  // {path:'make-claims', component:MakeClaimsComponent},
  // {path:'claims-history', component:MakeClaimHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
