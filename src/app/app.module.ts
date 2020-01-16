import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatProgressSpinnerModule, MatSnackBarModule, MatTabsModule, MatTableModule, MatIconModule, MAT_DATE_LOCALE } from '@angular/material';
import { QuickIndicationComponent } from './quick-indication/quick-indication.component';
import { QuickEligibilityComponent } from './quick-eligibility/quick-eligibility.component';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form/dynamic-form-control.component';
import { GroupFormControlComponent } from './dynamic-form/group-component/group-form-control.component';
import { DropdownFormControlComponent } from './dynamic-form/form-control-dropdown.component';
import { RadioFormControlComponent } from './dynamic-form/form-control-radio.component';
import { TextboxFormControlComponent } from './dynamic-form/form-control-textbox.component';
import { ListFormControlComponent } from './dynamic-form/list-component/list-form-control.component';
import { ListItemComponent } from './dynamic-form/list-component/list-item-component/list-item.component';
import { ListContainerDirective } from './dynamic-form/list-component/list-container.directive';
import { MessagesComponent } from './messages/messages.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppService } from './app.service';
import { environment } from 'src/environments/environment';

import { BASE_PATH as QE_BASE_PATH } from './starstone-api-client/quick-eligibility';
import { BASE_PATH as QI_BASE_PATH } from './starstone-api-client/quick-indication';


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
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'qi', component: QuickIndicationComponent },
      { path: 'qe', component: QuickEligibilityComponent }
    ])
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormControlComponent,
    GroupFormControlComponent,
    DropdownFormControlComponent,
    RadioFormControlComponent,
    TextboxFormControlComponent,
    ListFormControlComponent,
    ListItemComponent,
    ListContainerDirective,
    QuickIndicationComponent,
    QuickEligibilityComponent,
    MessagesComponent,
    TopBarComponent
  ],
  providers: [
    AppService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    { provide: QE_BASE_PATH, useValue: environment.escapeApi.baseUrl },
    { provide: QI_BASE_PATH, useValue: environment.escapeApi.baseUrl },
  ],
  entryComponents: [
    ListItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }