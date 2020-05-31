import { Injectable } from '@angular/core';
import { CardItem } from '../_models/cardItem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardsService {

  fakeCards: CardItem[] = [
    {
      imgUrl: 'assets/Tile_Image.jpg',
      price: '$7.50 / ton',
      title: 'Kariba redd + - Zimbabwe',
      subtitle: 'Reduced Emmissions from Deforestation and Degradation',
      detail: '955,548 lbs. offset',
      description: 'Protects forests and widlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      imgUrl: 'assets/Tile_Image.jpg',
      price: '$7.50 / ton',
      title: 'Kariba redd + - Zimbabwe',
      subtitle: 'Reduced Emmissions from Deforestation and Degradation',
      detail: '955,548 lbs. offset',
      description: 'Protects forests and widlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      imgUrl: 'assets/Tile_Image.jpg',
      price: '$7.50 / ton',
      title: 'Kariba redd + - Zimbabwe',
      subtitle: 'Reduced Emmissions from Deforestation and Degradation',
      detail: '955,548 lbs. offset',
      description: 'Protects forests and widlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      imgUrl: 'assets/Tile_Image.jpg',
      price: '$7.50 / ton',
      title: 'Kariba redd + - Zimbabwe',
      subtitle: 'Reduced Emmissions from Deforestation and Degradation',
      detail: '955,548 lbs. offset',
      description: 'Protects forests and widlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      imgUrl: 'assets/Tile_Image.jpg',
      price: '$7.50 / ton',
      title: 'Kariba redd + - Zimbabwe',
      subtitle: 'Reduced Emmissions from Deforestation and Degradation',
      detail: '955,548 lbs. offset',
      description: 'Protects forests and widlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      imgUrl: 'assets/Tile_Image.jpg',
      price: '$7.50 / ton',
      title: 'Kariba redd + - Zimbabwe',
      subtitle: 'Reduced Emmissions from Deforestation and Degradation',
      detail: '955,548 lbs. offset',
      description: 'Protects forests and widlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    }
  ];

  private cardsSource = new BehaviorSubject<CardItem[]>(this.fakeCards);

  /**
   * GET all Cards
   *
   * @returns an observable array of CardItem
   */
  getAll(): Observable<CardItem[]> {
    return this.cardsSource.asObservable();
  }
}
