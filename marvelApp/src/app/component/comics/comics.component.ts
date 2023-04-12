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

  ngOnInit(){
    
    this.comicsGets()
  }

  comicsGets(){
    this.comicService.getComics().subscribe(
      res => {
        this.comics = res.data.results,
        console.log(res.data.results)
      },
      err => console.error(err)
    )
  }

/* Copiar despues
  comicGet(){
    var params =  this.activateRouting.snapshot.params
    this.comicService.getComic(params['idComic']).
  }*/
}
