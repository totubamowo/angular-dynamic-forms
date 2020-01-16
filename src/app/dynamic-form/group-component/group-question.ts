import { QuestionBase } from '../question-base';

export class GroupQuestion extends QuestionBase<object> {
  controlType = 'group';
  questions: QuestionBase<any>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'];
  }
}