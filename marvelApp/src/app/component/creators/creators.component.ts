import { Component } from '@angular/core';
import { CreatorsService } from '../../services/creators.service'

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent {

  constructor( private creatorsService: CreatorsService ){}

  creators: any = []

  ngOnInit(){
    this.getCreators()
  }

  getCreators(){
    this.creatorsService.getCreators().subscribe(
      res => {
        this.creators = res.data.results
        console.log(this.creators)
      },
      err => console.error(err)

    )
  }
}
