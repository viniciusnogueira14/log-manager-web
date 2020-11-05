import { Component, OnInit } from '@angular/core';
import { LogEntryService } from 'src/app/services/log-entry.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.css']
})
export class ImportPageComponent implements OnInit {

  selectedFile: File;
  responseText: string;
  canSend = false;

  constructor(private logEntryService: LogEntryService, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  onSelectFile(file: any): void {
    this.responseText = null;
    if (file.target.files && file.target.files.length > 0) {
      if (file.target.files[0].size > 10485760) {
        this.toastService.show('The file selected is too large.');
        this.canSend = false;
        return;
      }
      this.selectedFile = file.target.files[0];
      this.canSend = true;
    } else {
      this.toastService.show('The file selected is incorrect.');
      this.canSend = false;
    }
  }

  onSendFile(): void {
    if (!this.canSend) {
      return;
    }
    if (this.selectedFile) {
      this.logEntryService.createByFile(this.selectedFile).subscribe(
        (response: any) => {
          this.toastService.show(response.text);
          this.responseText = response.text;
          this.canSend = false;
        },
        (err: any) => {
          this.toastService.show(err.error.text);
          this.canSend = false;
        }
      );
    } else {
      this.toastService.show('There is no file selected.');
    }
  }

}
