import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;;

  constructor() {
    this.socket = io('http://localhost:4200');
  }

  sendMessage(message: any): void {
    this.socket.emit('chat message', message);
  }

  getMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('chat message', (data: any) => {
        observer.next(data);
      });
    });
  }

  getActiveUsers(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('active users', (users: any) => {
        observer.next(users);
      });
    });
  }

  login(username: string): void {
    this.socket.emit('login', username);
  }
}


