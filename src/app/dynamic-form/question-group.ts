import { QuestionBase, Option } from './question-base';

export class GroupQuestion extends QuestionBase<object[]> {
  controlType = 'group';
  options: Option[] = [];
  questions: QuestionBase<any>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'];
  }
}