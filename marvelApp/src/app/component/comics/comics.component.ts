import { Component } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {

  comics: any = [];

  constructor(private comicService: ComicsService){

  }
  i: number = 0 
  ngOnInit(){
    this.comicsGets()
  }

  comicsGets(){
    this.comicService.getComics().subscribe(
      res => {
        for (this.i = 0;this.i <= res.data.results.length-1 ; this.i++){
          if(!res.data.results[this.i].description){
            res.data.results[this.i].description = "Sin descripcion"
          }
        }
        this.comics = res.data.results
      },
      err => console.error(err)
    )
  }
}
