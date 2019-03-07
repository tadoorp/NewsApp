import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles:any=[];
  constructor(private _newsService:NewsService, private _service:LoginService, private _router:Router) { }

  ngOnInit() {
    
    this._newsService.getData()
    .subscribe((news)=>{
      console.log(news);
      this.articles=news;
    });
    console.log("here");
     console.log(this._service.loginCheck); 
  }
  Logout(){
    this._service.loginCheck=false;
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }
  


}
