import { Component, OnInit } from '@angular/core';
import {MyappComponent} from "../myapp.component";

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss']
})
export class ShowPageComponent extends MyappComponent implements OnInit {

  constructor() {
    super(null);
    console.log(this.uiDivisionObject);
  }

  ngOnInit() {
  }

}
