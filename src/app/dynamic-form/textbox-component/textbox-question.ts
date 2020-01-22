import { QuestionBase } from '../question-base';

export class TextboxQuestion extends QuestionBase<string> {
  minLength: number;
  maxLength: number;
  min: number;
  max: number;
  type: string;
  controlPrefix: string;
  controlSuffix: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
