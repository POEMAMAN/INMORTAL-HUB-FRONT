import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: { sender: string, message: string, id: number }[] = [];
  messageInput: string = '';
  activeUsers: string[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessage().subscribe((message: any) => {
      this.messages.push(message);
    });

    this.chatService.getActiveUsers().subscribe((users: string[]) => {
      this.activeUsers = users;
    });

    // Aquí podrías solicitar al usuario que ingrese su nombre de usuario
    // y luego llamar al método de inicio de sesión del servicio de chat
    // para pasar el nombre de usuario al servidor.
    const username = prompt('Ingresa tu nombre de usuario:');
    if (username) {
      this.chatService.login(username);
    }
  }

  sendMessage(): void {
    if (this.messageInput.trim() !== '') {
      this.chatService.sendMessage({ message: this.messageInput, sender: 'Usuario', id: null });
      this.messageInput = '';
    }
  }
}



