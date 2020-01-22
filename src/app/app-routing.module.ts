import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { InsuranceQuoteComponent } from './insurance-quote/insurance-quote.component';

const routes: Routes = [
  { path: 'example-one', component: ExampleOneComponent },
  { path: 'example-two', component: ExampleTwoComponent },
  { path: 'insurance-quote', component: InsuranceQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }