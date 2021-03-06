import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private nav: NavController) {
  } 

  //määrame tühjad muutujad
  game = null;
  teamOne = null;
  teamTwo = null;
  oneScoreValue: number;
  twoScoreValue: number;


  ngOnInit() {
    //anname eelnevalt määratud muutujatele väärtused, mis tulid eelmised lehelt kaasa
    this.game = this.activatedRoute.snapshot.paramMap.get('game');
    this.teamOne = this.activatedRoute.snapshot.paramMap.get('teamOne');
    this.teamTwo = this.activatedRoute.snapshot.paramMap.get('teamTwo');
    this.oneScoreValue = 0;
    this.twoScoreValue = 0;

  }
  
  //punktide lugemise osa
   onePlus(){
    this.oneScoreValue++;
   }
   oneNeg(){
    this.oneScoreValue--;
   }
   twoPlus(){
    this.twoScoreValue++;
   }
   twoNeg(){
    this.twoScoreValue--;
   }


  pushPage() {
    this.nav.navigateForward('${this.game}{this.teamOne}{this.teamTwo}{this.oneScoreValue}{this.twoScoreValue}');
  }

}
