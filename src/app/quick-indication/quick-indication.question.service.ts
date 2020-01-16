import { Injectable } from '@angular/core';

@Injectable()
export class QuickIndicationQuestionService {

  getQuestions() {

    let questions: any[] = [
      {
        controlType: 'dropdown',
        key: 'limit',
        label: 'Limit Request',
        options: [
          { key: '1000000', value: '$1000000' },
          { key: '2000000', value: '$2000000' },
          { key: '3000000', value: '$3000000' },
          { key: '4000000', value: '$4000000' },
          { key: '5000000', value: '$5000000' },
          { key: '6000000', value: '$6000000' },
          { key: '7000000', value: '$7000000' },
          { key: '8000000', value: '$8000000' },
          { key: '9000000', value: '$9000000' },
          { key: '10000000', value: '$10000000' }
        ],
        required: true,
        mapping: 'policy.limit',
        value: '8000000',
        order: 1
      },
      {
        controlType: 'textbox',
        key: 'anotherLimit',
        label: 'Another Limit',
        required: true,
        mapping: 'policy.anotherLimit',
        value: '100',
        order: 2
      },
      {
        controlType: 'textbox',
        key: 'underlyingPremium',
        label: 'Premium ($)',
        required: false,
        type: 'number',
        mapping: 'policy.umbrellaCommercialAuto.underlyingPremium',
        value: 900,
        order: 3
      },
      {
        controlType: 'radio',
        key: 'generalLiability',
        label: 'Include General Liability',
        options: [
          { key: true, value: 'Yes' },
          { key: false, value: 'No' }
        ],
        required: false,
        mapping: 'policy.underlyingExposures.generalLiability',
        value: false,
        order: 4
      }
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
