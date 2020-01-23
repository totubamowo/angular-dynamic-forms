import { Component, Inject } from '@angular/core';
import { QuickIndicationQuestionService } from './quick-indication.question.service';
import { RequestSchema, QuickIndicationService, ResponseSchema, ResponseSchemaPolicy } from '../starstone-api-client/quick-indication';
import { AppService } from '../app.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'quick-indication',
  templateUrl: './quick-indication.component.html',
  styleUrls: ['./quick-indication.component.css'],
  providers: [QuickIndicationQuestionService, QuickIndicationService]
})
export class QuickIndicationComponent {
  questions: any[];
  payload: any;

  constructor(
    private appService: AppService,
    private api: QuickIndicationService,
    public dialog: MatDialog,
    questionService: QuickIndicationQuestionService
  ) {
    this.questions = questionService.getQuestions();
  }

  onSubmitted(payload: any): void {
    let mappedPayload: RequestSchema = { policy: payload };
    this.api
      .quickIndication(mappedPayload, this.appService.escapeApiToken, this.appService.brokerAuthToken)
      .subscribe((result: ResponseSchema) => {
        this.dialog.open(PremiumDialog, {
          width: '500px',
          data: result
        });
      }, (error) => {
          this.payload = error.error;
      });
  }
}

@Component({
  selector: 'premium-dialog',
  templateUrl: 'premium-dialog.html',
})
export class PremiumDialog {
  constructor(
    public dialogRef: MatDialogRef<PremiumDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ResponseSchema) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}