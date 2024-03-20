import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  avatarUrl: string ="";
;
onFileSelected(event: Event): void {
  const inputElement = event.target as HTMLInputElement;

  if (inputElement && inputElement.files && inputElement.files.length > 0) {
    const file: File = inputElement.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target && e.target.result) {
        this.avatarUrl = e.target.result as string;
      }
    };

    reader.readAsDataURL(file);
  }
}
onChangeAvatar(): void {
  // Lógica para cambiar el avatar
  // Por ejemplo, podrías reiniciar avatarUrl para permitir seleccionar una nueva imagen
  this.avatarUrl = '';
  }
}
