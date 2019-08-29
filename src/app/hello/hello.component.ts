import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public username = "mark";
  constructor() { }

  ngOnInit() {
  }

  replaceUser() {
    return this.username.replace('mark', 'adam');
  }

}
