import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  constructor(private http: HttpClient) {}

  uploadAvatar(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('avatar', file, file.name);
    return this.http.post<any>('avatarUrl', formData);
  }
}

