import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogEntry } from 'src/app/models/log-entry.model';

declare const $: any;
declare const M: any;

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  @Output() submitClick = new EventEmitter<LogEntry>();

  formFields: FormGroup;
  logEntry: LogEntry = new LogEntry();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('textarea#user-agent').characterCounter();
      M.updateTextFields();
    });

    this.formFields = this.registerFormFields();
  }

  registerFormFields(): FormGroup {
    return this.formBuilder.group({
      logDate: ['', Validators.required],
      ipAddress: ['', [Validators.required,
        Validators.pattern('^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$')]],
      request: ['', Validators.required],
      logStatus: ['', Validators.required],
      userAgent: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  onSubmit(): void {
    if (this.formFields.invalid) {
      return;
    }

    this.logEntry = new LogEntry(this.formFields.value);
    this.submitClick.emit(this.logEntry);
  }

  onReset(): void {
    this.logEntry = new LogEntry();
    this.formFields.reset();
  }

}
