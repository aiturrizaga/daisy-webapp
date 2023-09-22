import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CipherService } from '../services/cipher.service';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IMessageHeader } from '../interfaces/message.interface';

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
    const encrypt: string = this.cipherService.encryptJson(this.surpriseForm.value);
    const codec: HttpUrlEncodingCodec = new HttpUrlEncodingCodec();
    const link: string = `${window.location.origin}/?data=${codec.encodeValue(encrypt)}`;
    console.log('Link', link);
    this.share(link);
  }

  share(link: string): void {
    const navigator: Navigator = window.navigator as Navigator;

    if (navigator.share) {
      navigator.share({
        title: 'Sorpresa Amarilla',
        text: 'Entra a ver tu sorpresa',
        url: link
      }).then();
    } else {
      alert('Se copio el link en el portapapeles');
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.surpriseForm.controls;
  }

}
