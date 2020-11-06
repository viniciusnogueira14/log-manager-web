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
    this.filter = new Filter(this.searchFields.value);
    this.logEntryService.getByFilter(this.filter).subscribe(
      (response: any) => {
        this.searchResponse = new SliceResponse(response);
        this.logEntries = this.searchResponse.content;
      }
    );

  }

  onReset(): void {
    this.searchFields.reset();
    this.logEntries = new Array<LogEntry>();
  }

}
