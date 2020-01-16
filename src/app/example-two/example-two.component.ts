import { Component } from '@angular/core';
import { ExampleTwoQuestionService } from './example-two.question.service'

@Component({
  selector: 'quick-indication',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css'],
  providers: [ExampleTwoQuestionService]
})

export class ExampleTwoComponent {
  questions: any[];
  payload: any;

  constructor(questionService: ExampleTwoQuestionService) {
    this.questions = questionService.getQuestions();
  }

  onSubmitted(payload: any) {
    this.payload = payload;
  }
}