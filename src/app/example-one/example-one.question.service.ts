import { Injectable } from '@angular/core';

@Injectable()
export class ExampleOneQuestionService {

  getQuestions() {

    let questions: any[] = [
      {
        controlType: 'textbox',
        key: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
        order: 1
      },
      {
        controlType: 'textbox',
        key: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
        order: 2
      },
      {
        controlType: 'textbox',
        key: 'workEmail',
        label: 'Work Email',
        type: 'email',
        required: true,
        order: 3
      },
      {
        controlType: 'dropdown',
        key: 'jobTitle',
        label: 'Job Title',
        required: true,
        options: [
          { key: 'Analyst', value: 'Analyst' },
          { key: 'Senior Engineer', value: 'Senior Engineer' },
          { key: 'Tech Lead', value: 'Tech Lead' },
          { key: 'Senior Tech Lead', value: 'Senior Tech Lead' },
          { key: 'Principal Engineer', value: 'Principal Engineer' }
        ],
        order: 4
      }
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}