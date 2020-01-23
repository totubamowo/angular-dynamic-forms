import { Option } from '../option';
import { Question } from '../question';

export class DropdownQuestion extends Question<string> {
  options: Option<string>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}