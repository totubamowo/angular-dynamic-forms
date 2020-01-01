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
          { key: 'Umbrella', value: 'Umbrella' },
          { key: 'ExcessOverPrimary', value: 'Excess Over Primary' },
          { key: 'ExcessLiability', value: 'Excess Liability' }
        ],
        mapping: 'product',
        order: 1
      },
      {
        controlType: 'dropdown',
        key: 'searchBy',
        label: 'Search by',
        required: true,
        options: [
          { key: 'ClassCode', value: 'Class Code' },
          { key: 'Description', value: 'Description' }
        ],
        mapping: 'searchBy',
        order: 2
      },
      {
        controlType: 'textbox',
        key: 'searchInput',
        label: 'Input Value',
        value: '',
        required: true,
        type: 'text',
        mapping: 'searchInput',
        order: 3
      }
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
