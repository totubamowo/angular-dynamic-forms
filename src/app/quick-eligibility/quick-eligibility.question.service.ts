import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../dynamic-form-question/question-dropdown';
import { QuestionBase, Option } from '../dynamic-form-question/question-base';
import { TextboxQuestion } from '../dynamic-form-question/question-textbox';

@Injectable()
export class QuickEligibilityQuestionService {

  getQuestions() {

    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'product',
        label: 'Select Product',
        required: true,
        options: [
          new Option({ key: 'Umbrella', value: 'Umbrella' }),
          new Option({ key: 'ExcessOverPrimary', value: 'Excess Over Primary' }),
          new Option({ key: 'ExcessLiability', value: 'Excess Liability' })
        ],
        mapping: 'product',
        order: 1
      }),

      new DropdownQuestion({
        key: 'searchBy',
        label: 'Search by',
        required: true,
        options: [
          new Option({ key: 'ClassCode', value: 'Class Code' }),
          new Option({ key: 'Description', value: 'Description' })
        ],
        mapping: 'searchBy',
        order: 2
      }),

      new TextboxQuestion({
        key: 'searchInput',
        label: 'Input Value',
        value: '',
        required: true,
        type: 'text',
        mapping: 'searchInput',
        order: 3
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
