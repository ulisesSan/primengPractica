import { Component } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  characters: any = []

  constructor(private character: CharactersService){

  }

  ngOnInit(){
    this.getCharacter()
  }

  getCharacter(){
    this.character.getCharacters().subscribe(
      res => {
        this.characters = res.data.results
      },
      err => console.error(err)
    )
  }
}
