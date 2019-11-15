import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../dynamic-form-question/question-dropdown';
import { QuestionBase, Option } from '../dynamic-form-question/question-base';
import { TextboxQuestion } from '../dynamic-form-question/question-textbox';
import { RadioQuestion } from '../dynamic-form-question/question-radio';

@Injectable()
export class QuickIndicationQuestionService {

  getQuestions() {

    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'limit',
        label: 'Limit Request',
        options: [
          new Option({ key: '1000000', value: '$1000000' }),
          new Option({ key: '2000000', value: '$2000000' }),
          new Option({ key: '3000000', value: '$3000000' }),
          new Option({ key: '4000000', value: '$4000000' }),
          new Option({ key: '5000000', value: '$5000000' }),
          new Option({ key: '6000000', value: '$6000000' }),
          new Option({ key: '7000000', value: '$7000000' }),
          new Option({ key: '8000000', value: '$8000000' }),
          new Option({ key: '9000000', value: '$9000000' }),
          new Option({ key: '10000000', value: '$10000000' })
        ],
        required: false,
        mapping: 'policy.limit',
        order: 1
      }),

      new TextboxQuestion({
        key: 'underlyingPremium',
        label: 'Underlying Premium ($)',
        required: false,
        type: 'number',
        mapping: 'policy.umbrellaCommercialAuto.underlyingPremium',
        order: 2
      }),

      new RadioQuestion({
        key: 'generalLiability',
        label: 'Include General Liability',
        options: [
          new Option({ key: true, value: 'Yes' }),
          new Option({ key: false, value: 'No' })
        ],
        required: true,
        mapping: 'policy.underlyingExposures.generalLiability',
        order: 3
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
