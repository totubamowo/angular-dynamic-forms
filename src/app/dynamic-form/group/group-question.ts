import { Question } from '../question';

export class GroupQuestion extends Question<object> {
  questions: Question<any>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.questions = options['questions'] || [];
  }
}