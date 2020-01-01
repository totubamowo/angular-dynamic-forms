export interface IOption {
  key: any;
  value: string;
}

export class Option implements IOption {
  key: any;
  value: string;
  id: string;
  constructor(option: IOption) {
    this.key = option.key;
    this.value = option.value;
    this.id = option.key + option.value;
  }
}

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  mapping: string;

  constructor(
    options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      mapping?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.mapping = options.mapping || '';
  }
}
