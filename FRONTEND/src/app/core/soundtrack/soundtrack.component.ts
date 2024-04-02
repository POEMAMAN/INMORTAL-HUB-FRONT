import { Component } from '@angular/core';
import { AudioService } from './audio-service.service';

@Component({
  selector: 'app-soundtrack',
  templateUrl: './soundtrack.component.html',
  styleUrls: ['./soundtrack.component.css']
})
export class SoundtrackComponent {

  constructor(private audioService: AudioService) { }

  reproducirCancion(index: number): void {
    const urls = [
      'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1712058464/soundtrack/Steve_Jablonsky_-_Arrival_To_Earth_Official_Audio_1080p_25fps_H264-128kbit_AAC_c6f3uw_o9b0rv.mp4',
      'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1712058461/soundtrack/Underworld_2003_Original_Soundtrack_-_Official_Album_Preview_360p_24fps_H264-128kbit_AAC_zdwgt0_ny9y5y.mp4',
      'https://res.cloudinary.com/dqh5ovfj1/video/upload/v1712058459/soundtrack/Resident_Evil_Complete_Score_1_-_Main_Title_Edit_1080p_30fps_H264-128kbit_AAC_w6v19n_pmrvmw.mp4'
    ];
    this.audioService.playSounds(urls);
  }

  detenerCanciones(): void {
    this.audioService.stopSounds();
  }
}





