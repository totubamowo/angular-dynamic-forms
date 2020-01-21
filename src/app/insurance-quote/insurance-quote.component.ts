import { Component, ViewEncapsulation } from '@angular/core';
import { InsuranceQuoteQuestionService } from './insurance-quote.question.service'

@Component({
  templateUrl: './insurance-quote.component.html',
  styleUrls: ['./insurance-quote.component.css'],
  providers: [InsuranceQuoteQuestionService]
})

export class InsuranceQuoteComponent {
  questions: any[];
  payload: any;

  constructor(questionService: InsuranceQuoteQuestionService) {
    this.questions = questionService.getQuestions();
  }

  onSubmitted(payload: any) {
    this.payload = payload;
  }
}