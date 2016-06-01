import { Component } from '@angular/core';

import { GamesComponent } from './games/games.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <gamely-games>Bar</gamely-games>
    `,
    directives: [GamesComponent]
})
export class AppComponent {
    title = 'Gamely Board Games Manager';
}