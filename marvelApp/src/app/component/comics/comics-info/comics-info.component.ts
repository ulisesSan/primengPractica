import { Component } from '@angular/core';
import { ComicsService } from '../../../services/comics.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-comics-info',
  templateUrl: './comics-info.component.html',
  styleUrls: ['./comics-info.component.scss']
})
export class ComicsInfoComponent {

  constructor(private comicServce: ComicsService, private rutas: Router, private activedRouting: ActivatedRoute){

  }

  ngOnInit(){
    this.comicInfo()
  }

  comicInfo(){
    var params = this.activedRouting.snapshot.params;
    console.log(params['id'])
    this.comicServce.getComic(params['id']).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)

    )
  }
}
