import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatIconModule, MAT_DATE_LOCALE } from '@angular/material';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { InsuranceQuoteComponent } from './insurance-quote/insurance-quote.component';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormControlComponent } from './dynamic-form/form-control/form-control.component';
import { GroupFormControlComponent } from './dynamic-form/group/group-form-control.component';
import { CheckboxFormControlComponent } from './dynamic-form/checkbox/checkbox-form-control.component';
import { DropdownFormControlComponent } from './dynamic-form/dropdown/dropdown-form-control.component';
import { RadioFormControlComponent } from './dynamic-form/radio/radio-form-control.component';
import { TextboxFormControlComponent } from './dynamic-form/textbox/textbox-form-control.component';
import { ListFormControlComponent } from './dynamic-form/list/list-form-control.component';
import { ListItemComponent } from './dynamic-form/list/list-item/list-item.component';
import { ListContainerDirective } from './dynamic-form/list/list-container.directive';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

import { BASE_PATH as QE_BASE_PATH } from './starstone-api-client/quick-eligibility';
import { BASE_PATH as QI_BASE_PATH } from './starstone-api-client/quick-indication';
import { QuickIndicationComponent, PremiumDialog } from './quick-indication/quick-indication.component';
import { QuickEligibilityComponent } from './quick-eligibility/quick-eligibility.component';

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
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    FormControlComponent,
    GroupFormControlComponent,
    CheckboxFormControlComponent,
    DropdownFormControlComponent,
    RadioFormControlComponent,
    TextboxFormControlComponent,
    ListFormControlComponent,
    PremiumDialog,
    ListItemComponent,
    ListContainerDirective,
    ExampleTwoComponent,
    ExampleOneComponent,
    InsuranceQuoteComponent,
    QuickIndicationComponent,
    QuickEligibilityComponent,
    TopBarComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: QE_BASE_PATH, useValue: environment.escapeApi.baseUrl },
    { provide: QI_BASE_PATH, useValue: environment.escapeApi.baseUrl },
  ],
  entryComponents: [
    PremiumDialog,
    ListItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }