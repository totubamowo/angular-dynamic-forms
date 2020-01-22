import { Question } from '../question';

export class CheckboxQuestion extends Question<object> {
  questions: Question<boolean>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'] || [];
  }
}