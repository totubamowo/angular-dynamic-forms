import { QuestionBase, Option } from '../question-base';

export class DropdownQuestion extends QuestionBase<string> {
  options: Option[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'].map(opt => {
      return new Option({ description: opt.description, value: opt.value });
    });
  }
}