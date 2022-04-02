import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  Posts = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
  async searchUser(event){
    if(event.detail.value==""){

    }else{
      this.getAlbum(event.detail.value);
    }
  }
  getAlbum(id){
    this.http
    .get<any>("https://jsonplaceholder.typicode.com/users/"+id+"/posts")
    .subscribe((res) => {
      console.log(res)
      this.Posts = res;
    });
  }
}