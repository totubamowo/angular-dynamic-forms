import { QuestionBase } from '../question-base';

export class ListQuestion extends QuestionBase<object[]> {
  maxLength: number;
  questions: QuestionBase<any>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'];
  }
}