import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'unit-test-practice';
  active = true;
  users: any;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData().subscribe(res => {
      this.users = res;
    });
  }
}
