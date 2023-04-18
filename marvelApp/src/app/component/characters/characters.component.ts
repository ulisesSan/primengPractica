import { Component } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  i = 0
  characters: any = []

  constructor(private character: CharactersService){

  }

  ngOnInit(){
    this.getCharacter()
  }

  getCharacter(){
    
    this.character.getCharacters().subscribe(
      res => {
        //this.characters = res.data.results
        for(this.i = 0;  this.i <= res.data.results.length-1; this.i++){
          if(!res.data.results[this.i].description){
            console.log(this.i)
            res.data.results[this.i].description = "Sin descripción"
          }
        }
        this.characters = res.data.results
      }
    )
  }

}
