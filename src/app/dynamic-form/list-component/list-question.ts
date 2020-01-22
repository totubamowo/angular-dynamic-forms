import { Question } from '../question';

export class ListQuestion extends Question<object[]> {
  questions: Question<any>[] = [];
  maxLength: number;

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'] || [];
    this.questions = options['maxLength'] || Number.MAX_VALUE;
  }
}