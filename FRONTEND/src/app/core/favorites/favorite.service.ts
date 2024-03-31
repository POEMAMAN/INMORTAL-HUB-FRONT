import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites: any[] = [];

  constructor() { }

  addToFavorites(item: any) {
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
    }
  }

  removeFromFavorites(item: any) {
    const index = this.favorites.indexOf(item);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

  getFavorites() {
    return this.favorites;
  }
}

