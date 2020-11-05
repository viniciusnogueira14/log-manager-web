import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filter } from 'src/app/models/filter.model';
import { LogEntry } from 'src/app/models/log-entry.model';
import { SliceResponse } from 'src/app/models/slice-response.model';
import { LogEntryService } from 'src/app/services/log-entry.service';

declare const $: any;
declare const M: any;

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchFields: FormGroup;
  filter: Filter;
  logEntries = new Array<LogEntry>();
  searchResponse: SliceResponse;

  constructor(private formBuilder: FormBuilder, private logEntryService: LogEntryService) { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('textarea#user-agent').characterCounter();
      M.updateTextFields();
    });

    this.searchFields = this.registerFormFields();
    this.mockLogEntries();
  }

  mockLogEntries(): void {
    const log1 = new LogEntry();
    log1.code = 1;
    log1.logDate = '2020-01-01 00:00:11.763';
    log1.ipAddress = '192.168.234.82';
    log1.request = 'GET / HTTP/1.1';
    log1.logStatus = 200;
    log1.userAgent = 'swcd (unknown version) CFNetwork/808.2.16 Darwin/15.6.0';

    const log2 = new LogEntry();
    log2.code = 2;
    log2.logDate = '2020-01-01 00:00:23.003';
    log2.ipAddress = '192.168.169.194';
    log2.request = 'GET / HTTP/1.1';
    log2.logStatus = 200;
    log2.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393';

    const log3 = new LogEntry();
    log3.code = 3;
    log3.logDate = '2020-01-01 00:01:02.113';
    log3.ipAddress = '192.168.247.138';
    log3.request = 'GET / HTTP/1.1';
    log3.logStatus = 200;
    log3.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0';

    const log4 = new LogEntry();
    log4.code = 4;
    log4.logDate = '2020-01-01 00:01:04.033';
    log4.ipAddress = '192.168.54.139';
    log4.request = 'GET / HTTP/1.1';
    log4.logStatus = 200;
    log4.userAgent = 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36';

    const log5 = new LogEntry();
    log5.code = 5;
    log5.logDate = '2020-01-01 00:00:59.410';
    log5.ipAddress = '192.168.169.194';
    log5.request = 'GET / HTTP/1.1';
    log5.logStatus = 200;
    log5.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393';

    this.logEntries.push(log1);
    this.logEntries.push(log2);
    this.logEntries.push(log3);
    this.logEntries.push(log4);
    this.logEntries.push(log5);
  }

  registerFormFields(): FormGroup {
    return this.formBuilder.group({
      ipAddress: ['', Validators.pattern('^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$')],
      logDate: [''],
      datePeriod: [''],
      userAgent: ['', [Validators.maxLength(1000)]]
    });
  }

  onSubmit(): void {
    console.log('TESTE');
    console.log(this.searchFields);

    this.filter = new Filter(this.searchFields.value);
    this.logEntryService.getByFilter(this.filter).subscribe(
      (response: any) => {
        this.searchResponse = new SliceResponse(response);
        this.logEntries = this.searchResponse.content;

        console.log(this.searchResponse);
      }
    );

  }

  onReset(): void {
    // this.logEntry = new LogEntry();
    this.searchFields.reset();
  }

}
