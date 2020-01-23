import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Question } from '../question';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})

export class FormControlComponent {
  @Input() question: Question<any>;
  @Input() controlFormGroup: FormGroup;
}