import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CipherService } from '../services/cipher.service';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { WebShareService } from 'ng-web-share';
import { environment } from '../../environments/environment';
import { IMessageHeader } from '../home/home.component';

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
              private cipherService: CipherService,
              private webShareService: WebShareService) {
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

  sendGift() {
    if (this.surpriseForm.invalid) {
      return;
    }
    const encrypt: string = this.cipherService.encryptJson(this.surpriseForm.value);
    const codec: HttpUrlEncodingCodec = new HttpUrlEncodingCodec();
    const encodedData: string = codec.encodeValue(encrypt);
    const link: string = `${window.location.origin}${environment.production ? window.location.pathname : '/'}?data=${encodedData}`;
    console.log('Link', link);
    this.share(link);
  }

  share(link: string) {

    if (!this.webShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }

    this.webShareService.share({
      title: 'Sorpresa Amarilla',
      text: 'Tienes una sorpresa',
      url: link
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

}
