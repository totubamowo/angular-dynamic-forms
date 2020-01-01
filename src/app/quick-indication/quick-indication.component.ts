import { Component } from '@angular/core';
import { QuickIndicationQuestionService } from './quick-indication.question.service'
import { AppService } from '../app.service';

@Component({
  selector: 'quick-indication',
  templateUrl: './quick-indication.component.html',
  styleUrls: ['./quick-indication.component.css'],
  providers: [QuickIndicationQuestionService]
})

export class QuickIndicationComponent {
  appService: AppService
  questions: any[];
  payload: any;

  constructor(questionService: QuickIndicationQuestionService) {
    this.questions = questionService.getQuestions();
  }

  onSubmitted(payload: any) {
    this.payload = payload;
  }
}