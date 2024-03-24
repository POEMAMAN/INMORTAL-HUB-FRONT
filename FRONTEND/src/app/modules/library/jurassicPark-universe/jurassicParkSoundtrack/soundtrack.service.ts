
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
    fetch('https://res.cloudinary.com/dqh5ovfj1/video/upload/v1710980920/soundtrack/B_S_O_Parque_Jur%C3%A1sico_-Jurassic_Park_128kbit_AAC_cxhcq4.mp3')
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


