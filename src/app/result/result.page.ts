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
  oneLikeValue = null;
  twoLikeValue = null;


  ngOnInit() {
    this.game = this.activatedRoute.snapshot.paramMap.get('game');
    this.teamOne = this.activatedRoute.snapshot.paramMap.get('teamOne');
    this.teamTwo = this.activatedRoute.snapshot.paramMap.get('teamTwo');
    this.oneLikeValue = this.activatedRoute.snapshot.paramMap.get('oneLikeValue');
    this.twoLikeValue = this.activatedRoute.snapshot.paramMap.get('twoLikeValue');

  }

}
