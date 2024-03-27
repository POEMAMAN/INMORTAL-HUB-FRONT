
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
    fetch('https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711400512/segundo%20spring/transformers/soundtracks/Steve_Jablonsky_-_Arrival_To_Earth_Official_Audio_1080p_25fps_H264-128kbit_AAC_c6f3uw.mp4')
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


