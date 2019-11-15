import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// key that is used to access the data in local storage
const STORAGE_KEY = 'notifications';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  notifications: Notification[] = [];
  escapeApiToken: string;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private messageService: MessageService) {
    this.notifications = this.storage.get(STORAGE_KEY) || this.notifications;
    this.obtainAccessToken();
  }

  obtainAccessToken() {
    let params = new HttpParams()
      .set('grant_type', environment.escapeApi.accessToken.grantType)
      .set('audience', environment.escapeApi.accessToken.audience);
    let headers = new HttpHeaders()
      .set('Content-type', 'application/x-www-form-urlencoded')
      .set('ClientId', 'client')
      .set('Authorization', 'Basic ' + btoa(`${environment.escapeApi.accessToken.credentials.user}:${environment.escapeApi.accessToken.credentials.password}`));

    this.httpClient.post(
      `${environment.escapeApi.baseUrl}/${environment.escapeApi.accessToken.path}`,
      params,
      {
        headers: headers,
        withCredentials: true
      })
      .subscribe(
        (result) => {
          this.escapeApiToken = `Bearer ${result['access_token']}`;
        },
        (error) => {
          this.handleError<Object>('Obtain Access Token', error);
        }
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  log(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 4000,
    });
    this.messageService.add(`${message}`);
  }
}