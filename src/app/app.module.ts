import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BASE_PATH as QE_BASE_PATH } from './starstone-api-client/quick-eligibility';
import { BASE_PATH as QI_BASE_PATH } from './starstone-api-client/quick-indication';
import { TopBarComponent } from './top-bar/top-bar.component';
import { QuickIndicationComponent } from './quick-indication/quick-indication.component';
import { AppService } from './app.service';
import { DynamicFormComponent } from './dynamic-form-question/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicGroupQuestionComponent } from './dynamic-group-question/dynamic-group-question.component';
import { MessagesComponent } from './messages/messages.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatTabsModule, MatTableModule, MatProgressSpinnerModule, MAT_DATE_LOCALE } from '@angular/material';
import { QuickEligibilityComponent } from './quick-eligibility/quick-eligibility.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'qi', component: QuickIndicationComponent },
      { path: 'qe', component: QuickEligibilityComponent }
    ])
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicGroupQuestionComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }