import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { endpoints } from 'src/environments/endpoints';
import { LogEntry } from '../models/log-entry.model';

@Injectable({
  providedIn: 'root'
})
export class LogEntryService {

  constructor(private http: HttpClient) { }

  public getLogs(): any {
    return this.http.get(endpoints.log);
  }

  public createOne(logEntry: LogEntry): Observable<LogEntry> {
    return this.http.post<LogEntry>(endpoints.log, logEntry);
  }

  public createByFile(file: File): Observable<string> {

    const formData = new FormData();
    formData.append('content', file);

    return this.http.post<string>(endpoints.batch, formData);
  }
}
