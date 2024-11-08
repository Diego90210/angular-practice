import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name:'uncharted 4',
    },
    {
      id: 2,
      name: 'horizon zero'
    },
    {
      id: 3,
      name: 'bloodborne'
    }
  ]
}
