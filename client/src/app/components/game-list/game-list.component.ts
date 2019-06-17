import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from "../../services/games.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any = [];

  constructor(private gamesService: GamesService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },  // Resposta
      err => console.error(err) // error
    )
  }

  deleteGame(id: string){
    this.gamesService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.log(err)
    )
  }

  // editGame(id: string){
    // this.gamesService.editGame(id).subscribe(
      // res => {
        // console.log(id);
        // this.getGames();
      // },
      // err => console.log(err)
    // )
  // }

}
