import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
