import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  game = null;
  teamOne = null;
  teamTwo = null;
  oneScoreValue = null;
  twoScoreValue = null;
  result = null;
  winner = null;

  ngOnInit() {
    this.game = this.activatedRoute.snapshot.paramMap.get('game');
    this.teamOne = this.activatedRoute.snapshot.paramMap.get('teamOne');
    this.teamTwo = this.activatedRoute.snapshot.paramMap.get('teamTwo');
    this.oneScoreValue = this.activatedRoute.snapshot.paramMap.get('oneScoreValue');
    this.twoScoreValue = this.activatedRoute.snapshot.paramMap.get('twoScoreValue');
   
    var a = this.oneScoreValue;
    var b = this.twoScoreValue;
    if(a==b) {
      this.result = "Mäng jäi viiki!";
    } else if(a>b){
      this.result = "Mängu võitis";
      this.winner = this.teamOne;
    } else {
      this.result = "Mängu võitis";
      this.winner = this.teamTwo;
    }

  }





}
