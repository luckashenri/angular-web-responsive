import { Component, OnInit, Input } from '@angular/core';
import { CardItem } from 'src/app/_models/cardItem';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() payload: CardItem;

  constructor() { }

  ngOnInit() {
  }

}
