import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `<embed class="header" src="assets/header-img.png" />`
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
