import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  Posts = [];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.http
      .get<any>("https://jsonplaceholder.typicode.com/posts")
      .subscribe((res) => {
        console.log(res)
        this.Posts = res;
      });
  }
}
