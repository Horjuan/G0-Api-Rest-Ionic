import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  Albums = [];

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
    .get<any>("https://jsonplaceholder.typicode.com/users/"+id+"/albums")
    .subscribe((res) => {
      console.log(res)
      this.Albums = res;
    });
  }
}
