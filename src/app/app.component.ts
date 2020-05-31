import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardsService } from './_services/cards.service';
import { CardItem } from './_models/cardItem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  cards: CardItem[];
  noData = false;
  private onDestroySubscribe: Subject<void> = null;

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.cardsService.getAll().pipe(takeUntil(this.getUnsubscriber())).subscribe((data: CardItem[]) => {
      if (data.length < 1) {
        this.noData = true;
      }
      this.cards = data;
    });
  }

  getUnsubscriber(): Subject<void> {
    if (!this.onDestroySubscribe) {
      this.onDestroySubscribe = new Subject<void>();
    }
    return this.onDestroySubscribe;
  }

  ngOnDestroy(): void {
    if (this.onDestroySubscribe) {
      this.onDestroySubscribe.next();
      this.onDestroySubscribe.complete();
    }
  }
}
