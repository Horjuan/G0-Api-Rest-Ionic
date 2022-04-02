import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  Comments = [];

  constructor(private activatedroute: ActivatedRoute, private http: HttpClient) { }

  async ngOnInit() {
    var id = this.activatedroute.snapshot.paramMap.get('id');
    this.http
      .get<any>("https://jsonplaceholder.typicode.com/posts/"+id+"/comments")
      .subscribe((res) => {
        console.log(res)
        this.Comments = res;
      });
  }
}
