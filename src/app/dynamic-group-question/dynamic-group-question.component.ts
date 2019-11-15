import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../dynamic-form-question/question-base';

@Component({
  selector: 'app-dynamic-group-question',
  templateUrl: './dynamic-group-question.component.html',
  styleUrls: ['./dynamic-group-question.component.css']
})

export class DynamicGroupQuestionComponent implements OnInit {
  @Input() questions: QuestionBase<any>[];
  @Input() form: FormGroup;
  get isValid() { return true; }
  group: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.group = this.formBuilder.array([this.createItem()]);
  }

  createItem(): FormGroup {
    return this.formBuilder.group(this.questions);
  }

  addItem(): void {
    this.group.push(this.createItem());
  }

}