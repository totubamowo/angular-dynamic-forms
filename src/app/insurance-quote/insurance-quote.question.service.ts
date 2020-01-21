import { Injectable } from '@angular/core';

@Injectable()
export class InsuranceQuoteQuestionService {

  getQuestions() {

    let questions: any[] = [
      {
        controlType: 'textbox',
        type: "number",
        key: 'age',
        label: 'Age',
        required: true,
        order: 1
      },
      {
        controlType: 'textbox',
        key: 'weight',
        label: 'Weight (Kg)',
        type: 'number',
        required: true,
        order: 2
      },
      {
        controlType: 'group',
        key: 'height',
        label: 'Height',
        questions: [
          {
            controlType: 'textbox',
            key: 'feet',
            label: '',
            type: 'number',
            controlSuffix: "ft",
            required: false
          },
          {
            controlType: 'textbox',
            key: 'inches',
            label: '',
            type: 'number',
            controlSuffix: "in",
            required: false
          }
        ],
        required: false,
        order: 3
      },
      {
        controlType: 'radio',
        key: 'gender',
        label: 'Gender',
        options: [
          { value: 'M', description: 'Male' },
          { value: 'F', description: 'Female' }
        ],
        required: false,
        order: 4
      },
      {
        controlType: 'radio',
        key: 'smokingHabit',
        label: 'Are you a smoker?',
        options: [
          { value: 0, description: 'Yes' },
          { value: 1, description: 'Not smoking now but smoked in the past' },
          { value: 2, description: 'Never smoked' },
        ],
        value: 0,
        required: false,
        order: 4
      },
      {
        controlType: 'checkbox',
        key: 'conditions',
        label: 'Have you been diagnosed with any of the following?',
        questions: [
          { key: 'cancer', label: 'Cancer'},
          { key: 'diabetes', label: 'Diabetes' },
          { key: 'cardio', label: 'Cardiovascular disease' }
        ],
        value: {
          cancer: true,
          diabetes: true,
          cardio: false
        },
        required: false,
        order: 5
      }
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
