import { Component, OnInit } from '@angular/core';

import { Game } from "./game";
import { GamesService } from "./games.service";

@Component({
    selector: 'gamely-games',
    templateUrl: 'app/games/games.html',
    providers: [GamesService]
})
export class GamesComponent {
    games: Game[];
    error: any;

    constructor(private gamesService:GamesService) {
    }

    ngOnInit() {
        this.getGames();
    }

    getGames() {
        this.gamesService
            .getGames()
            .then(games => this.games = games)
            .catch(error => this.error = error);
    }

}