import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html'
})
export class MessageHeaderComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) subtitle: string = '';
}
