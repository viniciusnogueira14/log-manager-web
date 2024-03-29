import { SlicePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { endpoints } from 'src/environments/endpoints';
import { Filter } from '../models/filter.model';
import { LogEntry } from '../models/log-entry.model';
import { SliceResponse } from '../models/slice-response.model';

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

  public getByFilter(filter: Filter, pageNumber?: number, pageSize?: number): Observable<SliceResponse> {
    let parameters = new HttpParams();
    if (filter) {
      if (filter.ipAddress) {
        parameters = parameters.set('ipAddress', filter.ipAddress);
      }
      if (filter.logDate) {
        parameters = parameters.set('logDate', filter.logDate);
      }
      if (filter.datePeriod) {
        parameters = parameters.set('datePeriod', filter.datePeriod);
      }
      if (filter.userAgent) {
        parameters = parameters.set('userAgent', filter.userAgent);
      }
    }
    if (pageNumber) {
      parameters = parameters.set('page', pageNumber.toString());
    }
    if (pageSize) {
      parameters = parameters.set('size', pageSize.toString());
    }

    return this.http.get<SliceResponse>(endpoints.log, { params: parameters });
  }
}
