import { QuestionBase } from '../question-base';

export class ListQuestion extends QuestionBase<object[]> {
  controlType = 'list';
  questions: QuestionBase<any>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'];
  }
}