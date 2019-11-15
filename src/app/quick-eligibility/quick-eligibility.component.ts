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
  appService: AppService
  brokerAuth: string = btoa(`${environment.escapeApi.credentials.user}:${environment.escapeApi.credentials.password}`);
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
    appService: AppService,
    questionService: QuickEligibilityQuestionService,
    private cdr: ChangeDetectorRef,
    private api: QuickEligibilityService
  ) {
    this.appService = appService;
    this.questions = questionService.getQuestions();
  }

  toMappedPayload(payload: any) {
    //TODO: map flat JSON payload using QuestionBase.mapping
    let mappedPayload: any = payload;
    return mappedPayload;
  }

  onSubmitted(payload: any) {
    this.result = [];
    this.operationInProgress = true;
    let mappedPayload: RequestSchema = payload;
    this.api
      .quickEligibility(mappedPayload, this.appService.escapeApiToken, this.brokerAuth)
      .subscribe(
        (result: ResponseSchema) => {
          if (result && 'results' in result) {
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