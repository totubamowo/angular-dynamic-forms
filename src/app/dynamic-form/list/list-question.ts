import { Question } from '../question';

export class ListQuestion extends Question<object[]> {
  questions: Question<any>[] = [];
  minLength: number;
  maxLength: number;

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'] || [];
    this.questions = options['minLength'] || 0;
    this.questions = options['maxLength'] || Number.MAX_VALUE;
  }
}