import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatTabsModule, MatIconModule, MAT_DATE_LOCALE } from '@angular/material';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { InsuranceQuoteComponent } from './insurance-quote/insurance-quote.component';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form/dynamic-form-control.component';
import { GroupFormControlComponent } from './dynamic-form/group-component/group-form-control.component';
import { CheckboxFormControlComponent } from './dynamic-form/checkbox-component/checkbox-form-control.component';
import { DropdownFormControlComponent } from './dynamic-form/dropdown-component/dropdown-form-control.component';
import { RadioFormControlComponent } from './dynamic-form/radio-component/radio-form-control.component';
import { TextboxFormControlComponent } from './dynamic-form/textbox-component/textbox-form-control.component';
import { ListFormControlComponent } from './dynamic-form/list-component/list-form-control.component';
import { ListItemComponent } from './dynamic-form/list-component/list-item-component/list-item.component';
import { ListContainerDirective } from './dynamic-form/list-component/list-container.directive';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'example-one', component: ExampleOneComponent },
      { path: 'example-two', component: ExampleTwoComponent },
      { path: 'insurance-quote', component: InsuranceQuoteComponent }
    ])
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormControlComponent,
    GroupFormControlComponent,
    CheckboxFormControlComponent,
    DropdownFormControlComponent,
    RadioFormControlComponent,
    TextboxFormControlComponent,
    ListFormControlComponent,
    ListItemComponent,
    ListContainerDirective,
    ExampleTwoComponent,
    ExampleOneComponent,
    InsuranceQuoteComponent,
    TopBarComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  entryComponents: [
    ListItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }