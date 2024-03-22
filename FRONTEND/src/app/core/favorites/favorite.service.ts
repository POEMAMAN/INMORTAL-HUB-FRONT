import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites: any[] = [];

  constructor() { }

  getFavorites(): any[] {
    return this.favorites;
  }

  addToFavorites(item: any): void {
    this.favorites.push(item);
  }

  removeFromFavorites(item: any): void {
    const index = this.favorites.indexOf(item);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}

