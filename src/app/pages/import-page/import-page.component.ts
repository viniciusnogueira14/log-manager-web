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

  constructor(private logEntryService: LogEntryService, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  onSelectFile(file: any): void {
    if (file.target.files && file.target.files.length > 0) {
      this.selectedFile = file.target.files[0];
    } else {
      this.toastService.show('The file selected is incorrect.');
    }
  }

  onSendFile(): void {
    if (this.selectedFile) {
      this.logEntryService.createByFile(this.selectedFile).subscribe(
        (response: any) => {
          this.toastService.show(response);
          this.responseText = response;
        },
        (error: any) => this.toastService.show('ERROR while uploading file.')
      );
    } else {
      this.toastService.show('There is no file selected.');
    }
  }

}
