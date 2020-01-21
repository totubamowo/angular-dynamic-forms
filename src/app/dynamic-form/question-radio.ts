import { QuestionBase, Option } from './question-base';

export class RadioQuestion extends QuestionBase<any> {
  options: Option[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'].map(opt => {
      return new Option({ description: opt.description, value: opt.value });
    });
  }
}