import { Component, OnInit } from '@angular/core';
import { gameFake } from 'src/app/dataFake/GameFake';
import { Game } from 'src/app/model/Game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  gameList: Game[] = [];
  
  ngOnInit(): void {
   this.gameList = gameFake;
  }
  
}
