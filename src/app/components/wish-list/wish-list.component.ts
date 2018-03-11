import {Component, OnInit} from '@angular/core';
import {Wish} from '../../domain/wish';
import {WishService} from '../../services/wish.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishes: Wish[] = [];
  constructor(private wishService: WishService) {
  }

  ngOnInit() {
    this.wishService.getAll().subscribe(
      data => {
        this.wishes = data;
      }, error => {
        alert(error);
      }
    );
  }

  like(id: number): void {
  }

  dislike(id: number): void {
  }

  remove(id: number): void {
  }
}
