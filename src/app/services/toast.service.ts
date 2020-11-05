import { Injectable } from '@angular/core';

declare const M: any;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  public show(text: string): void {
    M.toast({html: text, classes: 'rounded'});
  }

}
