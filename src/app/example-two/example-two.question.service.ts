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
          { value: 1, description: 'I' },
          { value: 2, description: 'II' },
          { value: 3, description: 'III' },
          { value: 4, description: 'IV' },
          { value: 5, description: 'V' }
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
          { value: true, description: 'Yes' },
          { value: false, description: 'No' }
        ],
        required: false,
        order: 5
      },
      {
        controlType: 'list',
        maxLength: 3,
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
