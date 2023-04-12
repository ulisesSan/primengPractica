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
        this.comics = res.data.results
        console.log(this.comics)
      },
      err => console.error(err)
    )
  }
}
