import { FavoriteService } from './favorite.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = []

  constructor(private FavoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.FavoriteService.getFavorites();
  }
}
