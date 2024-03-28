
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
    fetch('https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711653787/segundo%20spring/xmen/soundtracks/X-Men_2000_-_Banda_Sonora_Completa___Leer_en_la_descripci%C3%B3n_720p_30fps_H264-128kbit_AAC_xkxfyb.mp4')
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


