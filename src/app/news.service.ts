import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get("https://newsapi.org/v2/top-headlines?country=in&apikey=debc00eb1b1746c183bfe8ebc419bd55")
    .pipe(map((data)=> data['articles']));
    
    

    
  }
}
