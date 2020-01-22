import { Question } from '../question';

export class TextboxQuestion extends Question<string> {
  type: string;
  minLength: number;
  maxLength: number;
  min: number;
  max: number;
  controlPrefix: string;
  controlSuffix: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.type = options['minLength'];
    this.type = options['maxLength'];
    this.type = options['min'];
    this.type = options['max'];
    this.type = options['controlPrefix'];
    this.type = options['controlSuffix'];
  }
}
