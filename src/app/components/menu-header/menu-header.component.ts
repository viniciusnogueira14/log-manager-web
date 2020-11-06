import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems, {});
    });
  }

  setActive(element: any): void {
    console.log(element);
  }

}
