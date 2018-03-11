import { Component, OnInit } from '@angular/core';
import {Wish} from '../../domain/wish';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishes: Wish[] = [];

  constructor() { }

  ngOnInit() {
  }

}
