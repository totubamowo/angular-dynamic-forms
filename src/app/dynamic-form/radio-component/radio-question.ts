import { Option } from '../option';
import { Question } from '../question';

export class RadioQuestion extends Question<any> {
  options: Option<any>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}