import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatTabsModule, MatIconModule, MAT_DATE_LOCALE } from '@angular/material';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleOneComponent } from './example-one/example-one.component';
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
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'example-one', component: ExampleOneComponent },
      { path: 'example-two', component: ExampleTwoComponent }
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
    ExampleTwoComponent,
    ExampleOneComponent,
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