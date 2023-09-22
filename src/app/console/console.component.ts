import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CipherService } from '../services/cipher.service';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { IMessageHeader } from '../interfaces/message.interface';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  surpriseForm: FormGroup = new FormGroup<any>('');
  message: IMessageHeader = {
    title: 'Para ti',
    subtitle: 'Mi Amor'
  }

  constructor(private fb: FormBuilder,
              private clipboard: Clipboard,
              private cipherService: CipherService) {
  }

  ngOnInit(): void {
    this.initSurpriseForm();
  }

  initSurpriseForm() {
    this.surpriseForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      subtitle: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  handleSubmit() {
    if (this.surpriseForm.invalid) {
      this.surpriseForm.markAllAsTouched();
      return;
    }

    this.share(this.getCustomLink());
  }

  handleCopyButton() {
    this.copyToClipboard(this.getCustomLink());
    alert('Se copio el link en el portapapeles');
  }

  getCustomLink(): string {
    const encrypt: string = this.cipherService.encryptJson(this.surpriseForm.value);
    const codec: HttpUrlEncodingCodec = new HttpUrlEncodingCodec();
    return `${window.location.origin}/?data=${codec.encodeValue(encrypt)}`;
  }

  private share(link: string): void {
    const navigator: Navigator = window.navigator as Navigator;

    if (navigator.share) {
      navigator.share({
        title: 'Sorpresa Amarilla',
        text: 'Entra a ver tu sorpresa',
        url: link
      }).then();
    } else {
      this.copyToClipboard(link);
      alert('Se copio el link en el portapapeles');
    }
  }

  private copyToClipboard(value: string): void {
    this.clipboard.copy(value);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.surpriseForm.controls;
  }

}
