import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import { environment } from '../../environments/environment';
import { QuickEligibilityQuestionService } from './quick-eligibility.question.service';
import { RequestSchema, QuickEligibilityService, ResponseSchema, ResponseSchemaResults } from '../starstone-api-client/quick-eligibility';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-quick-eligibility',
  templateUrl: './quick-eligibility.component.html',
  styleUrls: ['./quick-eligibility.component.css'],
  providers: [QuickEligibilityQuestionService, QuickEligibilityService]
})
export class QuickEligibilityComponent implements OnInit, AfterViewInit {
  result: ResponseSchemaResults[];
  questions: any[];
  dataSource: ResultDataSource;
  displayedColumns = ['classCode', 'description', 'eligibility', 'hazardGrade', 'exposureUnit', 'maximumExposure'];
  operationInProgress: boolean;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new ResultDataSource(this.result);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private appService: AppService,
    private cdr: ChangeDetectorRef,
    private api: QuickEligibilityService,
    questionService: QuickEligibilityQuestionService
  ) {
    this.questions = questionService.getQuestions();
  }

  onSubmitted(payload: any) {
    this.result = [];
    this.operationInProgress = true;
    let mappedPayload: RequestSchema = payload;
    this.api
      .quickEligibility(mappedPayload, this.appService.escapeApiToken, this.appService.brokerAuthToken)
      .subscribe(
        (result: ResponseSchema) => {
          if (result && 'results' in result) {
            result.results = result.results.map((row) => {
              row.description = row.description.length > 30 ? `${row.description.substring(0, 26)} ...` : row.description;
              return row;
            });
            this.result = result.results;
            this.dataSource.data = this.result;
            this.appService.log('Success');
          }
          this.operationInProgress = false;
          this.cdr.detectChanges();
        },
        (error) => {
          this.appService.handleError<Object>('Quick ELigibility', error);
          this.operationInProgress = false;
        }
      );
  }
}

export class ResultDataSource extends MatTableDataSource<ResponseSchemaResults> {
  constructor(initialData: ResponseSchemaResults[]) {
    super(initialData);
  }
}