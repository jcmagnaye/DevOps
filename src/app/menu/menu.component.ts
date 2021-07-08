import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `<embed src="assets/menu.png" width="400px" height="650px" />`
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
