import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  myhero: Hero = {
    id: 1,
    name: 'Yam'
    gender: 'Female'
  };



  constructor() { }

  ngOnInit() {
  }

}