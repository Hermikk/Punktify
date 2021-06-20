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
  result2 = null;

  ngOnInit() {
    this.game = this.activatedRoute.snapshot.paramMap.get('game');
    this.teamOne = this.activatedRoute.snapshot.paramMap.get('teamOne');
    this.teamTwo = this.activatedRoute.snapshot.paramMap.get('teamTwo');
    this.oneScoreValue = this.activatedRoute.snapshot.paramMap.get('oneScoreValue');
    this.twoScoreValue = this.activatedRoute.snapshot.paramMap.get('twoScoreValue');
   
    if(this.oneScoreValue==this.twoScoreValue) {
      this.result = "Mäng jäi viiki!";
      this.result2 = "Keegi ei võitnud!"
    } else if(this.oneScoreValue>this.twoScoreValue){
      this.result = "Mängu võitis";
      this.winner = this.teamOne;
    } else {
      this.result = "Mängu võitis";
      this.winner = this.teamTwo;
    }

  }





}
