import { QuestionBase, Option } from './question-base';

export class RadioQuestion extends QuestionBase<boolean> {
  controlType = 'radio';
  type: boolean;
  options: Option[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'].map(opt => {
      return new Option({ key: opt.key, value: opt.value });
    }) || [
        { key: true, value: 'Yes' },
        { key: false, value: 'No' }
      ];
  }
}
