import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { InsuranceQuoteComponent } from './insurance-quote/insurance-quote.component';
import { QuickIndicationComponent } from './quick-indication/quick-indication.component';
import { QuickEligibilityComponent } from './quick-eligibility/quick-eligibility.component';

const routes: Routes = [
  { path: 'example-one', component: ExampleOneComponent },
  { path: 'example-two', component: ExampleTwoComponent },
  { path: 'insurance-quote', component: InsuranceQuoteComponent },
  { path: 'quick-indication', component: QuickIndicationComponent },
  { path: 'quick-eligibility', component: QuickEligibilityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }