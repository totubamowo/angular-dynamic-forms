export class Option<T> {
  value: T;
  description: string;
  constructor(
    option: {
      value?: T,
      description?: string
    } = {}) {
    this.value = option.value;
    this.description = option.description;
  }
}