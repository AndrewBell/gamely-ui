import { Injectable } from '@angular/core';

import { Game } from './game';

@Injectable()
export class GamesService {
    getGames() {
        console.log('Getting games: ' + GAMES);
        return Promise.resolve(GAMES);
    }
}

var GAMES:Game[] = [
    {"id": 1, "title": "Colt Express", "description": "Bring the wild wild west to your next game night"},
    {"id": 2, "title": "Pathfinder Skulls & Shackles", "description": "Like a tabletop game, but with cards"},
    {"id": 3, "title": "Kodama", "description": "Build zen trees and shit"}
];