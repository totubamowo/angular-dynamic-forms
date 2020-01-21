import { QuestionBase } from '../question-base';

export class GroupQuestion extends QuestionBase<object> {
  questions: QuestionBase<any>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'];
  }
}