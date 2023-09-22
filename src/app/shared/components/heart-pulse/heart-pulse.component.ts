import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-heart-pulse',
  templateUrl: './heart-pulse.component.html',
  styleUrls: ['./heart-pulse.component.scss']
})
export class HeartPulseComponent {
  @Input() color: string = '#000000';
  @Input() size: string = '20rem';
  @Output() clickHeart: EventEmitter<boolean> = new EventEmitter<boolean>();

  clickOnHeart(): void {
    this.clickHeart.emit(true);
  }

}
