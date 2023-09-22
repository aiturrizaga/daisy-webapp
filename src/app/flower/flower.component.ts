import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent implements AfterViewInit {

  audioPath: string = 'assets/sounds/flores-amarillas-song_short.mp3';
  // @ts-ignore
  @ViewChild('audio') audio: ElementRef;
  // @ts-ignore
  @ViewChild('button') btn: ElementRef;

  ngAfterViewInit(): void {
    this.audio.nativeElement.play();
    this.btn.nativeElement.click();
    this.audio.nativeElement.play();
  }
}
