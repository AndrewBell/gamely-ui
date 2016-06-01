import { Component } from '@angular/core';

@Component({
    selector: 'gamely-games',
    template: `<p>Title: {{game}}</p>`
})
export class GamesComponent {
    game = "my cool game"
}