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
  LikeValue: number;

  ngOnInit() {
    //anname eelnevalt määratud muutujatele väärtused, mis tulid eelmised lehelt kaasa
    this.game = this.activatedRoute.snapshot.paramMap.get('game');
    this.teamOne = this.activatedRoute.snapshot.paramMap.get('teamOne');
    this.teamTwo = this.activatedRoute.snapshot.paramMap.get('teamTwo');
    this.LikeValue = 0;
  }
  
  //punktide lugemise osa
  handleLike(){
    this.LikeValue++;
   }
   handleDisLike(){
    this.LikeValue--;
   }

  teamOneScore = [{
    'qty': 0,
  }];
  teamOneScoreNew() {
    this.teamOneScore = this.teamOneScore.map(points => {
      points['qty'] = 0;
      return points;
    });
  }

  plusPoint(index: number) {
    this.teamOneScore[index].qty += 1;
  }

  minusPoint(index: number) {
    this.teamOneScore[index].qty -= 1;
  }
  pushPage() {
    this.nav.navigateForward('${this.game}{this.teamOne}{this.teamTwo}{this.LikeValue');
  }

}
