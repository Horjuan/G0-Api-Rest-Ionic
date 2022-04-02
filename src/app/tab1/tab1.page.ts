import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  Users = [];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.http
      .get<any>("https://jsonplaceholder.typicode.com/users")
      .subscribe((res) => {
        console.log(res)
        this.Users = res;
      });
  }
}
