import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MdMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  constructor() { }

  ngOnInit() {
  }

}
