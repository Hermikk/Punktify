import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage {
  //sisendite muutujad
  game: string = "";
  teamOne: string = "";
  teamTwo: string = "";

  ngOnInit() {
  }
  constructor(private nav: NavController){

  }
    //navigeerime edasi ja saadame muutujad kaasa
  pushPage() {
    this.nav.navigateForward('${this.game}{this.teamOne}{this.teamTwo}');
  }

}
