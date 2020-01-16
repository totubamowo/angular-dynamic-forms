import { Injectable } from '@angular/core';

@Injectable()
export class ExampleTwoQuestionService {

  getQuestions() {

    let questions: any[] = [
      {
        controlType: 'dropdown',
        key: 'dropdown',
        label: 'Dropdown',
        options: [
          { key: 1, value: 'I' },
          { key: 2, value: 'II' },
          { key: 3, value: 'III' },
          { key: 4, value: 'IV' },
          { key: 5, value: 'V' }
        ],
        required: false,
        order: 1
      },
      {
        controlType: 'textbox',
        key: 'numberTextbox',
        label: 'Number',
        type: 'number',
        required: false,
        order: 2
      },
      {
        controlType: 'textbox',
        key: 'emailTextbox',
        label: 'Email',
        type: 'email',
        required: false,
        order: 3
      },
      {
        controlType: 'group',
        key: 'group',
        label: 'Group',
        required: false,
        questions: [
          { controlType: 'textbox', key: 'childOne', label: 'Child One', type: 'text', minLength: 3 },
          { controlType: 'textbox', key: 'childTwo', label: 'Child Two', type: 'text' }
        ],
        order: 4
      },
      {
        controlType: 'radio',
        key: 'liked',
        label: 'Are you enjoying this?',
        options: [
          { key: true, value: 'Yes' },
          { key: false, value: 'No' }
        ],
        required: false,
        order: 5
      },
      {
        controlType: 'list',
        max: 3,
        key: 'list',
        label: 'List',
        required: true,
        questions: [
          { controlType: 'textbox', key: 'childOne', label: 'Child One', type: 'text' },
          { controlType: 'textbox', key: 'childTwo', label: 'Child Two', type: 'text' }
        ],
        order: 6
      }
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
