
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioContext: AudioContext;
  private source!: AudioBufferSourceNode;

  constructor() {
    this.audioContext = new AudioContext();
  }

  playSound(): void {
    // Carga el archivo de audio
    fetch('https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711116018/soundtrack/Banda_Sonora_-_El_Se%C3%B1or_de_los_Anillos_480p_25fps_H264-128kbit_AAC_rckj8m.mp4')
      .then(response => response.arrayBuffer())
      .then(buffer => this.audioContext.decodeAudioData(buffer))
      .then(decodedData => {
        this.source = this.audioContext.createBufferSource();
        this.source.buffer = decodedData;
        this.source.connect(this.audioContext.destination);
        this.source.start(0);
      })
      .catch(error => console.error('Error al cargar el archivo de audio:', error));
  }

  stopSound(): void {
    if (this.source) {
      this.source.stop();
    }
  }
}


