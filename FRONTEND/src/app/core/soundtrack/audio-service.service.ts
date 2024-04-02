import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioContext: AudioContext;
  private sources: AudioBufferSourceNode[] = [];
  private urls: string[] = [];

  constructor() {
    this.audioContext = new AudioContext();
  }

  playSounds(urls: string[]): void {
    this.urls = urls; // Almacena las URLs en el servicio para uso posterior
    this.urls.forEach(url => {
      fetch(url)
        .then(response => response.arrayBuffer())
        .then(buffer => this.audioContext.decodeAudioData(buffer))
        .then(decodedData => {
          const source = this.audioContext.createBufferSource();
          source.buffer = decodedData;
          source.connect(this.audioContext.destination);
          source.start(0);
          this.sources.push(source);
        })
        .catch(error => console.error('Error al cargar el archivo de audio:', error));
    });
  }

  stopSounds(): void {
    this.sources.forEach(source => {
      source.stop();
    });
    this.sources = []; // Limpia el array de fuentes después de detenerlas
  }
}








