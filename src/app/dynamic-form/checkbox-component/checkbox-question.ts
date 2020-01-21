import { QuestionBase, Option } from '../question-base';

export class CheckboxQuestion extends QuestionBase<any[]> {
  questions: QuestionBase<boolean>[] = [];
  options: Option[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'];
  }
}