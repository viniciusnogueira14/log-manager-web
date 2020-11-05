import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LogEntry } from 'src/app/models/log-entry.model';
import { LogEntryService } from 'src/app/services/log-entry.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-insert-page',
  templateUrl: './insert-page.component.html',
  styleUrls: ['./insert-page.component.css']
})
export class InsertPageComponent implements OnInit {

  constructor(private logEntryService: LogEntryService, private toastService: ToastService) { }

  ngOnInit(): void {

  }

  onSubmitClick(logEntry: LogEntry): void {
    this.logEntryService.createOne(logEntry).subscribe(
      (response: LogEntry) => {
        this.toastService.show('Log created successfully');
      }
    );
  }

}
