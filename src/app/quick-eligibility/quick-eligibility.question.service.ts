import { Injectable } from '@angular/core';

@Injectable()
export class QuickEligibilityQuestionService {

  getQuestions() {

    let questions: any[] = [
      {
        controlType: 'dropdown',
        key: 'product',
        label: 'Select Product',
        required: true,
        options: [
          { value: 'Umbrella', description: 'Umbrella' },
          { value: 'ExcessOverPrimary', description: 'Excess Over Primary' },
          { value: 'ExcessLiability', description: 'Excess Liability' }
        ],
        value: 'Umbrella',
        order: 1
      },
      {
        controlType: 'dropdown',
        key: 'searchBy',
        label: 'Search by',
        required: true,
        options: [
          { value: 'ClassCode', description: 'Class Code' },
          { value: 'Description', description: 'Description' }
        ],
        value: 'Description',
        order: 2
      },
      {
        controlType: 'textbox',
        key: 'searchInput',
        label: 'Search Term',
        required: true,
        type: 'text',
        value: 'Restaurant',
        order: 3
      }
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
