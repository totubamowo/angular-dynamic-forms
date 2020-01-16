import { Component } from '@angular/core';
import { ExampleOneQuestionService } from './example-one.question.service';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css'],
  providers: [ExampleOneQuestionService]
})

export class ExampleOneComponent {
  questions: any[];
  payload: any;

  constructor(questionService: ExampleOneQuestionService) {
    this.questions = questionService.getQuestions();
  }

  onSubmitted(payload: any) {
    this.payload = payload;
  }
}