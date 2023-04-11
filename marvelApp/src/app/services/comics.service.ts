import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  ts = "1";
  APIKEY = 'fb6c38c02be2cc0a44935b451b2c1d1c'
  API_URI = 'http://gateway.marvel.com/v1/public/comics';
  HASH = '576828f7eb1d4d5aa701c7d8eb3591d3'

  getComic():Observable<any>{
    return this.http.get<any>(`${this.API_URI}?ts=${this.ts}&apikey=${this.APIKEY}&hash=${this.HASH}`)
  }

  get2(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto")
  }
}
